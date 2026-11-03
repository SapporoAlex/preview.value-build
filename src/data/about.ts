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
    title: 'エンジェル投資家とは？',
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
      '当社は、決算報告書では反映されないコアバリューである、起業家の熱意・投資分野での経験値・ネットワークを重視し投資判断を行います。',
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
      'バリュービルドのサポートチームは、企業経営・会計・マーケティング・不動産に関する知識を持ち合わせております。当社は起業家の熱意・柔軟性を重要視していますが、その一方で、起業家には経営に関する知識も必要である点、今までの投資経験から実感しています。バリュービルドなら、経営経験がない起業家に対して様々な方面からのサポートを実施します。',
      'また、バリュービルドのネットワークである海外のファンドのコネクションを活用することで、海外進出を目指す企業へのサポートも可能です。',
    ],
  },
];

export const companyProfile = [
  '会社設立：2016年6月8日',
  '前身の株式会社天祐アッセットマネジメント【設立2007年／Saizen REITアセットマネージャー】の一部事業を承継',
  '本店：北海道札幌市中央区南4条東3丁目9-1',
  'TEL：011-261-7476',
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
    role: 'エンジェル投資家',
    location: '香港在住',
    photo: '/images/team/richard-lo.jpg',
    bio: [
      '1979年 CL Computers Groupを設立し、日立製作所、オムロンなど、数十年にわたり日本企業との取引実績を持つ。',
      '1999年より日本でのベンチャー及び不動産投資を独自に開始。',
      'アジアを主とした投資ファインド・個人投資家との強いパイプを持ち、投資先企業の永続的な成長に貢献する。',
    ],
  },
  {
    name: 'SANDY LO',
    role: 'エンジェル投資家',
    location: '香港在住',
    photo: '/images/team/sandy-lo.jpg',
    bio: [
      'オーストラリアと香港にて、商業用物件から賃貸用物件と幅広くファンドマネジメントに携わる。多くのグローバル企業の案件を担当し不動産業界において13年間の実績を持つ。',
      'リチャード ローと共に、日本の不動産及びベンチャー企業の投資先の発掘、分析、コンサルティング、マッチング、及び海外進出の橋渡しを行う。',
    ],
  },
  {
    name: '松永 豊',
    role: '代表取締役',
    location: '東京在住',
    photo: '/images/team/yutaka-matsunaga.jpg',
    bio: [
      '1999年～2001年、日本アジア投資株式会社の100％子会社、JAIC International Hong Kong Co., Ltd.のCEO兼取締役社長を歴任。',
      '2007年より株式会社天祐アセットマネジメントを設立、10年余りに及ぶ不動産投資顧問業の経験を通して、日本の不動産市場に幅広いネットワークを持つ。',
      '財務・会社法に精通し、外国人投資家と日本のベンチャー企業との橋渡しを担う。',
    ],
  },
  {
    name: 'マッキンリー 亜矢',
    role: '取締役/プロジェクトマネジャー',
    location: '札幌在住',
    photo: '/images/team/aya-mckinley.jpg',
    bio: [
      '2007年～2016年 株式会社天祐アセットマネジメントにて、不動産のアセットマネジメントに携わる。',
      'バリュービルドの現地コントローラーとし、ベンチャー企業・投資案件の発掘、及びプロジェクト管理業務を担当。',
    ],
  },
];
