// Site-wide settings: company details, navigation and footer content.

export const site = {
  name: 'VALUE BUILD',
  tagline: '「モノ」づくりから、価値づくりの国、日本へ。',
  description:
    'Value Build is an independent angel investment company based in Japan, investing in visionary entrepreneurs.',
  logo: '/images/brand/logo.png',
  contact: {
    address: '9-1, Higashi 3-chome, Minami 4-jo, Chuo-ku, Sapporo, Hokkaido, Japan.',
    phone: '+81-11-261-7476',
    phoneHref: 'tel:+81112617476',
    email: 'all@value-build.com',
  },
  copyright: '© Value Build / All rights reserved',};

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about-us/' },
  { label: 'How we invest?', href: '/how-we-invest/' },
  {
    label: 'Portfolio',
    href: '/portfolio-top/',
    children: [
      { label: 'Technologies & Lifestyle', href: '/technology-lifestyle/' },
      { label: 'Tourism', href: '/tourism-2/' },
      { label: 'Start-Ups & Real-Estate', href: '/hard-soft/' },
    ],
  },
  { label: 'Q&A', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
];
