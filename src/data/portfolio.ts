// Content for the portfolio pages:
//   /portfolio-top/, /technology-lifestyle/, /tourism-2/, /hard-soft/

// --- Portfolio categories -------------------------------------------------
// Used on /portfolio-top/ and in the "Other Categories" block at the bottom
// of each category page.

export interface Category {
  key: string;
  title: string; // used in the "Other Categories" cards
  overviewTitle?: string; // heading on /portfolio-top/ if it differs from `title`
  summary: string;
  image: string;
  href: string;
  accent: 'navy' | 'orange'; // card rules + button colour on /portfolio-top/
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
    // As on the original, this links to a page that does not exist yet (404).
    href: '/real-estate/',
    accent: 'orange',
  },
];

// --- Technologies & Lifestyle --------------------------------------------
// The original shows two different layouts:
//   desktop        → techDesktop / techOverseasDesktop (5 cards per row)
//   tablet + phone → techMobile / techOverseasMobile (2 columns)
// with slightly different companies and labels in each, so both are listed.
//
// Most logos on the original are missing (404). Those companies have no
// `logo`, which leaves the empty white card the original shows. To add a
// logo later, put the file in public/images/tech/ and set `logo`.
//
// Style values (paddings, fixed heights, label gaps) reproduce the original's
// individual card settings.

export type PillColor = 'navy' | 'orange' | 'teal';

export interface TechLogo {
  src: string;
  natural: number; // the file's width in px (the logo never scales above 71% of it)
  width?: number; // % of the card width, default 71
}

export interface TechCard {
  name: string;
  url: string;
  logo?: TechLogo;
  label: string; // "\n" = line break
  color: PillColor;
  pad?: [number, number]; // card padding top/bottom, default [25, 20]
  padX?: number; // card padding left/right, default 20
  height?: number; // fixed card height (px)
  gap?: number; // space between card and label, default 18
  compact?: boolean; // two-line label style (also used for some one-line labels)
  noGutter?: boolean; // the original drops this card's right gutter
}

const logos = {
  co: { src: '/images/tech/co.png', natural: 286 },
  joblab: { src: '/images/tech/joblab.png', natural: 286 },
  dental: { src: '/images/tech/dental.png', natural: 999 },
  construction: { src: '/images/tech/construction-dx.png', natural: 158 },
  zeroone: { src: '/images/tech/zeroone.png', natural: 456 },
  logNote: { src: '/images/tech/log-note.png', natural: 422 },
  venturous: { src: '/images/tech/venturous.png', natural: 640 },
} satisfies Record<string, TechLogo>;

// Desktop, "In Japan": one array per row of five.
export const techDesktop: TechCard[][] = [
  [
    { name: 'Chronogist', url: 'https://www.chronowis.science/', label: 'プラットフォーム', color: 'navy' },
    // (Clara Online is in this row on the original but hidden on desktop.)
    { name: 'CO&CO', url: 'https://coandco.jp/', logo: logos.co, label: '教育／コミュニティ', color: 'teal', gap: 19 },
    { name: 'ダブルエル', url: 'https://doublel.co.jp/', label: 'コンテンツビジネス / 製造業', color: 'navy', gap: 19 },
    { name: 'Far Yeast Brewing', url: 'https://faryeast.com/', label: '飲料製造業', color: 'orange', noGutter: true },
    { name: 'ハイブリッド', url: 'https://gonutting.com/', label: 'EC / 菓子製造業', color: 'teal' },
  ],
  [
    { name: 'Job Lab', url: 'https://job-lab.co.jp/', logo: logos.joblab, label: '人事プラットフォーム\nコンサルティング', color: 'navy' },
    { name: 'Kudan', url: 'https://www.kudan.io/', label: 'ディープテクノロジー', color: 'orange', gap: 19 },
    { name: 'SeekersBase', url: 'http://seekersbase.com/', label: 'DX / プラットフォーム', color: 'teal' },
    { name: 'Social Impact', url: 'https://sipsgroup.co.jp/', label: 'SDG s\nインベストメントファーム', color: 'orange', gap: 19 },
    { name: 'アップデータ', url: 'https://www.updata.co.jp/', label: 'ソフトウェア\nクラウドサービス', color: 'teal', gap: 19 },
  ],
  [
    { name: 'ウタゴエ', url: 'https://www.utagoe.com/jp/', label: 'AI / ディープラーニング', color: 'navy', height: 156 },
    { name: 'Wonder Storage Holdings', url: 'https://wonderstorage-h.jp/', label: '福祉事業 / IT', color: 'orange', gap: 19 },
    { name: 'デンタライト', url: 'https://dentalight.co.jp/', logo: logos.dental, label: 'SaaS/歯科医院管理システム', color: 'teal', pad: [69, 40] },
    { name: 'BPM', url: 'https://bpm-gr.co.jp/', logo: logos.construction, label: 'DX/建築及び\n工場関連管理システム', color: 'navy', pad: [55, 40] },
    { name: 'ZeroOne', url: 'https://zeroone-1.com', logo: logos.zeroone, label: 'デジタルツイン\nソリューションシステム', color: 'orange', pad: [55, 40], gap: 19 },
  ],
  [
    { name: 'Fussy', url: 'https://fussy-inc.com/', label: 'ファンダムプラットフォーム', color: 'navy', height: 157 },
    { name: 'Oshicoco', url: 'https://oshicoco.co.jp/', label: '推し活コンサル／EC', color: 'orange', height: 156, gap: 19 },
    { name: 'Log Note', url: 'https://www.log-note.jp/', logo: { ...logos.logNote, width: 88 }, label: '電子レシート', color: 'teal', pad: [69, 40], height: 156 },
    { name: 'ailead', url: 'https://www.ailead.app/', label: 'セールスエネーブルメント\nSaaS', color: 'navy', pad: [55, 40], height: 157 },
  ],
];

