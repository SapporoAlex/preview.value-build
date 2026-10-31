// Scroll reveal: adds `is-visible` to [data-reveal] elements as they enter
// the viewport. The matching CSS lives in src/styles/utilities/_reveal.scss.

export function initReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reduceMotion) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  // Only hide elements once we know the observer will reveal them again.
  document.documentElement.classList.add('js-reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  );

  elements.forEach((el) => observer.observe(el));
}
