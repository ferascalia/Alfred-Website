// sections-bottom.jsx — EarlyAccess, Footer
const { useState: _us3 } = React;

function EarlyAccessSection({ copy }) {
  const [name, setName] = _us3("");
  const [email, setEmail] = _us3("");
  const [submitted, setSubmitted] = _us3(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="join" style={{
      background: "var(--bg-2)",
      padding: "clamp(96px, 14vw, 160px) 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)",
        width: "60vw", height: "60vw", maxWidth: 700, maxHeight: 700,
        background: "radial-gradient(circle, rgba(0,212,255,0.15), transparent 60%)",
        filter: "blur(40px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <FadeIn>
          <div className="eyebrow" style={{ justifyContent: "center" }}>{copy.early.eyebrow}</div>
        </FadeIn>

        <FadeIn y={30}>
          <h2 style={{
            font: "800 clamp(32px, 6vw, 56px)/1.05 var(--font-sans)",
            color: "var(--accent)",
            letterSpacing: "-0.03em",
            margin: "24px 0 16px",
          }}>
            {copy.early.heading}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p style={{
            font: "400 clamp(15px, 1.6vw, 18px)/1.6 var(--font-sans)",
            color: "var(--fg-3)",
            margin: "0 0 40px",
          }}>
            {copy.early.subtitle}
          </p>
        </FadeIn>

        {submitted ? (
          <FadeIn>
            <div style={{
              background: "rgba(0,212,255,0.06)",
              border: "1px solid rgba(0,212,255,0.30)",
              borderRadius: 16,
              padding: "32px 28px",
              display: "flex", alignItems: "center", gap: 16,
              textAlign: "left",
              maxWidth: 420, margin: "0 auto",
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 9999,
                background: "rgba(0,212,255,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--accent)",
                flexShrink: 0,
              }}>
                <i data-lucide="check-circle-2" style={{ width: 24, height: 24 }} />
              </div>
              <div style={{
                fontFamily: "var(--font-serif)", fontStyle: "italic",
                font: "italic 400 18px/1.5 var(--font-serif)",
                color: "var(--fg-1)",
              }}>
                {copy.early.success}
              </div>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.2}>
            <form onSubmit={onSubmit} style={{
              display: "flex", flexDirection: "column", gap: 12,
              maxWidth: 420, margin: "0 auto",
            }}>
              <input
                type="text"
                placeholder={copy.early.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="alf-input"
                required
              />
              <input
                type="email"
                placeholder={copy.early.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="alf-input"
                required
              />
              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px 24px", fontSize: 14 }}>
                {copy.early.submit}
              </button>
            </form>
          </FadeIn>
        )}

        <FadeIn delay={0.3}>
          <p style={{
            font: "400 13px/1.5 var(--font-sans)",
            color: "var(--fg-4)",
            margin: "20px 0 0",
          }}>
            {copy.early.fine}
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div style={{
            display: "flex", gap: 32, justifyContent: "center", marginTop: 36, flexWrap: "wrap",
          }}>
            {[
              ["shield", copy.early.trust[0].label],
              ["lock", copy.early.trust[1].label],
              ["trash-2", copy.early.trust[2].label],
            ].map(([icon, label]) => (
              <div key={icon} style={{
                display: "flex", alignItems: "center", gap: 8,
                font: "500 12px/1.2 var(--font-sans)", color: "var(--fg-3)",
              }}>
                <i data-lucide={icon} style={{ width: 16, height: 16, color: "var(--accent)" }} />
                {label}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function FooterSection({ copy }) {
  return (
    <footer className="alf-footer">
      <div className="alf-footer-inner">
        <div className="alf-brand">
          <div className="alf-brand-mark" style={{ width: 28, height: 28 }} />
          <div className="alf-brand-word" style={{ fontSize: 15 }}>Alfred</div>
        </div>
        <div className="alf-footer-links">
          {copy.footer.links.map((l) => (
            <a key={l} href="#">{l}</a>
          ))}
        </div>
        <div className="alf-footer-right">
          <a href="#" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.82 1.18 3.08 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"/>
            </svg>
          </a>
          <a href="#" aria-label="X">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2H21.5l-7.5 8.575L23 22h-6.844l-5.36-7.012L4.5 22H1.244l8.014-9.16L1 2h7l4.844 6.402L18.244 2Zm-2.4 18h1.86L6.24 4H4.244l11.6 16Z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="alf-footer-copyright">{copy.footer.tagline}</div>
    </footer>
  );
}

Object.assign(window, { EarlyAccessSection, FooterSection });
