// Content for the About page (src/pages/about-us.astro).

export interface AboutFeature {
  id: string; // anchor used by links on the home page
  number: string;
  headline: string; // large heading (use \n for line breaks)
  title: string; // boxed sub-heading
  image: string;
  paragraphs: string[];
}

export const aboutFeatures: AboutFeature[] = [
  {
    id: 'aboutus001',
    number: '001',
    headline: 'We always respect\nthe entrepreneurs\nwe partnered with.',
    title: 'We always respect the entrepreneurs we partnered with.',
    image: '/images/photos/startup.jpg',
    paragraphs: [
      '創業前、もしくは、創業間もないスタートアップ企業に投資する個人投資家のことで、その多くが元実業家や大手企業の経営者です。',
      '同じくベンチャーに投資を行うベンチャーキャピタルの存在がありますが、一般的にベンチャーキャピタルはファンドを形成し多数の投資家の資産をベンチャーに投資し、必要に合わせ事業に介入し、一定期間でのイグジットを目指しますが、エンジェル投資家はじっくり企業の成長を待つケースが多いです。',
      'バリュービルドは 、法人ではありますが、エンジェル投資家の部類となり、早期回収や事業への介入は行いません。その一方、今までの投資実績から投資先が必要とするサポートを継続的に行っております。',
    ],
  },
  {
    id: 'aboutus002',
    number: '002',
    headline: 'We help entrepreneurs\nfind solutions\nto their businesses.',
    title: '投資家のコアバリューに投資します。',
    image: '/images/photos/vb-005.jpeg',
    paragraphs: [
      'Very often our entrepreneurs approach us when they needed solutions for the business challenges they face. We endeavour to help them through by generously sharing our expertise and industry insights so that they can better navigate in the business world.',
      'ベンチャーキャピタルの場合、実際の資金提供者が第三者の投資家となる為、どうしても、決算報告書や実績等のエビデンスを要します。一方、当社は、当社自体が資金提供者の為、起業家の思い、ビジネスのコアバリューを数字以外の方法で伝えて頂くことが可能です。',
      '銀行融資、ベンチャーキャピタルからの投資を断られた起業家たちのアイデアを思いを聞かせてください。',
    ],
  },
  {
    id: 'aboutus003',
    number: '003',
    headline: 'We provide\nentrepreneurs access\nto our unique network.',
    title: '投資後もサポートし続けます。',
    image: '/images/photos/vb-network.jpeg',
    paragraphs: [
      'With over 30 years of experiences across Asia, entrepreneurs will not only enjoy access to our extensive network in Japan but will also gain exposure to our global connections.',
      'また、バリュービルドのネットワークである海外のファンドのコネクションを活用することで、海外進出を目指す企業へのサポートも可能です。',
    ],
  },
];

export const companyProfile = [
  'Establishment in June 8, 2016',
  'Took over part of the Tenyu Asset Management which was established in 2007 and Saizen REIT Asset Manager until 2016.',
  'Head Office: 9-1, West 4 South 3, Sapporo, Hokkaido, Japan',
  'TEL: 011-261-7476',
];

export interface TeamMember {
  name: string;
  role: string;
  location: string;
  photo: string;
  bio: string[];
}

export const team: TeamMember[] = [
  {
    name: 'RICHARD LO',
    role: 'Angel Investor',
    location: 'Based in Hong Kong',
    photo: '/images/team/richard-lo.jpg',
    bio: [
      'One of Value Build’s main angel investors. With extensive experience in many areas of venture investment and the real estate business, Richard recognizes the real value in people and business ideas.',
      '1999年より日本でのベンチャー及び不動産投資を独自に開始。',
      'アジアを主とした投資ファインド・個人投資家との強いパイプを持ち、投資先企業の永続的な成長に貢献する。',
    ],
  },
  {
    name: 'SANDY LO',
    role: 'Angel Investor',
    location: 'Based in Hong Kong',
    photo: '/images/team/sandy-lo.jpg',
    bio: [
      'One of Value Build’s main angel investors. With extensive experience in real estate working for various major international real estate firms and financial institutions, Sandy brings new business opportunities and ideas to allow Japanese start-ups and real-estate projects to achieve their targets.',
      'リチャード ローと共に、日本の不動産及びベンチャー企業の投資先の発掘、分析、コンサルティング、マッチング、及び海外進出の橋渡しを行う。',
    ],
  },
  {
    name: 'Yutaka Matsunaga',
    role: 'CEO',
    location: 'Based in Tokyo',
    photo: '/images/team/yutaka-matsunaga.jpg',
    bio: [
      'Established Tensuke Asset Management Co., Ltd. in 2007, and has a wide network in the Japanese real estate market through more than 10 years of experience in real estate investment advisory business.',
      'Familiar with finance and corporate law, he acts as a bridge between foreign investors and Japanese venture companies.',
    ],
  },
  {
    name: 'マッキンリー 亜矢',
    role: '取締役/プロジェクトマネジャー',
    location: 'Based in Sapporo',
    photo: '/images/team/aya-mckinley.jpg',
    bio: [
      'With experience in real estate asset management business and long-established local connections, Aya manages onsite projects and discovers new start-ups and business opportunities for investment.',
      'バリュービルドの現地コントローラーとし、ベンチャー企業・投資案件の発掘、及びプロジェクト管理業務を担当。',
    ],
  },
];
