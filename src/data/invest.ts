// Content for the How We Invest page (src/pages/how-we-invest.astro).

export interface InvestStep {
  icon: string;
  title: string;
  paragraphs: string[];
}

// Step titles are coloured navy / orange / teal / navy in each group.
export const beforeInvestment: InvestStep[] = [
  {
    icon: '/images/how/icon-1.png',
    title: 'Introduction',
    paragraphs: [
      '投資先のベンチャー、ベンチャーキャピタル、ビジネスパートナー、商工会議所など、既存ネットワークから直接紹介を受けることもあれば、本公式ホームページから直接アプローチを受けることもあります。バリュービルドでは常に新規投資先候補を探しています。あなたのビジネスアイデアを是非お聞かせください。',
    ],
  },
  {
    icon: '/images/how/icon-2.png',
    title: 'Pitch',
    paragraphs: [
      'ビジネスアイデアを説明していただくプレゼンテーションの機会を設けています。複数回顔を合わせることで、お互いを理解し合う大切なステージです。また、バリュービルドがすでに投資している企業や、連携している企業とのコラボレーションの可能性を見出す機会にもなります。',
    ],
  },
  {
    icon: '/images/how/icon-3.png',
    title: 'Investment Amount & Vehicle',
    paragraphs: [
      '『02.Pitch』の段階を経てあなたに投資することが決定したら、最終的な投資額や投資方法を双方の相談によって確定します。投資方法については、第三者割当の増資やジョイントベンチャー、転換権付き新株予約権の発行など、さまざまな方法の中から、あなたの状況に合わせた投資方法にて決定します。',
    ],
  },
  {
    icon: '/images/how/icon-7.png',
    title: 'Support on Your First Step',
    paragraphs: ['スタートアップ企業の最初の難関となる会社設立からネットワークの確立まで様々な面でサポートの提供が可能です。'],
  },
];

export const afterInvestment: InvestStep[] = [
  {
    icon: '/images/how/icon-7.png',
    title: 'Business Set Up Support',
    paragraphs: [
      '起業や増資などの経験がないスタートアップには、法人登記のサポート、税理士などのプロフェッショナルの紹介、経営への助言を行います。また、当社投資先を紹介し気軽にコミュニケーションが取れる関係作りをサポートします。',
    ],
  },
  {
    icon: '/images/how/icon-5.png',
    title: 'Regular Update Meeting',
    paragraphs: [
      'ビジネスの進行状況の確認や、現在どのような課題に直面しているのかなどの確認を兼ねたミーティングを、定期的に実施します。',
      '但し、今後どのような道を進んでいくのかを最終的に決定するのはあなた自身です。バリュービルドはベンチャーキャピタルとは異なり、投資先企業を全力でサポートしますが強制はしません。',
    ],
  },
  {
    icon: '/images/how/icon-6.png',
    title: 'Business Network Support',
    paragraphs: [
      'ビジネスが軌道に乗るまでは、人員不足という問題を抱えることになるでしょう。バリュービルドは、必要に応じ可能な業務のサポート、財務相談を実施します。',
      'また、シナジーを発揮するであろう国内外の企業を紹介しネットワークの構築もサポートします。',
    ],
  },
  {
    icon: '/images/how/icon-4.png',
    title: 'Expansion & Exit Strategy',
    paragraphs: [
      'ビジネスが成熟期へと突入すると、更なる拡大を図るのか、事業売却するのか、上場を目指すのかなど、さまざまなステージを考えるタイミングが訪れます。',
      'バリュービルドは今までの経験をもとに最適な選択肢をアドバイスさせていただきます。',
    ],
  },
];

export interface Testimonial {
  company: string;
  person: string;
  theme: 'orange' | 'grey' | 'white' | 'black';
  text: string; // shown as one paragraph; "\n" = line break
  // Quirks of the original's separate tablet/phone versions of two boxes:
  emptyOnTablet?: boolean; // tablet shows the coloured box with no content
  phoneExtraLine?: boolean; // phone adds an empty line above the text
  textPhone?: string; // phone wording, if different
}

