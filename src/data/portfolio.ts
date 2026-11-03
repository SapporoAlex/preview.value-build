// Content for the portfolio pages:
//   /portfolio-top/, /technology-lifestyle/, /tourism-2/, /hard-soft/

// --- Portfolio categories -------------------------------------------------
// Used on /portfolio-top/ and in the "Other Categories" block at the bottom
// of each category page. Leave `href` empty if a category has no page yet.

export interface Category {
  key: string;
  title: string; // used in the "Other Categories" cards
  overviewTitle?: string; // heading on /portfolio-top/ if it differs from `title`
  summary: string;
  image: string;
  href?: string;
  accent: 'navy' | 'orange';
}

export const categories: Category[] = [
  {
    key: 'technology',
    title: 'Technologies & Lifestyle',
    overviewTitle: 'Lifestyle & Technology',
    summary:
      'IT関連企業をはじめ、製造業、福祉事業など、バリュービルドでは業種は定めず、世の中の課題を解決する革新的なアイデアに注目しています。',
    image: '/images/photos/vb-004.jpeg',
    href: '/technology-lifestyle/',
    accent: 'navy',
  },
  {
    key: 'tourism',
    title: 'Tourism',
    summary:
      '観光立国日本の実現を見据え、更なる観光事業の発展・拡大を見据え、ツーリズム関連企業や不動産への投資にも力を入れております。',
    image: '/images/photos/vb-002.jpeg',
    href: '/tourism-2/',
    accent: 'orange',
  },
  {
    key: 'startups-real-estate',
    title: 'Startups × Real Estate',
    overviewTitle: 'Property × Venture Business',
    summary:
      '起業家とユニークな不動産を結びつけるプロジェクトが「不動産 x スタートアップ」です。ビジネスアイデアを叶える事業の場（不動産）を、融資ではなく、投資という形で手に入れ、事業を開始することが可能となります。',
    image: '/images/photos/vb-007.jpg',
    href: '/hard-soft/',
    accent: 'navy',
  },
  {
    key: 'real-estate',
    title: 'Real Estate',
    summary:
      'バリュービルドはグループ会社を介し、日本国内に賃貸マンション、高齢者向けマンション、ブティックホテル、歴史的建造物、駐車スペースなど多くの不動産を所有しています。',
    image: '/images/photos/vb-006.jpg',
    // No dedicated page exists yet (the old link was a 404).
    accent: 'orange',
  },
];

// --- Technologies & Lifestyle --------------------------------------------
// `logo` is optional: companies without a logo render as a styled name card.
// To add a logo, drop the file into public/images/tech/ and set `logo`.

export interface Company {
  name: string;
  sector: string;
  logo?: string;
  url?: string;
}

export const techJapan: Company[] = [
  { name: 'Chronogist', sector: 'プラットフォーム', url: 'https://www.chronowis.science/' },
  { name: 'クララオンライン', sector: 'インターネットサービス / コンサルティング', url: 'https://www.clara.co.jp/company/profile-english/' },
  { name: 'CO&CO', sector: '教育／コミュニティ', logo: '/images/tech/co.png', url: 'https://coandco.jp/' },
  { name: 'ダブルエル', sector: 'コンテンツビジネス / 製造業', url: 'https://doublel.co.jp/' },
  { name: 'Far Yeast Brewing', sector: '飲料製造業', url: 'https://faryeast.com/' },
  { name: 'ハイブリッド', sector: 'EC / 菓子製造業', url: 'https://gonutting.com/' },
  { name: 'Job Lab', sector: '人事プラットフォーム / コンサルティング', logo: '/images/tech/joblab.png', url: 'https://job-lab.co.jp/' },
  { name: 'Kudan', sector: 'ディープテクノロジー', url: 'https://www.kudan.io/' },
  { name: 'SeekersBase', sector: 'DX / プラットフォーム', url: 'http://seekersbase.com/' },
  { name: 'Social Impact', sector: 'SDGs インベストメントファーム', url: 'https://sipsgroup.co.jp/' },
  { name: 'アップデータ', sector: 'ソフトウェア / クラウドサービス', url: 'https://www.updata.co.jp/' },
  { name: 'ウガゴエ', sector: 'AI / ディープラーニング', url: 'https://www.utagoe.com/jp/' },
  { name: 'Wonder Storage Holdings', sector: '福祉事業 / IT', url: 'https://wonderstorage-h.jp/' },
  { name: '歯科医院管理システム', sector: 'SaaS / 歯科医院管理システム', logo: '/images/tech/dental.png', url: 'https://dentalight.co.jp/' },
  { name: '建築・工場管理DX', sector: 'DX / 建築及び工場関連管理システム', logo: '/images/tech/construction-dx.png', url: 'https://bpm-gr.co.jp/' },
  { name: 'ZeroOne', sector: 'デジタルツイン ソリューションシステム', logo: '/images/tech/zeroone.png', url: 'https://zeroone-1.com' },
  { name: 'Fussy', sector: 'ファンダムプラットフォーム', url: 'https://fussy-inc.com/' },
  { name: 'Oshicoco', sector: '推し活コンサル／EC', url: 'https://oshicoco.co.jp/' },
  { name: 'Log Note', sector: '電子レシート', logo: '/images/tech/log-note.png', url: 'https://www.log-note.jp/' },
  { name: 'ailead', sector: 'セールスエネーブルメント SaaS', url: 'https://www.ailead.app/' },
];

