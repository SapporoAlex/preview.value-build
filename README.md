# VALUE BUILD – static website

The value-build.com site rebuilt from WordPress/Divi in **Astro** with **Sass**.
The build produces plain static HTML/CSS/JS plus one small PHP script for the
contact form, so it runs on any ordinary PHP hosting (Apache).

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321  (live reload; the form's PHP won't run here)
npm run build      # outputs the deployable site to dist/
```

To test the contact form locally you need PHP installed:

```bash
npm run build
npm run preview:php   # serves dist/ with PHP at http://localhost:8080
```

## Deploying

1. `npm run build`
2. Upload the **contents** of `dist/` to the web root (e.g. `public_html/`).
   Include the hidden `.htaccess` files.
3. Edit `api/config.php` on the server if the recipient email address changes.

The server needs PHP 7.4+ with `mail()` enabled. Most shared hosts have this.
If mail ends up in spam, make sure `from_email` in `config.php` uses the same
domain as the website.

## Project structure

```
public/                    Copied to dist/ as-is
  .htaccess                Apache: 404 page, /en/ redirects, caching
  api/contact.php          Contact form handler (validation, spam checks, email)
  api/config.php           Form settings: recipient, subject, redirects
  images/                  All images, grouped by section

src/
  data/                    ALL PAGE CONTENT LIVES HERE – edit text without touching markup
    site.ts                Company details, navigation menu, footer
    home.ts                IPO cards, home tiles, partners
    about.ts               About sections, company profile, team
    invest.ts              Investment steps, testimonials
    portfolio.ts           Categories, tech companies, tourism, real-estate projects
    faq.ts                 Q&A
  pages/                   One file per URL (about-us.astro -> /about-us/)
  layouts/BaseLayout.astro <head>, header, footer – wraps every page
  components/
    layout/                SiteHeader, SiteFooter
    ui/                    Generic building blocks: Section, SectionTitle, PageHeader,
                           DiagonalLine, MoreLink (text or button), Accordion (animated)
    cards/                 Repeated items: LogoCard, TeamCard, StepCard, PhotoCard,
                           TestimonialCard, CategoryCard, IpoCard, LinkTile
    sections/              Larger page sections: HomeHero, FeatureStory,
                           CategoryShowcase, ProjectShowcase, OtherCategories, ContactForm
  scripts/                 Small client scripts (scroll reveal, contact form)
  styles/
    abstracts/             Design tokens (_variables.scss) + mixins – no CSS output
    base/                  Reset + typography
    layout/                .container and .grid helpers
    utilities/             Scroll-reveal animations, small helpers
    global.scss            Entry point, imported once by BaseLayout
```

## Common tasks

| I want to…                         | Edit                                             |
| ---------------------------------- | ------------------------------------------------ |
| Change text on a page              | the matching file in `src/data/`, or the page in `src/pages/` |
| Add a portfolio company            | add an entry to the list in `src/data/portfolio.ts` |
| Add a company logo                 | put the file in `public/images/tech/`, set `logo: '/images/tech/…'` |
| Add a team member                  | `team` in `src/data/about.ts` + photo in `public/images/team/` |
| Change the menu                    | `mainNav` in `src/data/site.ts`                  |
| Change brand colours / fonts       | `src/styles/abstracts/_variables.scss`           |
| Change where form emails go        | `public/api/config.php` (or `dist/api/config.php` on the server) |
| Add a new page                     | create `src/pages/my-page.astro` using `BaseLayout` + `PageHeader` |

## Styling conventions

- **BEM class names**: `.block`, `.block__element`, `.block--modifier`
  (e.g. `.team-card__name`, `.section--grey`). A class tells you which component it belongs to.
- **Styles live with their component** in a `<style lang="scss">` block, scoped
  automatically by Astro. Only truly global styles live in `src/styles/`.
- **Text styles are defined once** as mixins in `src/styles/abstracts/_mixins.scss`,
  taken from the original site: `text-page-title` (orange centred page title),
  `text-section-label` (small orange label), `text-display` (large dark heading),
  `text-body`, `text-intro`, `text-accent` (Josefin Sans) and more. Components use
  `@include text-page-title;` rather than setting fonts by hand.
- **Fonts**: Montserrat (titles), Noto Sans JP (body), Josefin Sans (bios, cards,
  testimonials), Share Tech (partner name tags). Body text colour is `#282828`.
- **Design tokens are available everywhere**: `$color-navy`, `$font-heading`,
  `@include mq(lg) { … }` etc. work in any component without an import
  (injected via `astro.config.mjs`). Partials inside `src/styles/` import them
  explicitly with `@use '../abstracts' as *;`.
- **Mobile first**: base styles are for phones; `@include mq(md)` / `mq(lg)` add
  larger-screen rules. Breakpoints: sm 480, md 768, lg 981, xl 1280.

## Animations & hover effects

- **Scroll reveal** – add `data-reveal="up" | "fade" | "left" | "right" | "line"`
  to any element. Optional stagger: `style="--reveal-delay: 200ms"`.
  Content stays visible if JavaScript is off, and motion is disabled for users
  with "reduce motion" turned on.
- **Diagonal accent lines** – `<DiagonalLine color="teal" angle={-38} length="200px" />`
  draws in on scroll (the Divi rotated-divider effect).
- **Hover effects** kept from the original: nav links fade to 70%, partner/company logos
  go from greyscale to colour, offset "block" shadows on cards, plus image zooms,
  arrow nudges and the stretching "MORE —" dash.

## Contact form

`ContactForm.astro` posts to `/api/contact.php`.

- With JavaScript: submitted via `fetch()`, errors/success shown inline.
- Without JavaScript: normal POST, PHP redirects to `/contact/?status=success|error`.
- Spam protection: hidden honeypot field, minimum fill time, per-session throttle.
- All input is validated again on the server; line breaks are stripped from
  anything used in mail headers.

## Notes from the migration

- The site is served from the root (`/about-us/`) instead of `/en/about-us/`;
  `.htaccess` 301-redirects old `/en/…` links. The page slugs (`tourism-2`,
  `hard-soft`, …) are unchanged.
- Several images were already missing on the live WordPress site (most
  Technologies & Lifestyle logos, the IPO company logos and some
  Start-Ups & Real Estate photos). Companies without a logo show a styled
  name tile; the real-estate projects reuse available photos. Drop real
  files into `public/images/` and update `src/data/portfolio.ts` to replace them.
- The "Real Estate" category has no page (the old link was a 404), so it
  is shown without a link.
- The "農業 × ホテル" project text was a copy of the boutique-hotel text on the
  old site – marked with a comment in `src/data/portfolio.ts`.