export const techOverseasDesktop: TechCard[] = [
  { name: 'Dash', url: 'https://www.dash.co/en/', label: 'レンタルハウス\nプラットフォーム', color: 'teal', height: 156, gap: 15 },
  { name: 'Lynk', url: 'https://lynk.global/', label: 'フリーランサー\nマッチングプラットフォーム', color: 'navy', height: 156, gap: 15 },
  { name: 'Trybe', url: 'https://www.trybehk.com/', label: 'スポーツジム', color: 'orange', height: 156, gap: 15, compact: true },
  { name: 'Wizpresso', url: 'https://wizpresso.com/', label: 'AI／DX', color: 'teal', height: 156, gap: 15, compact: true },
  {
    name: 'Venturous Group',
    url: 'https://www.venturousgroup.com/',
    logo: logos.venturous,
    label: 'スマートシティ投資会社',
    color: 'navy',
    pad: [20, 0],
    padX: 10,
    height: 140,
    gap: 16,
    compact: true,
  },
];

// Tablet + phone. Card types set the padding/height (see TechMobileItem.astro).
export interface TechMobileItem {
  name: string;
  url: string;
  logo?: TechLogo;
  card: 'a' | 'b' | 'c' | 'd' | 'e';
  cardGap?: number; // space below the card, default 30
  wideShadow?: boolean;
  label: string;
  color: PillColor;
  labelPad: string; // CSS padding of the label pill
  labelPadPhone?: string;
  labelStyle?: 'stack' | 'side' | 'side-low';
  labelHeight?: number; // fixed height of the label block
  flushOnPhone?: boolean; // phone: label not pulled up under the card
  hideOnTablet?: boolean;
}