export const techOverseas: Company[] = [
  { name: 'Dash', sector: 'レンタルハウス プラットフォーム', url: 'https://www.dash.co/en/' },
  { name: 'Lynk', sector: 'フリーランサー マッチングプラットフォーム', url: 'https://lynk.global/' },
  { name: 'Trybe', sector: 'スポーツジム', url: 'https://www.trybehk.com/' },
  { name: 'Wizpresso', sector: 'AI／DX', url: 'https://wizpresso.com/' },
  { name: 'Venturous Group', sector: 'スマートシティ投資会社', logo: '/images/tech/venturous.png', url: 'https://www.venturousgroup.com/' },
];

// --- Tourism ---------------------------------------------------------------

export interface TourismCompany {
  name: string;
  image: string;
  url?: string;
  paragraphs: string[];
}

export const tourismPortfolio: TourismCompany[] = [
  {
    name: '株式会社トラベル北海道',
    url: 'https://yourtravelhokkaido.com/ja/',
    image: '/images/tourism/travel-hokkaido.jpg',
    paragraphs: [
      'グループ会社が貸切バス事業を運営しており、インバウンド観光客のために、ワンストップの旅行サービスを提供しているのが特徴です。',
      'ツアーの販売だけに留まらず、持続可能な開発目標という意味合いがある「SDGs」を基礎とした、地域の特色ある文化体験や教育プログラムも提供しています。',
    ],
  },
  {
    name: '北海道国際クリエイト株式会社',
    url: 'https://www.airbnb.jp/users/show/26100720',
    image: '/images/tourism/hokkaido-international-creation.jpg',
    paragraphs: [
      '優れたおもてなしを提供するホストにのみ与えられる「スーパーホスト」という称号を、大手民泊運営会社より与えられた青年が立ち上げた、札幌にある民泊運営会社です。',
      '民泊だけに留まらず、飲食店の案内や通訳など、観光全般をトータルサポートしています。',
    ],
  },
  {
    name: '株式会社ソーシャルコンパス',
    url: 'https://social-bus.jp/ja/home-3/',
    image: '/images/tourism/social-compass.jpg',
    paragraphs: [
      '北海道内でチャーターバスを運営している会社です。グループ会社の旅行代理店と一緒に、北海道の大自然を体感できるアドベンチャーツアーのバス運行を企画するなど、他社がカバーしていない分野を開拓しています。',
    ],
  },
  {
    name: 'STONE and IRON',
    url: 'http://stoneandiron.jp',
    image: '/images/tourism/stone-and-iron.jpeg',
    paragraphs: [
      '小樽にあるカフェバー兼ゲストハウスです。小樽出身の青年が、東京やオーストラリア、シンガポールで修行し、長年の夢であったカフェバーを開業しました。',
      '地元の人に愛される、人気のあるカフェバーへと成長を遂げました。',
    ],
  },
  {
    name: 'Kyoto Machiya福音',
    url: 'https://kyotomachiyas.com/ja/当館について/',
    image: '/images/tourism/kyoto-machiya-fukune.jpg',
    paragraphs: [
      '100年以上の長屋を購入し、町家建築で名高い京都の建築士に依頼し４棟の宿を開業しました。古材を最大限に生かしながらも、ブティックホテルとしてのスタイリッシュな設備を取り入れ、モダンで美しい町家ホテルです。',
    ],
  },
  {
    name: 'Kyoto Machiya 銭屋町',
    url: 'https://kyotomachiyas.com/ja/zeniyacho-about/',
    image: '/images/tourism/kyoto-machiya-zeniya.jpg',
    paragraphs: [
      'バリュービルド関連の町家ホテル第2号である「Kyoto Machiya 銭屋町」。お風呂をテーマとした一棟貸しの宿で、各棟には内風呂と外風呂を完備しています。',
      '周りの目を気にすることなく京町家ステイを楽しむことができ、多くのメディアに掲載されている人気宿です。',
    ],
  },
  {
    name: '真狩焚き火キャンプ場',
    url: 'http://takibi-camp.jp',
    image: '/images/tourism/takibi.jpg',
    paragraphs: [
      '北海道・羊蹄山の麓にある「手ぶらキャンプ」が楽しめるキャンプ場です。',
      '北海道の立地とマッチする北欧デザインのキャンプ場で、初心者や旅行者でもキャンプを手ぶらで楽しめるという点が人気を博しています。多くのメディアにも取り上げられている、注目のキャンプ場です。',
    ],
  },
  {
    name: 'Kitchen Garden及川農園',
    url: 'http://kitchengardenjp.com',
    image: '/images/tourism/kitchen-garden.jpg',
    paragraphs: [
      '北海道・ニセコ町にほど近い蘭越町にある、ファームステイが楽しめる農園です。',
      '日本国内だけではなく、インバウンドの観光客にも、アグリツーリズムを体験してもらうことができます。また、農園で収穫した野菜の直送販売も行っています。',
    ],
  },
  {
    name: '函灯',
    image: '/images/tourism/hakodate.jpg',
    paragraphs: [
      '戦前の古い建物を改装した、趣ある函館のテナントビルです。函館元町エリアの金森倉庫徒歩2分、函館の人気観光スポットである『八幡坂』や十字街駅からもほど近い、好立地に位置しています。',
      '※現在、このテナントビルを活用してくださる起業家を募集しています※',
    ],
  },
];

