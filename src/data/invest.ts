// Content for the How We Invest page (src/pages/how-we-invest.astro).

export interface InvestStep {
  icon: string;
  title: string;
  paragraphs: string[];
}

export const beforeInvestment: InvestStep[] = [
  {
    icon: '/images/how/icon-1.png',
    title: 'Introduction',
    paragraphs: [
      'You may be referred to us directly from our extensive network of business partners. But if you are not connected to any of our business partners please feel free to contact us via the email contact form on this website. We are always keen to hear from talented entrepreneurs from Japan.',
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
      'For those with no prior business experiences, we understand it can be a huge challenge to start and set up a new business. As experienced business professionals we have helped numerous businesses set up in the past and we can provide various support such as introduction to accountants, lawyers, real estate agents and other beneficial parties to assist your new start-up.',
    ],
  },
  {
    icon: '/images/how/icon-5.png',
    title: 'Regular Update Meeting',
    paragraphs: [
      'We hold regular meeting with our portfolio companies to understand the business progress and the challenges the company may be facing. However, it is up to you as an entrepreneur to make the best business decision for your company.',
      '但し、今後どのような道を進んでいくのかを最終的に決定するのはあなた自身です。バリュービルドはベンチャーキャピタルとは異なり、投資先企業を全力でサポートしますが強制はしません。',
    ],
  },
  {
    icon: '/images/how/icon-6.png',
    title: 'Business Network Support',
    paragraphs: [
      'With decades of investment experience, we can provide you access to our unique and extensive network of business partners both within Japan and outside of Japan. You will be able to connect to founders from other companies for their expertise.',
      'また、シナジーを発揮するであろう国内外の企業を紹介しネットワークの構築もサポートします。',
    ],
  },
  {
    icon: '/images/how/icon-4.png',
    title: 'Expansion & Exit Strategy',
    paragraphs: [
      'When your business enters into maturity you may wish to consider to various options. It may be capital raise for expansion, aim for listing on the stock market or sell the business.',
      'バリュービルドは今までの経験をもとに最適な選択肢をアドバイスさせていただきます。',
    ],
  },
];

export interface Testimonial {
  company: string;
  person: string;
  theme: 'orange' | 'grey' | 'white' | 'black';
  paragraphs: string[];
}

// Listed in alphabetical order of company name (as on the original site).
export const testimonials: Testimonial[] = [
  {
    company: '株式会社CO&CO',
    person: '代表取締役 中野創次郎',
    theme: 'orange',
    paragraphs: [
      '起業家の情熱と信念を信頼してくれ、フラットな立場からサポートしてくださる株主さんです。また、多忙を極める起業家側の立場に立って形式だけの報告や気遣いは不要。一方、長年の経験からくる本質的なアドバイスや、国内外の幅広いネットワークからキーマン紹介など、事業成長の後押しも常に頂くことができます。',
      '取引で決められた数字や期間などの制約より、信頼関係で築かれた自由のなかでの責任を全うすることで恩返しをする。まさに理想的な投資家と起業家の関係性を継続できているのも彼らの人間性が故のことだと頂いたご縁に感謝するばかりです。',
    ],
  },
  {
    company: '株式会社ダブルエル',
    person: '代表取締役 保手濱 彰人',
    theme: 'grey',
    paragraphs: [
      '本当に懐の広い、事業家にとって理想的なインベスターです。ただただ純粋に、熱意のある事業家を支援して、成功を祈ってくれる方々で、様々なご相談にも応じてくれて、この上ない協力を惜しみなく下さいます。',
      '真摯にすれば真摯に応えていただける、グローバルエリートとしての洗練された人間性をお持ちの方々だと感じます。その姿勢は、これからの事業家たちもまさに身に付けていくべきだと思います。',
      '個人的に「誠意には誠意を」という言葉をポリシーとしておりますが、それらを体現されている投資家として、今後の日本が見倣っていくべきインベスターだと考えております。',
    ],
  },
  {
    company: 'Travel Hokkaido',
    person: '取締役 大畑 ピタ',
    theme: 'white',
    paragraphs: [
      'Since first meeting the Value Build team around 4 years ago, they have been a transformational influence on our business and business development. Value Build is an investor who truly work in partnership with companies to see their vision realised, but what has been most impactful for us is the willingness of the team to practically support, advice and get involved at every step of the journey.',
      'Value Build walks a line that most would find difficult to balance - they don’t invest and then disappear - only interested in the financial investment itself. But neither do they try to take over and enforce their own agenda. They balance, and in our experience, they balance in an incredibly supportive way that adds their expertise and skills to the vision we have for our company. Instead of being ‘just’ an investor, they are a partner in every sense of the word. They walk with us in the difficult times, and the times of learning and growing pains, and they celebrate with us in the times of success. Our wins feel like their wins too, but they also respect the process, and the often long process, of building a strong and resilient company, and don’t add unnecessary pressure to generate short term growth at the expense of vision and integrity.',
      'In whatever capacity you have the chance to work with the Value Build team, I can only recommend that you do so. As investors, yes. But also as advisors, as specialists in their field and as a wider business family routing for your success.',
    ],
  },
  {
    company: 'ワンダーストレージホールディングス株式会社',
    person: '代表取締役 兼 グループCEO 佐藤 肇祐',
    theme: 'black',
    paragraphs: [
      '弊社とバリュービルド様とのお付き合いは、中古住宅をリノベ―ションし高齢者住宅に転用していくというビジネススキームでの不動産投資家としてのお付き合いから始まりました。',
      '弊社としても、必死で入居を埋め、WIN-WIN の関係は築けたと思っております。そのくらいの関係かなーとか思ったら大間違い！ｗｗｗ',
      '日本とは違う目線、ビジネス目線、金融目線、投資家目線・・・様々な目線を持った皆様によってアドバイスをたくさん頂いて今日まで会社を拡大してきました。',
      '私としては、「恩人」だと思っています。クソ生意気な自分を受け入れてくれる数少ない大人であり、師であり、友であり、ビジネスパートナーでいてくれる方々です。',
    ],
  },
];