export const techMobile: { left: TechMobileItem[]; right: TechMobileItem[] } = {
  left: [
    { name: 'Chronogist', url: 'https://www.chronowis.science/', card: 'a', cardGap: 10, label: '学術向け\nプラットフォーム', color: 'teal', labelPad: '10px 5px', labelPadPhone: '10px', labelHeight: 87, flushOnPhone: true },
    { name: 'CO&CO', url: 'https://coandco.jp/', logo: logos.co, card: 'a', label: '教育\nコミュニティ', color: 'orange', labelPad: '10px 15px' },
    { name: 'Far Yeast Brewing', url: 'https://faryeast.com/', card: 'a', cardGap: 10, label: '飲料製造業', color: 'teal', labelPad: '10px 0', flushOnPhone: true },
    { name: 'Job Lab', url: 'https://job-lab.co.jp/', logo: logos.joblab, card: 'a', label: '人事プラットフォーム\nコンサルティング', color: 'orange', labelPad: '10px 5px' },
    { name: 'SeekersBase', url: 'http://seekersbase.com/', card: 'a', label: 'DX\nプラットフォーム', color: 'teal', labelPad: '10px 15px' },
    { name: 'Social Impact', url: 'https://sipsgroup.co.jp/', card: 'a', label: 'SDG sインベスト\nメントファーム', color: 'orange', labelPad: '10px 5px' },
    { name: 'ウタゴエ', url: 'https://www.utagoe.com/jp/', card: 'a', label: 'AI\nディープラーニング', color: 'teal', labelPad: '10px 5px' },
    { name: 'Fussy', url: 'https://fussy-inc.com/', card: 'b', label: 'ファンダムプラットフォーム', color: 'orange', labelPad: '10px 5px' },
    { name: 'Log Note', url: 'https://www.log-note.jp/', logo: logos.logNote, card: 'b', label: '電子レシート', color: 'orange', labelPad: '10px 5px' },
  ],
  right: [
    { name: 'クララオンライン', url: 'https://www.clara.co.jp', card: 'a', label: 'ネットサービス\nコンサルティング', color: 'orange', labelPad: '10px 5px' },
    { name: 'ダブルエル', url: 'https://doublel.co.jp', card: 'a', wideShadow: true, label: 'コンテンツビジネス\n製造業', color: 'teal', labelPad: '10px 15px' },
    { name: 'ハイブリッド', url: 'https://gonutting.com/', card: 'a', label: 'EC / 菓子製造業', color: 'orange', labelPad: '10px 0' },
    { name: 'Kudan', url: 'https://www.kudan.io/jp/', card: 'a', label: 'ディープ\nテクノロジー', color: 'teal', labelPad: '10px 15px' },
    { name: 'アップデータ', url: 'https://www.updata.co.jp/', card: 'a', label: 'ソフトウェア\nクラウドサービス', color: 'orange', labelPad: '10px 15px' },
    { name: 'Wonder Storage Holdings', url: 'https://wonderstorage-h.jp/', card: 'a', label: '福祉事業\nIT', color: 'teal', labelPad: '10px 30px' },
    { name: 'BPM', url: 'https://bpm-gr.co.jp/', logo: logos.construction, card: 'c', label: 'DX/建築及び\n工場関連管理システム', color: 'orange', labelPad: '10px 5px' },
    { name: 'Oshicoco', url: 'https://oshicoco.co.jp/', card: 'd', label: '推し活 コンサルティング／EC', color: 'teal', labelPad: '10px' },
    { name: 'ailead', url: 'https://www.ailead.app/', card: 'd', label: 'セールスエネーブルメント\nSaaS', color: 'teal', labelPad: '10px', hideOnTablet: true },
  ],
};

// Tablet + phone overseas: rows of two. (Venturous Group is desktop only on
// the original, and Wizpresso is labelled "スポーツジム" here.)
export const techOverseasMobile: [TechMobileItem, TechMobileItem][] = [
  [
    { name: 'Lynk', url: 'https://lynk.global/', card: 'b', label: 'フリーランス マッチングプラットフォーム', color: 'orange', labelPad: '10px', labelStyle: 'side' },
    { name: 'Wizpresso', url: 'https://wizpresso.com/', card: 'd', label: 'スポーツジム', color: 'teal', labelPad: '10px 30px', labelStyle: 'side-low' },
  ],
  [
    { name: 'Trybe', url: 'https://www.trybehk.com/', card: 'e', cardGap: 10, label: 'スポーツジム', color: 'teal', labelPad: '10px 30px', labelStyle: 'side-low' },
    { name: 'Dash', url: 'https://www.dash.co/en/', card: 'e', cardGap: 10, label: 'レンタルハウス\nプラットフォーム', color: 'orange', labelPad: '10px', labelStyle: 'side' },
  ],
];

// --- Tourism ---------------------------------------------------------------

export interface TourismCompany {
  name: string;
  image: string;
  url?: string;
  paragraphs: string[];
  blankLine?: boolean; // the original ends this text with an empty line
}

// Three per row on desktop.
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
    imageSize: [1200, 800],
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
    blankLine: true,
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
    blankLine: true,
  },
];

export const tourismConnect = {
  title: '投資先同士の連携&ネットワークの拡充',
  titleMobile: '投資先同士の連携&\nネットワークの拡充',
  image: '/images/photos/connect.jpg',
  paragraphs: [
    '観光分野において、バリュービルドが投資先を決める上で重視しているのが『シナジー』です。',
    'ビジネスの成功の鍵は、いかに自社の強みを強化し、相乗効果が見込める他社と連携をすることが成功の鍵であると当社は考えます。',
    '参入障壁の低い観光分野においては、ユニークなサービスを展開し続けることが企業の生存率を高めます。バリュービルドでは投資先の創業者たちが円滑なコミュニケーションをとり合い、各々のネットワークを紹介できる関係性の構築づくりをサポートします。そのことにより、多くのコラボレーションが生れています。',
  ],
  blankLines: 3, // desktop; the tablet/phone version ends with 1
};