// Listed in alphabetical order of company name (as on the original site).
export const testimonials: Testimonial[] = [
  {
    company: '株式会社CO&CO',
    person: '代表取締役 中野創次郎',
    theme: 'orange',
    emptyOnTablet: true,
    phoneExtraLine: true,
    text: '起業家の情熱と信念を信頼してくれ、フラットな立場からサポートしてくださる株主さんです。 また、多忙を極める起業家側の立場に立って形式だけの報告や気遣いは不要。 一方、長年の経験からくる本質的なアドバイスや、国内外の幅広いネットワークからキーマン紹介など、 事業成長の後押しも常に頂くことができます。 取引で決められた数字や期間などの制約より、信頼関係で築かれた自由のなかでの責任を 全うすることで恩返しをする。 まさに理想的な投資家と起業家の関係性を継続できているのも彼らの人間性が故のことだと 頂いたご縁に感謝するばかりです。',
  },
  {
    company: '株式会社ダブルエル',
    person: '代表取締役　保手濱 彰人',
    theme: 'grey',
    text: '本当に懐の広い、事業家にとって理想的なインベスターです。 ただただ純粋に、熱意のある事業家を支援して、成功を祈ってくれる方々で、 様々なご相談にも応じてくれて、この上ない協力を惜しみなく下さいます。 真摯にすれば真摯に応えていただける、グローバルエリートとしての洗練された人間性をお持ちの方々だと感じます。 その姿勢は、これからの事業家たちもまさに身に付けていくべきだと思います。 個人的に「誠意には誠意を」という言葉をポリシーとしておりますが、それらを体現されている投資家として、 今後の日本が見倣っていくべきインベスターだと考えております。 ',
  },
  {
    company: '株式会社トラベル北海道',
    person: '取締役 大畑 ピタ',
    theme: 'white',
    text: 'Since first meeting the Value Build team around 4 years ago, they have been a transformational influence on our business and business development. Value Build is an investor who truly work in partnership with companies to see their vision realised, but what has been most impactful for us is the willingness of the team to practically support, advice and get involved at every step of the journey.\nValue Build walks a line that most would find difficult to balance - they don’t invest and then disappear - only interested in the financial investment itself. But neither do they try to take over and enforce their own agenda. They balance, and in our experience, they balance in an incredibly supportive way that adds their expertise and skills to the vision we have for our company. Instead of being ‘just’ an investor, they are a partner in every sense of the word. They walk with us in the difficult times, and the times of learning and growing pains, and they celebrate with us in the times of success. Our wins feel like their wins too, but they also respect the process, and the often long process, of building a strong and resilient company, and don’t add unnecessary pressure to generate short term growth at the expense of vision and integrity.\nIn whatever capacity you have the chance to work with the Value Build team, I can only recommend that you do so. As investors, yes. But also as advisors, as specialists in their field and as a wider business family routing for your success.',
  },
  {
    company: 'ワンダーストレージホールディングス株式会社',
    person: '代表取締役　兼　グループCEO　佐藤　肇祐',
    theme: 'black',
    emptyOnTablet: true,
    phoneExtraLine: true,
    textPhone:
      '弊社とバリュービルド様とのお付き合いは、中古住宅をリノベ―ションし高齢者住宅に転用していくというビジネススキームでの不動産投資家としてのお付き合いから始まりました。弊社としても、必死で入居を埋め、WIN-WIN の関係は築けたと思っております。そのくらいの関係かなーとか思ったら大間違い！ｗｗｗ日本とは違う目線、ビジネス目線、金融目線、投資家目線・・・様々な目線を持った皆様によってアドバイスをたくさん頂いて今日まで会社を拡大してきました。私としては、「恩人」だと思っています。\nクソ生意気な自分を受け入れてくれる数少ない大人であり、師であり、友であり、ビジネスパートナーでいてくれる方々です。',
    text: '弊社とバリュービルド様とのお付き合いは、中古住宅をリノベ―ションし高齢者住宅に転用していくというビジネススキームでの不動産投資家としてのお付き合いから始まりました。 弊社としても、必死で入居を埋め、WIN-WIN の関係は築けたと思っております。 そのくらいの関係かなーとか思ったら大間違い！ｗｗｗ 日本とは違う目線、ビジネス目線、金融目線、投資家目線・・・様々な目線を持った皆様によってアドバイスをたくさん頂いて今日まで会社を拡大してきました。 私としては、「恩人」だと思っています。 クソ生意気な自分を受け入れてくれる数少ない大人であり、師であり、友であり、ビジネスパートナーでいてくれる方々です。',
  },
];
