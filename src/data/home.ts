// Content for the home page (src/pages/index.astro).

export const ipoTrackRecord = [
  {
    name: '株式会社KUDAN',
    market: '東証マザーズ（4425）',
    description: '人工知覚技術の研究開発及びソフトウェアライセンスの提供　等',
    history: '2015年当社株主が個人名義で投資、2018年東京証券取引所マザーズ上場',
    href: '/about-us/',
  },
  {
    name: '株式会社ザッパラス',
    market: '東京1部（3770）',
    description: 'オンライン占いサービスの企画制作・開発・運営及び電話占い並びにメディアサイトの運営　等',
    history: '2001年当社株主が個人名義で投資、2005年東京証券取引所第一部上場',
    href: '/about-us/',
  },
];

// Navy tiles linking to sections of the About page (\n = line break).
export const aboutTiles = [
  { title: 'エンジェル投資家\nとは？', href: '/about-us/#aboutus001' },
  { title: '起業家の\nコアバリューに\n投資します。', href: '/about-us/#aboutus002' },
  { title: '投資後も継続的に\nサポートします。', href: '/about-us/#aboutus003' },
  { title: '会社概要＆\nチーム', href: '/about-us/#company-info' },
];

// `url` is optional: partners without one render without a link (as on the original).
export const partners: { name: string; logo: string; url?: string }[] = [
  { name: 'ノースイースト・キャピタルマネジメント株式会社', logo: '/images/partners/north-east-capital.jpg', url: 'http://northeast-cm.com' },
  { name: '株式会社KIRAKU', logo: '/images/partners/kiraku.jpg', url: 'https://kiraku.io/' },
  { name: 'Venturous Group', logo: '/images/partners/venturous-group.jpg', url: 'https://www.venturousgroup.com/' },
  { name: 'Odyssey Group', logo: '/images/partners/odyssey.png' },
  { name: '株式会社YES HOKKAIDO', logo: '/images/partners/yes-hokkaido.jpeg', url: 'http://www.yeshokkaidorealestate.com/index.html?language=ja' },
  { name: 'Wayfarer', logo: '/images/partners/wayfarer.jpg' },
  { name: 'Pegasus Capital', logo: '/images/partners/pegasus.jpg' },
];
