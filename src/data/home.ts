// Content for the home page (src/pages/index.astro).
//
// The original site shows slightly different copy on desktop, tablet and
// phone (different line breaks, sometimes different wording). Where that
// happens the versions are listed side by side here. "\n" = line break.

export const intro = {
  title: 'VALUE BUILD',
  tagline: '「モノ」づくりから、価値づくりの国、日本へ。',
  // Phone: the tagline breaks after the first phrase.
  taglinePhone: '「モノ」づくりから、\n価値づくりの国、日本へ。',
};

// Message over the photo band.
export const kv = {
  desktop: ['あなたの起業家としての夢を、', 'バリュービルドと一緒に叶えませんか？'],
  mobile: 'あなたの起業家としての夢を、\n\nバリュービルドと一緒に\n\n叶えませんか？',
};

export const about = {
  label: 'About Us',
  lead: 'スタートアップへのエンジェル投資を行います。',
  leadPhone: 'スタートアップへの\nエンジェル投資を行います。',
  desktop: [
    'バリュービルドは、シード・ステージ、アーリー・ステージのスタートアップ企業に投資をしている、日本では稀なエンジェル投資家です。',
    'IT関連、サービス業、福祉関連、不動産など多岐に渡り投資を行っております。自身も起業経験のある投資家が創った、エンジェル投資に特化した投資法人です。',
    'ベンチャーキャピタルからの支援を受けるにはまだ実績が足りない、株主からの多大な干渉を避けたい創業者の方は、エンジェル投資家からの資金集めという選択肢を検討してみるのはいかがでしょうか。',
  ],
  // Tablet: one paragraph with a single line break.
  tablet:
    'バリュービルドは、シード・ステージ、アーリー・ステージのスタートアップ企業に投資をしている、日本では稀なエンジェル投資家です。\nIT関連、サービス業、福祉関連、不動産など多岐に渡り投資を行っております。自身も起業経験のある投資家が創った、エンジェル投資に特化した投資法人です。ベンチャーキャピタルからの支援を受けるにはまだ実績が足りない、株主からの多大な干渉を避けたい創業者の方は、エンジェル投資家からの資金集めという選択肢を検討してみるのはいかがでしょうか。',
  // Phone: as tablet, but "起業家だった" instead of "起業経験のある".
  phone:
    'バリュービルドは、シード・ステージ、アーリー・ステージのスタートアップ企業に投資をしている、日本では稀なエンジェル投資家です。\nIT関連、サービス業、福祉関連、不動産など多岐に渡り投資を行っております。自身も起業家だった投資家が創った、エンジェル投資に特化した投資法人です。ベンチャーキャピタルからの支援を受けるにはまだ実績が足りない、株主からの多大な干渉を避けたい創業者の方は、エンジェル投資家からの資金集めという選択肢を検討してみるのはいかがでしょうか。',
};

export const ipo = {
  label: '投資先IPO実績',
  href: '/portfolio-top/',
};

export interface IpoCompany {
  name: string;
  market: string;
  description: string;
  history: string;
  historyTablet: string; // tablet copy on the original still has a "シリーズXXX" placeholder
  logo?: string; // the original's logo files are missing (404), so none is shown
  href: string;
}

export const ipoTrackRecord: IpoCompany[] = [
  {
    name: '株式会社KUDAN',
    market: '東証マザーズ（4425）',
    description: '人工知覚技術の研究開発及びソフトウェアライセンスの提供　等',
    history: '2015年当社株主が個人名義で投資、2018年東京証券取引所マザーズ上場',
    historyTablet: '2015年当社株主が個人名義でシリーズXXXに投資、2018年東京証券取引所マザーズ上場',
    href: '/about-us/',
  },
  {
    name: '株式会社ザッパラス',
    market: '東京1部（3770）',
    description: 'オンライン占いサービスの企画制作・開発・運営及び電話占い並びにメディアサイトの運営　等',
    history: '2001年当社株主が個人名義で投資、2005年東京証券取引所第一部上場',
    historyTablet: '2001年当社株主が個人名義でシリーズXXXに投資、2005年東京証券取引所第一部上場',
    href: '/about-us/',
  },
];

// White-outlined tiles on the navy band, linking into the About page.
export interface AboutTile {
  title: string; // desktop + tablet
  titlePhone: string;
  href: string;
  hrefPhone: string; // the phone layout of the About page has its own anchors
  newTab?: boolean;
}

export const aboutTiles: AboutTile[] = [
  {
    title: 'エンジェル投資家\nとは？',
    titlePhone: 'エンジェル投資家\nとは？',
    href: '/about-us/#aboutus001',
    hrefPhone: '/about-us/#aboutusmb001',
  },
  {
    title: '起業家のコアバリューに投資します。',
    titlePhone: 'コアバリューに\n投資します。',
    href: '/about-us/#aboutus002',
    hrefPhone: '/about-us/#aboutusmb002',
  },
  {
    title: '投資後も継続的に\nサポートします。',
    titlePhone: '投資後も継続的に\nサポートします。',
    href: '/about-us/#aboutus003',
    hrefPhone: '/about-us/#aboutusmb003',
  },
  {
    title: '会社概要＆\nチーム',
    titlePhone: '会社概要＆チーム',
    href: '/about-us/#company-info',
    hrefPhone: '/about-us/#company-infomb',
    newTab: true, // as on the original
  },
];

export const portfolioCapsule = {
  title: 'INVESTMENT PORTFOLIO',
  subtitle: '投資の実績',
  href: '/portfolio-top/',
};

export interface Partner {
  name: string;
  logo: string;
  url?: string;
}

const partner = {
  northEast: { name: 'ノースイースト・キャピタルマネジメント株式会社', logo: '/images/partners/north-east-capital.jpg', url: 'http://northeast-cm.com' },
  kiraku: { name: '株式会社Kiraku', logo: '/images/partners/kiraku.jpg', url: 'https://kiraku.io/' },
  venturous: { name: 'Venturous Group', logo: '/images/partners/venturous-group.jpg', url: 'https://www.venturousgroup.com/' },
  odyssey: { name: 'Odyssey Group', logo: '/images/partners/odyssey.png' },
  yes: { name: '株式会社YES HOKKAIDO', logo: '/images/partners/yes-hokkaido.jpeg', url: 'http://www.yeshokkaidorealestate.com/index.html?language=ja' },
  wayfarer: { name: 'Wayfarer', logo: '/images/partners/wayfarer.jpg' },
  pegasus: { name: 'Pegasus Capital', logo: '/images/partners/pegasus.jpg' },
} satisfies Record<string, Partner>;

// Desktop + tablet: 4 per row.
export const partners: Partner[] = [
  partner.northEast,
  partner.kiraku,
  partner.venturous,
  partner.odyssey,
  partner.yes,
  partner.wayfarer,
  partner.pegasus,
];

// Phone: a different order, and the cards are not links (as on the original).
export const partnersPhone: Partner[] = [
  partner.northEast,
  partner.kiraku,
  partner.venturous,
  partner.odyssey,
  partner.pegasus,
  partner.wayfarer,
  partner.yes,
].map(({ name, logo }) => ({ name, logo }));
