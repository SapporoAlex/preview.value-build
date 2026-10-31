<?php
/**
 * Contact form handler for the static site.
 *
 * Receives the POST from src/components/sections/ContactForm.astro,
 * validates it and emails it using PHP's mail() function.
 *
 * - Requests with "Accept: application/json" (the JavaScript submit)
 *   get a JSON response.
 * - Normal form posts (no JavaScript) are redirected back to the contact page.
 *
 * Settings live in config.php next to this file.
 */

declare(strict_types=1);

$config = require __DIR__ . '/config.php';

$wantsJson = stripos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;

/**
 * Send the response (JSON or redirect) and stop.
 */
function respond(bool $success, array $config, bool $wantsJson, string $message = '', array $errors = [], int $status = 200): void
{
    if ($wantsJson) {
        http_response_code($success ? 200 : $status);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(
            ['success' => $success, 'message' => $message, 'errors' => (object) $errors],
            JSON_UNESCAPED_UNICODE
        );
    } else {
        header('Location: ' . ($success ? $config['redirect_success'] : $config['redirect_error']), true, 303);
    }
    exit;
}

/** Trim a POST value and strip control characters. */
function field(string $key, int $maxLength): string
{
    $value = isset($_POST[$key]) && is_string($_POST[$key]) ? trim($_POST[$key]) : '';
    $value = preg_replace('/[^\P{C}\n\t]/u', '', $value) ?? '';
    return mb_substr($value, 0, $maxLength);
}

/** Remove line breaks so a value can never inject extra mail headers. */
function header_safe(string $value): string
{
    return trim(str_replace(["\r", "\n", '%0a', '%0d'], ' ', $value));
}

// --- Method check ----------------------------------------------------------
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(false, $config, $wantsJson, 'Method not allowed.', [], 405);
}

// --- Spam checks -----------------------------------------------------------
// 1. Honeypot: hidden field that only bots fill in. Pretend it worked.
if (field('website', 200) !== '') {
    respond(true, $config, $wantsJson);
}

// 2. Time trap: the form was submitted suspiciously fast.
$started = (int) field('form_started', 20);
if ($started > 0 && (time() - $started) < (int) $config['min_seconds_to_submit']) {
    respond(false, $config, $wantsJson, '送信が早すぎます。もう一度お試しください。', [], 429);
}

// 3. Throttle repeated submissions from the same browser session.
session_start();
$last = $_SESSION['contact_last_sent'] ?? 0;
if ($last && (time() - $last) < (int) $config['throttle_seconds']) {
    respond(false, $config, $wantsJson, 'しばらく時間をおいてから再度お試しください。', [], 429);
}

// --- Validation ------------------------------------------------------------
$data = [
    'company'       => field('company', 200),
    'name'          => field('name', 200),
    'email'         => field('email', 200),
    'email_confirm' => field('email_confirm', 200),
    'message'       => field('message', 5000),
];

$errors = [];
foreach (['name', 'email', 'email_confirm', 'message'] as $required) {
    if ($data[$required] === '') {
        $errors[$required] = 'この項目は必須です。';
    }
}
if ($data['email'] !== '' && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'メールアドレスの形式が正しくありません。';
}
if ($data['email_confirm'] !== '' && $data['email'] !== $data['email_confirm']) {
    $errors['email_confirm'] = 'メールアドレスが一致しません。';
}

if ($errors) {
    respond(false, $config, $wantsJson, '入力内容をご確認ください。', $errors, 422);
}

// --- Build & send the email -------------------------------------------------
mb_language('uni');
mb_internal_encoding('UTF-8');

$name  = header_safe($data['name']);
$email = header_safe($data['email']);

$body = implode("\n", [
    'ウェブサイトのお問い合わせフォームから送信がありました。',
    '',
    '会社名・団体名: ' . ($data['company'] !== '' ? $data['company'] : '-'),
    'お名前: ' . $name,
    'メールアドレス: ' . $email,
    '',
    'ご相談・お問い合わせ:',
    $data['message'],
    '',
    '---',
    '送信日時: ' . date('Y-m-d H:i:s'),
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'),
]);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: ' . mb_encode_mimeheader($config['from_name']) . ' <' . $config['from_email'] . '>',
    'Reply-To: ' . mb_encode_mimeheader($name) . ' <' . $email . '>',
    'X-Mailer: PHP/' . PHP_VERSION,
];

$sent = mail(
    $config['recipient'],
    mb_encode_mimeheader($config['subject']),
    $body,
    implode("\r\n", $headers),
    '-f' . $config['from_email']
);

if (!$sent) {
    error_log('Contact form: mail() failed for submission from ' . $email);
    respond(false, $config, $wantsJson, '', [], 500);
}

$_SESSION['contact_last_sent'] = time();
respond(true, $config, $wantsJson);