// --- Start-Ups & Real Estate -------------------------------------------------

export interface Project {
  title: string;
  images: [string, string]; // [main photo, smaller overlapping photo]
  paragraphs: string[];
}

export const realEstateProjects: Project[] = [
  {
    title: 'マンスリーアパート × 訪問介護事業者',
    images: ['/images/projects/uruoi-hachiken.png', '/images/projects/care-staff.jpg'],
    paragraphs: [
      '低稼働率のマンスリーマンションを取得し、エレベーターなど必要な設備を追加し、訪問介護事業者に事業参画してもらいました。同事業者が高齢入居者のための食事提供も行うことにより、使い道がなかったマンスリーマンションが低所得者向けの高齢者住宅へと生まれ変わりました。',
    ],
  },
  {
    title: '石蔵 × レストラン × ゲストハウス',
    images: ['/images/tourism/stone-and-iron.jpeg', '/images/projects/stone-and-iron-3.jpg'],
    paragraphs: [
      '「100年の歴史があるのに使われていない石蔵」というユニークな不動産を購入し、バリュービルドのネットワークを活用してリノベーションしました。自分のレストランを開業したいという若者と、ジョイントベンチャーを組むことで生まれ変わった石蔵が、100年前の趣を残しつつ、現代にその魅力を発信し続けます。',
    ],
  },
  {
    title: '歴史的建造物 × ブティックホテル',
    images: ['/images/tourism/kyoto-machiya-zeniya.jpg', '/images/tourism/kyoto-machiya-fukune.jpg'],
    paragraphs: [
      '廃墟と化した歴史的建造物を購入。再建ができないというデメリットを逆手に取り、趣を残した内装へとリノベーション。モダンで美しいデザインにすることで、ブティックホテルとして新たな価値を見出しました。',
    ],
  },
  {
    title: '農業×ホテル',
    images: ['/images/projects/farm-2.jpg', '/images/projects/farm-3.jpg'],
    paragraphs: [
      // The original's desktop layout repeats the boutique-hotel text here; this is the farm text from its mobile layout.
      '農家さんの所有する、趣溢れる農作業所をコテージ風に改装。新たにシャワーやトイレを設置し、インテリアデザイナー監修のもと家具を配置することで、「ファームステイ」ができる環境を整備しました。',
      '農家さんは予約管理を行う必要がなく本業に専念できるため、ファームステイビジネスは収入源の1つとして見込め、人手不足が深刻化する農業への活路を見出しました。',
    ],
  },
];
