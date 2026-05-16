// sections-top.jsx — Nav, Hero, Marquee
const { useState: _us1, useEffect: _ue1, useRef: _ur1, useMemo: _um1 } = React;

/* ---------- LangToggle ---------- */
function LangToggle({ lang, setLang }) {
  return (
    <button className="lang-pill" onClick={() => setLang(lang === "en" ? "pt" : "en")} aria-label="Toggle language">
      <span className={lang === "en" ? "on" : "off"}>EN</span>
      <span className="div">/</span>
      <span className={lang === "pt" ? "on" : "off"}>PT</span>
    </button>
  );
}

/* ---------- Nav ---------- */
function Nav({ lang, setLang, copy }) {
  return (
    <FadeIn as="nav" y={-20} duration={0.6} className="alf-nav">
      <div className="alf-nav-inner">
        <a href="#top" className="alf-brand">
          <div className="alf-brand-mark" />
          <div className="alf-brand-word">Alfred</div>
        </a>
        <div className="nav-links">
          <a href="#meet" className="nav-link">{copy.nav.about}</a>
          <a href="#features" className="nav-link">{copy.nav.features}</a>
          <a href="#join" className="nav-link">{copy.nav.earlyAccess}</a>
          <a href="#join" className="btn btn-primary" style={{ padding: "10px 18px", fontSize: 13 }}>
            {copy.nav.cta}
          </a>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </div>
    </FadeIn>
  );
}

/* ---------- Hero ---------- */
function HeroSection({ copy }) {
  return (
    <section id="top" style={{
      position: "relative",
      minHeight: "calc(100vh - 72px)",
      overflowX: "clip",
      background: "var(--bg-0)",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{
        position: "relative",
        flex: 1,
        maxWidth: 1440,
        margin: "0 auto",
        width: "100%",
        padding: "0 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        {/* Portrait — absolute right */}
        <div className="hero-portrait-wrap" style={{
          position: "absolute",
          right: "clamp(-40px, -2vw, 0px)",
          top: "50%",
          transform: "translateY(-50%)",
          width: "clamp(280px, 38vw, 520px)",
          zIndex: 0,
          pointerEvents: "none",
        }}>
          <FadeIn delay={0.6} y={30} duration={0.9}>
            <Magnet padding={150} strength={3}>
              <div style={{ position: "relative", pointerEvents: "auto" }}>
                <div className="hero-glow" />
                <div className="portrait-img" />
              </div>
            </Magnet>
          </FadeIn>
        </div>

        {/* Text content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "min(720px, 60%)" }} className="hero-text">
          <FadeIn delay={0.15} y={40}>
            <div className="eyebrow">{copy.hero.eyebrow}</div>
          </FadeIn>

          <FadeIn delay={0.15} y={40}>
            <div style={{ overflow: "hidden" }}>
              <h1 style={{
                font: "800 clamp(56px, 9vw, 132px)/0.9 var(--font-sans)",
                color: "var(--accent)",
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                margin: "20px 0 0",
                whiteSpace: "nowrap",
              }}>
                <span style={{ display: "block" }}>{copy.hero.h1Line1}</span>
                <span style={{ display: "block", color: "var(--fg-1)" }}>{copy.hero.h1Line2}</span>
              </h1>
            </div>
          </FadeIn>

          <FadeIn delay={0.25} y={20}>
            <p style={{
              font: "400 clamp(15px, 1.3vw, 19px)/1.6 var(--font-sans)",
              color: "var(--fg-3)",
              maxWidth: 480,
              margin: "28px 0 36px",
            }}>
              {copy.hero.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.35} y={20}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
              <a href="#join" className="btn btn-primary">{copy.hero.ctaPrimary}</a>
              <a href="#meet" className="btn btn-secondary">
                {copy.hero.ctaSecondary} <span className="arrow">→</span>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.45} y={20}>
            <div className="stats-row">
              <div>
                <div className="stat-num">{copy.hero.stat1Num}</div>
                <div className="stat-lbl">{copy.hero.stat1Lbl}</div>
              </div>
              <div className="stat-sep" />
              <div>
                <div className="stat-num">{copy.hero.stat2Num}</div>
                <div className="stat-lbl">{copy.hero.stat2Lbl}</div>
              </div>
              <div className="stat-sep" />
              <div>
                <div className="stat-num">{copy.hero.stat3Num}</div>
                <div className="stat-lbl">{copy.hero.stat3Lbl}</div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="hero-scroll-hint">{copy.hero.scrollHint}</div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-text { max-width: 100% !important; }
          .hero-portrait-wrap {
            left: 50% !important;
            right: auto !important;
            transform: translate(-50%, -50%) !important;
            opacity: 0.28;
            z-index: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ---------- Marquee ---------- */
function MarqueeSection({ copy }) {
  // Row 1: first 6 mocks, duplicated so the CSS animation can loop seamlessly.
  // Row 2: remaining 6, duplicated.
  const row1 = _um1(() => {
    const items = MOCKS.slice(0, 6);
    return [...items, ...items, ...items];
  }, []);
  const row2 = _um1(() => {
    const items = MOCKS.slice(6, 12);
    return [...items, ...items, ...items];
  }, []);

  return (
    <section style={{
      position: "relative",
      background: "var(--bg-0)",
      padding: "clamp(80px, 12vw, 160px) 0 80px",
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", marginBottom: 40 }}>
        <FadeIn>
          <div className="eyebrow">{copy.marquee.eyebrow}</div>
        </FadeIn>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div className="marquee-track dir-left">
          {row1.map((M, i) => <M key={"r1-" + i} />)}
        </div>
        <div className="marquee-track dir-right">
          {row2.map((M, i) => <M key={"r2-" + i} />)}
        </div>
      </div>

      {/* Edge fades */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 120,
        background: "linear-gradient(90deg, var(--bg-0), transparent)", pointerEvents: "none", zIndex: 2,
      }} />
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: 120,
        background: "linear-gradient(-90deg, var(--bg-0), transparent)", pointerEvents: "none", zIndex: 2,
      }} />
    </section>
  );
}

Object.assign(window, { Nav, HeroSection, MarqueeSection, LangToggle });