// --- Start-Ups & Real Estate -------------------------------------------------
// Each project is a photo collage. `null` marks a photo whose file is missing
// on the original (404): it leaves the same small gap the original shows.
// Set it to an image path once a photo is available.

export interface Project {
  title: string;
  titleMobile?: string; // tablet/phone title, if different
  image: string; // main photo (large, rounded)
  imageSize: [number, number]; // its pixel size (width, height)
  // Desktop: two smaller photos to the left of the main one.
  sideImages: [string | null, string | null];
  // Tablet/phone: second and third photos under the main one.
  mobileImages: [string | null, string | null];
  paragraphs: string[]; // desktop
  paragraphsMobile: string[]; // tablet/phone
  blankLine?: boolean; // desktop text ends with an empty line (tablet/phone always do)
}

export const realEstateProjects: Project[] = [
  {
    title: 'マンスリーアパート × 訪問介護事業者',
    image: '/images/projects/care.jpg',
    imageSize: [960, 540],
    sideImages: ['/images/projects/uruoi-hachiken.png', null],
    mobileImages: ['/images/projects/uruoi-hachiken.png', null],
    paragraphs: [
      '低稼働率のマンスリーマンションを取得し、エレベーターなど必要な設備を追加し、訪問介護事業者に事業参画してもらいました。同事業者が高齢入居者のための食事提供も行うことにより、使い道がなかったマンスリーマンションが低所得者向けの高齢者住宅へと生まれ変わりました。',
    ],
    paragraphsMobile: [
      '低稼働率のマンスリーマンションを取得し、エレベーターなど必要な設備を追加し、訪問介護事業者に事業参画してもらいました。同事業者が高齢入居者のための食事提供も行うことにより、使い道がなかったマンスリーマンションが低所得者向けの高齢者住宅へと生まれ変わりました。',
    ],
    blankLine: true,
  },
  {
    title: '石蔵 × レストラン × ゲストハウス',
    image: '/images/projects/stone-and-iron-night.jpg',
    imageSize: [962, 642],
    sideImages: [null, null],
    mobileImages: [null, null],
    paragraphs: [
      '「100年の歴史があるのに使われていない石蔵」というユニークな不動産を購入し、バリュービルドのネットワークを活用してリノベーションしました。自分のレストランを開業したいという若者と、ジョイントベンチャーを組むことで生まれ変わった石蔵が、100年前の趣を残しつつ、現代にその魅力を発信し続けます。',
    ],
    paragraphsMobile: [
      '「100年の歴史があるのに使われていない石蔵」というユニークな不動産を購入し、バリュービルドのネットワークを活用してリノベーションしました。自分のレストランを開業したいという若者と、ジョイントベンチャーを組むことで生まれ変わった石蔵が、100年前の趣を残しつつ、現代にその魅力を発信し続けます。',
    ],
  },
  {
    title: '歴史的建造物 × ブティックホテル',
    image: '/images/tourism/kyoto-machiya-fukune.jpg',
    imageSize: [1200, 801],
    sideImages: [null, null],
    mobileImages: [null, null],
    paragraphs: [
      '廃墟と化した歴史的建造物を購入。再建ができないというデメリットを逆手に取り、趣を残した内装へとリノベーション。モダンで美しいデザインにすることで、ブティックホテルとして新たな価値を見出しました。',
    ],
    paragraphsMobile: [
      '廃墟と化した歴史的建造物を購入。再建ができないというデメリットを逆手に取り、趣を残した内装へとリノベーション。モダンで美しいデザインにすることで、ブティックホテルとして新たな価値を見出しました。',
    ],
  },
  {
    title: '農業×ホテル',
    titleMobile: '農業 × ホテル',
    image: '/images/projects/farm.jpg',
    imageSize: [1200, 800],
    sideImages: [null, null],
    mobileImages: [null, '/images/projects/farm-cottage.jpg'],
    // Desktop repeats the boutique-hotel text, as on the original.
    paragraphs: [
      '廃墟と化した歴史的建造物を購入。再建ができないというデメリットを逆手に取り、趣を残した内装へとリノベーション。モダンで美しいデザインにすることで、ブティックホテルとして新たな価値を見出しました。',
    ],
    paragraphsMobile: [
      '農家さんの所有する、趣溢れる農作業所をコテージ風に改装。新たにシャワーやトイレを設置し、インテリアデザイナー監修のもと家具を配置することで、「ファームステイ」ができる環境を整備しました。',
      '農家さんは予約管理を行う必要がなく本業に専念できるため、ファームステイビジネスは収入源の1つとして見込め、人手不足が深刻化する農業への活路を見出しました。',
    ],
  },
];
