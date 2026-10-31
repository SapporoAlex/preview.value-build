// Content for the home page (src/pages/index.astro).

export const ipoTrackRecord = [
  {
    name: '株式会社KUDAN',
    market: '東証マザーズ（4425）',
    description: '人工知覚技術の研究開発及びソフトウェアライセンスの提供　等',
    history: '2015年当社株主が個人名義で投資、2018年東京証券取引所マザーズ上場',
  },
  {
    name: '株式会社ザッパラス',
    market: '東京1部（3770）',
    description: 'オンライン占いサービスの企画制作・開発・運営及び電話占い並びにメディアサイトの運営　等',
    history: '2001年当社株主が個人名義で投資、2005年東京証券取引所第一部上場',
  },
];

// Navy tiles linking to sections of the About page.
export const aboutTiles = [
  { title: 'Angel Investor とは？', href: '/about-us/#aboutus001' },
  { title: 'We help entrepreneurs find solutions to their businesses.', href: '/about-us/#aboutus002' },
  { title: '投資後も継続的にサポートします。', href: '/about-us/#aboutus003' },
  { title: 'Company Profile & Team', href: '/about-us/#company-info' },
];

export const partners = [
  { name: 'North East Capital Management K.K.', logo: '/images/partners/north-east-capital.jpg' },
  { name: 'Kiraku', logo: '/images/partners/kiraku.jpg' },
  { name: 'Venturous Group', logo: '/images/partners/venturous-group.jpg' },
  { name: 'Odyssey Group', logo: '/images/partners/odyssey.png' },
  { name: 'YES HOKKAIDO', logo: '/images/partners/yes-hokkaido.jpeg' },
  { name: 'Wayfarer', logo: '/images/partners/wayfarer.jpg' },
  { name: 'Pegasus Capital', logo: '/images/partners/pegasus.jpg' },
];
