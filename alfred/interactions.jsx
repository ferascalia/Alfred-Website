// interactions.jsx — FadeIn, Magnet, AnimatedText, useScrollY
const { useRef, useEffect, useState, useLayoutEffect, useMemo, createElement, Children, cloneElement, isValidElement } = React;

/* ---------------- FadeIn (scroll-based "is in viewport" check) ---------------- */
function FadeIn({ children, delay = 0, duration = 0.7, x = 0, y = 30, as = "div", className = "", style = {}, once = true, ...rest }) {
  const ref = useRef(null);
  // Start shown to avoid blank-page risk in throttled iframes where CSS
  // transitions don't tick. Reveal animation is still applied via @keyframes
  // which the browser handles even without rAF.
  const [shown, setShown] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let pending = false;
    const check = () => {
      pending = false;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const inView = r.bottom > -50 && r.top < vh + 50;
      if (inView) {
        setShown(true);
        if (once) {
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onScroll);
        }
      } else if (!once) {
        setShown(false);
      }
    };
    const onScroll = () => {
      if (!pending) {
        pending = true;
        setTimeout(check, 16);
      }
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [once]);

  const finalStyle = {
    ...style,
    opacity: shown ? 1 : 0,
    transform: shown ? "none" : `translate3d(${x}px, ${y}px, 0)`,
    willChange: "opacity, transform",
  };
  return createElement(as, { ref, className, style: finalStyle, ...rest }, children);
}

/* ---------------- Magnet ---------------- */
function Magnet({ children, padding = 150, strength = 3, className = "", style = {} }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.max(Math.abs(dx) - r.width / 2, Math.abs(dy) - r.height / 2);
      if (dist < padding) {
        setActive(true);
        setPos({ x: dx / strength, y: dy / strength });
      } else {
        setActive(false);
        setPos({ x: 0, y: 0 });
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: active
          ? "transform 0.3s ease-out"
          : "transform 0.6s ease-in-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

/* ---------------- AnimatedText (char-by-char on scroll) ---------------- */
function AnimatedText({ text, className = "", style = {} }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0); // 0..1
  const chars = useMemo(() => text.split(""), [text]);

  useEffect(() => {
    const compute = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // offset start 0.8 (element top at 80% viewport) -> 0
      // offset end 0.2 (element bottom at 20% viewport) -> 1
      const startY = vh * 0.8;
      const endY = vh * 0.2;
      // p = how much of the element has crossed the threshold
      // simple model: track midpoint
      const top = r.top;
      const bottom = r.bottom;
      // when top is at startY -> p=0; when bottom is at endY -> p=1
      const distance = (startY - top) / (startY - endY + (bottom - top));
      const p = Math.min(1, Math.max(0, distance));
      setProgress(p);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  const total = chars.length;
  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((c, i) => {
        // Each char gets a window of progress
        const charStart = i / total;
        const charEnd = (i + 4) / total; // small fade window
        let o = (progress - charStart) / (charEnd - charStart);
        o = Math.min(1, Math.max(0, o));
        const opacity = 0.15 + 0.85 * o;
        return (
          <span key={i} style={{ opacity, transition: "opacity 120ms linear" }}>
            {c}
          </span>
        );
      })}
    </p>
  );
}

/* ---------------- useScrollY (setTimeout throttle) ---------------- */
function useScrollY() {
  const [y, setY] = useState(typeof window !== "undefined" ? window.scrollY : 0);
  useEffect(() => {
    let pending = false;
    const update = () => {
      pending = false;
      setY(window.scrollY);
    };
    const onScroll = () => {
      if (!pending) {
        pending = true;
        setTimeout(update, 16);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);
  return y;
}

Object.assign(window, { FadeIn, Magnet, AnimatedText, useScrollY });
