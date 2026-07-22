import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const scrollToTop = () => {
  window.scrollTo(0, 0);
  if (document.documentElement) document.documentElement.scrollTop = 0;
  if (document.body) document.body.scrollTop = 0;
};

const ScrollToTop = () => {
  const { pathname, key } = useLocation();

  useLayoutEffect(() => {
    scrollToTop();
    const raf1 = requestAnimationFrame(() => {
      scrollToTop();
      const raf2 = requestAnimationFrame(scrollToTop);
      // second rAF handles lazy/Suspense mount after chunk loads
      (window as any).__scrollRaf2 = raf2;
    });
    const t = window.setTimeout(scrollToTop, 120);
    return () => {
      cancelAnimationFrame(raf1);
      window.clearTimeout(t);
    };
  }, [pathname, key]);

  return null;
};

export default ScrollToTop;
