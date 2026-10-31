// Client-side behaviour for the contact form (src/components/sections/ContactForm.astro).
// The PHP handler (public/api/contact.php) always re-validates everything.

const MESSAGES = {
  success: 'お問い合わせありがとうございます。担当者より折り返しご連絡いたします。',
  error: '送信できませんでした。時間をおいて再度お試しいただくか、メールにてご連絡ください。',
  required: 'この項目は必須です。',
  email: 'メールアドレスの形式が正しくありません。',
  mismatch: 'メールアドレスが一致しません。',
};

type FieldErrors = Record<string, string>;

function validate(form: HTMLFormElement): FieldErrors {
  const errors: FieldErrors = {};
  const value = (name: string) => (form.elements.namedItem(name) as HTMLInputElement | null)?.value.trim() ?? '';
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  for (const name of ['name', 'email', 'email_confirm', 'message']) {
    if (!value(name)) errors[name] = MESSAGES.required;
  }
  if (value('email') && !emailPattern.test(value('email'))) errors.email = MESSAGES.email;
  if (value('email_confirm') && value('email') !== value('email_confirm')) errors.email_confirm = MESSAGES.mismatch;

  return errors;
}

function showFieldErrors(form: HTMLFormElement, errors: FieldErrors): void {
  form.querySelectorAll('.contact-form__error').forEach((el) => el.remove());
  form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));

  Object.entries(errors).forEach(([name, message]) => {
    const input = form.elements.namedItem(name) as HTMLInputElement | null;
    if (!input) return;
    input.setAttribute('aria-invalid', 'true');
    const error = document.createElement('p');
    error.className = 'contact-form__error';
    error.id = `${input.id}-error`;
    error.textContent = message;
    input.setAttribute('aria-describedby', error.id);
    input.insertAdjacentElement('afterend', error);
  });

  const first = Object.keys(errors)[0];
  if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus();
}

function showStatus(box: HTMLElement, type: 'success' | 'error', message: string): void {
  box.hidden = false;
  box.textContent = message;
  box.classList.toggle('is-error', type === 'error');
  box.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export function initContactForm(): void {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  const status = document.querySelector<HTMLElement>('[data-form-status]');
  const submit = form?.querySelector<HTMLButtonElement>('[data-form-submit]');
  if (!form || !status || !submit) return;

  // Timestamp used by the PHP spam check (bots submit instantly).
  const started = form.querySelector<HTMLInputElement>('[data-form-started]');
  if (started) started.value = String(Math.floor(Date.now() / 1000));

  // Result of a non-JS submit (PHP redirected back with ?status=...).
  const params = new URLSearchParams(window.location.search);
  const result = params.get('status');
  if (result === 'success' || result === 'error') {
    showStatus(status, result, MESSAGES[result]);
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const errors = validate(form);
    showFieldErrors(form, errors);
    if (Object.keys(errors).length) return;

    submit.disabled = true;
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        form.reset();
        showStatus(status, 'success', MESSAGES.success);
      } else {
        if (data.errors) showFieldErrors(form, data.errors);
        showStatus(status, 'error', data.message || MESSAGES.error);
      }
    } catch {
      showStatus(status, 'error', MESSAGES.error);
    } finally {
      submit.disabled = false;
    }
  });
}
