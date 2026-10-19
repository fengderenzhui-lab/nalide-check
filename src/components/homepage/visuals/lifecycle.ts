// Helpers shared by the homepage visuals

type Cleanup = () => void;

export const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Sets up each visual on page load, and cleans it up when leaving the page */
export const mountAll = (selector: string, mount: (root: HTMLElement) => Cleanup | void) => {
  let cleanups: Cleanup[] = [];
  document.addEventListener('astro:page-load', () => {
    document.querySelectorAll<HTMLElement>(selector).forEach((root) => {
      const cleanup = mount(root);
      if (cleanup) cleanups.push(cleanup);
    });
  });
  document.addEventListener('astro:before-swap', () => {
    cleanups.forEach((fn) => fn());
    cleanups = [];
  });
};

/** Calls frame(time) every frame, but only while the visual is on screen */
export const animate = (root: Element, frame: (t: number) => void): Cleanup => {
  let raf = 0;
  let time = 0; // In ms, not counting paused time
  let last = 0;
  let onScreen = false;

  const tick = (now: number) => {
    // Capped, so a lag spike doesn't jump ahead
    time += last ? Math.min(now - last, 100) : 0;
    last = now;
    frame(time);
    raf = requestAnimationFrame(tick);
  };

  const update = () => {
    const run = onScreen && !document.hidden;
    if (run && !raf) {
      last = 0;
      raf = requestAnimationFrame(tick);
    } else if (!run && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };

  const observer = new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    update();
  });
  observer.observe(root);
  document.addEventListener('visibilitychange', update);

  return () => {
    cancelAnimationFrame(raf);
    observer.disconnect();
    document.removeEventListener('visibilitychange', update);
  };
};
