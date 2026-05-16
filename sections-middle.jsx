// sections-middle.jsx — Problem, MeetAlfred, Features, UseCases
const { useRef: _ur2, useState: _us2, useEffect: _ue2 } = React;

/* ---------- Problem ---------- */
function ProblemSection({ copy }) {
  return (
    <section style={{
      position: "relative",
      background: "var(--bg-1)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "clamp(60px, 10vw, 120px) 24px",
      overflow: "hidden",
    }}>
      <div className="grid-bg" style={{
        position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.06), transparent 60%)",
        pointerEvents: "none",
      }} />

      <FadeIn>
        <div className="eyebrow" style={{ marginBottom: 32 }}>{copy.problem.eyebrow}</div>
      </FadeIn>

      <FadeIn y={40}>
        <h2 style={{
          font: "800 clamp(36px, 7vw, 100px)/0.95 var(--font-sans)",
          color: "var(--accent)",
          letterSpacing: "-0.04em",
          textTransform: "uppercase",
          textAlign: "center",
          margin: 0,
          textWrap: "balance",
        }}>
          {copy.problem.heading}
        </h2>
      </FadeIn>

      <div style={{ height: "clamp(40px, 6vw, 64px)" }} />

      <AnimatedText
        text={copy.problem.paragraph}
        className=""
        style={{
          font: "500 clamp(16px, 2.2vw, 22px)/1.65 var(--font-sans)",
          color: "var(--fg-1)",
          maxWidth: 720,
          textAlign: "center",
          margin: 0,
          textWrap: "pretty",
        }}
      />

      <div style={{ height: "clamp(64px, 8vw, 96px)" }} />

      <FadeIn delay={0.1}>
        <a href="#join" className="btn btn-primary">{copy.problem.cta}</a>
      </FadeIn>
    </section>
  );
}

/* ---------- Meet Alfred ---------- */
function MeetAlfredSection({ copy }) {
  return (
    <section id="meet" style={{
      background: "var(--bg-0)",
      padding: "clamp(80px, 10vw, 160px) 24px",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 80px)" }}>
          <FadeIn>
            <div className="eyebrow" style={{ justifyContent: "center" }}>{copy.meet.eyebrow}</div>
          </FadeIn>
          <FadeIn y={40}>
            <h2 style={{
              font: "800 clamp(36px, 7vw, 100px)/0.95 var(--font-sans)",
              color: "var(--accent)",
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "24px 0 0",
            }}>
              {copy.meet.heading}
            </h2>
          </FadeIn>
        </div>

        <div className="meet-grid" style={{
          display: "grid",
          gridTemplateColumns: "minmax(200px, 280px) 1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "start",
        }}>
          {/* Portrait */}
          <FadeIn delay={0.1}>
            <div style={{ position: "relative", aspectRatio: "1", maxWidth: 280 }}>
              <div style={{
                position: "absolute", inset: -20,
                background: "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.40), transparent 65%)",
                filter: "blur(8px)",
                animation: "glow-pulse 4s ease-in-out infinite",
              }} />
              <div className="portrait-img" style={{ position: "relative" }} />
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <FadeIn delay={0.2}>
              <blockquote style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(18px, 2.1vw, 26px)",
                lineHeight: 1.5,
                color: "var(--fg-1)",
                borderLeft: "3px solid rgba(0,212,255,0.40)",
                paddingLeft: 24,
                margin: "0 0 48px",
                textWrap: "pretty",
              }}>
                {copy.meet.quote}
              </blockquote>
            </FadeIn>

            {/* Asymmetric feature blocks */}
            <div className="feature-asym" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: 16,
              minHeight: 380,
            }}>
              {/* Featured — spans 2 rows */}
              <FadeIn delay={0.3} style={{ gridColumn: "1", gridRow: "1 / span 2" }}>
                <div style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  padding: 36,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  boxShadow: "var(--shadow-card)",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", top: -60, right: -60, width: 200, height: 200,
                    background: "radial-gradient(circle, rgba(0,212,255,0.18), transparent 60%)",
                    pointerEvents: "none",
                  }} />
                  <div style={{
                    width: 56, height: 56,
                    borderRadius: 14,
                    background: "rgba(0,212,255,0.10)",
                    border: "1px solid rgba(0,212,255,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--accent)",
                  }}>
                    <i data-lucide="brain" style={{ width: 32, height: 32 }} />
                  </div>
                  <div style={{ marginTop: "auto" }}>
                    <h3 style={{ font: "700 clamp(20px, 2vw, 26px)/1.15 var(--font-sans)", color: "var(--fg-1)", margin: "0 0 12px" }}>
                      {copy.meet.featured.title}
                    </h3>
                    <p style={{
                      fontFamily: "var(--font-serif)", fontStyle: "italic",
                      font: "italic 400 clamp(15px, 1.4vw, 18px)/1.55 var(--font-serif)",
                      color: "var(--fg-2)", margin: 0,
                    }}>
                      "{copy.meet.featured.desc}"
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Small 1 */}
              <FadeIn delay={0.4} style={{ gridColumn: "2", gridRow: "1" }}>
                <div style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: 24,
                  height: "100%",
                  display: "flex", flexDirection: "column", gap: 12,
                  boxShadow: "var(--shadow-card)",
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "rgba(0,212,255,0.10)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--accent)",
                  }}>
                    <i data-lucide="bell-ring" style={{ width: 20, height: 20 }} />
                  </div>
                  <div>
                    <h3 style={{ font: "600 16px/1.2 var(--font-sans)", color: "var(--fg-1)", margin: "0 0 6px" }}>
                      {copy.meet.small1.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", font: "italic 400 14px/1.5 var(--font-serif)", color: "var(--fg-3)", margin: 0 }}>
                      "{copy.meet.small1.desc}"
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Small 2 */}
              <FadeIn delay={0.5} style={{ gridColumn: "2", gridRow: "2" }}>
                <div style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: 24,
                  height: "100%",
                  display: "flex", flexDirection: "column", gap: 12,
                  boxShadow: "var(--shadow-card)",
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "rgba(0,212,255,0.10)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--accent)",
                  }}>
                    <i data-lucide="send" style={{ width: 20, height: 20 }} />
                  </div>
                  <div>
                    <h3 style={{ font: "600 16px/1.2 var(--font-sans)", color: "var(--fg-1)", margin: "0 0 6px" }}>
                      {copy.meet.small2.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", font: "italic 400 14px/1.5 var(--font-serif)", color: "var(--fg-3)", margin: 0 }}>
                      "{copy.meet.small2.desc}"
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .meet-grid { grid-template-columns: 1fr !important; justify-items: center; }
          .meet-grid > :first-child { max-width: 200px; }
          .feature-asym {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto auto !important;
            min-height: 0 !important;
          }
          .feature-asym > * {
            grid-column: 1 !important;
            grid-row: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ---------- Features (Capabilities) ---------- */
function FeaturesSection({ copy }) {
  return (
    <section id="features" style={{
      background: "var(--bg-1)",
      padding: "clamp(80px, 10vw, 160px) 24px",
      borderTopLeftRadius: "clamp(40px, 5vw, 60px)",
      borderTopRightRadius: "clamp(40px, 5vw, 60px)",
      marginTop: "-2px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(56px, 8vw, 112px)" }}>
          <FadeIn>
            <div className="eyebrow" style={{ justifyContent: "center" }}>{copy.features.eyebrow}</div>
          </FadeIn>
          <FadeIn y={40}>
            <h2 style={{
              font: "800 clamp(36px, 7vw, 100px)/0.95 var(--font-sans)",
              color: "var(--accent)",
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "20px 0 0",
            }}>
              {copy.features.heading}
            </h2>
          </FadeIn>
        </div>

        <div>
          {copy.features.items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08} y={30}>
              <div className="cap-row">
                <div className="cap-num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="cap-name">{item.name}</h3>
                  <p className="cap-desc">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Use Cases (sticky stack) ---------- */
function UseCaseCard({ card, index, total }) {
  const containerRef = _ur2(null);
  const [scale, setScale] = _us2(1);
  const targetScale = 1 - (total - 1 - index) * 0.03;

  _ue2(() => {
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      // Progress: container top reaches sticky offset (top-24 ~ 96px) -> 0
      // Container has scrolled past by 1 viewport -> 1
      const stickyTop = window.innerWidth < 768 ? 96 : 128;
      const start = stickyTop; // r.top === start means container just hit sticky position
      const end = -(r.height - stickyTop); // container has fully scrolled past
      const p = (r.top - start) / (end - start);
      const clamped = Math.min(1, Math.max(0, p));
      // Scale interpolates from 1 down to targetScale as the next card comes over
      const s = 1 - (1 - targetScale) * clamped;
      setScale(s);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetScale]);

  return (
    <div ref={containerRef} style={{ height: "85vh", position: "relative" }}>
      <div style={{
        position: "sticky",
        top: `${96 + index * 28}px`,
        transform: `scale(${scale})`,
        transformOrigin: "top center",
        transition: "transform 80ms linear",
      }}>
        <div className="uc-card" style={{ padding: "clamp(24px, 4vw, 56px)" }}>
          <div className="uc-card-inner" style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 32,
          }}>
            {/* Top */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 24, flexWrap: "wrap" }}>
                <div style={{
                  font: "800 clamp(48px, 6vw, 96px)/0.9 var(--font-sans)",
                  color: "var(--accent)",
                  letterSpacing: "-0.04em",
                }}>{card.number}</div>
                <div>
                  <div style={{ font: "500 12px/1 var(--font-sans)", color: "var(--fg-3)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 10 }}>
                    {String(index + 1).padStart(2, "0")} · Persona
                  </div>
                  <div style={{ font: "700 clamp(24px, 3vw, 40px)/1.05 var(--font-sans)", color: "var(--fg-1)", letterSpacing: "-0.02em" }}>
                    {card.persona}
                  </div>
                </div>
              </div>
              <a href="#join" className="btn btn-secondary" style={{ padding: "11px 20px", fontSize: 13 }}>
                {card.cta} <span className="arrow">→</span>
              </a>
            </div>

            {/* Bottom — two cols */}
            <div className="uc-bottom" style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.2fr)",
              gap: 32,
              alignItems: "center",
            }}>
              <div style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                font: "italic 400 clamp(18px, 1.9vw, 24px)/1.5 var(--font-serif)",
                color: "var(--fg-1)",
                textWrap: "pretty",
              }}>
                "{card.pain}"
              </div>
              <div style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: 24,
                boxShadow: "var(--shadow-card)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 12, borderBottom: "1px solid var(--border)", marginBottom: 14 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "var(--accent)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--on-accent)",
                  }}>
                    <i data-lucide="send" style={{ width: 16, height: 16 }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ font: "600 13px/1 var(--font-sans)", color: "var(--accent)" }}>Alfred</div>
                    <div style={{ font: "500 10px/1.3 var(--font-sans)", color: "var(--fg-4)", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 4 }}>
                      {card.mockTitle}
                    </div>
                  </div>
                  <div className="dot-cyan" />
                </div>
                <div style={{
                  background: "var(--bg-1)",
                  border: "1px solid var(--border)",
                  borderLeft: "2px solid var(--accent)",
                  borderRadius: 12,
                  padding: "14px 16px",
                  font: "400 14.5px/1.55 var(--font-sans)",
                  color: "var(--fg-1)",
                }}>
                  {card.mockMsg}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .uc-bottom { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function UseCasesSection({ copy }) {
  return (
    <section id="usecases" style={{
      background: "var(--bg-0)",
      borderTopLeftRadius: "clamp(40px, 5vw, 60px)",
      borderTopRightRadius: "clamp(40px, 5vw, 60px)",
      marginTop: "-50px",
      position: "relative",
      zIndex: 10,
      padding: "clamp(80px, 10vw, 160px) 24px clamp(40px, 6vw, 80px)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(48px, 8vw, 96px)" }}>
          <FadeIn>
            <div className="eyebrow" style={{ justifyContent: "center" }}>{copy.useCases.eyebrow}</div>
          </FadeIn>
          <FadeIn y={40}>
            <h2 style={{
              font: "800 clamp(36px, 7vw, 100px)/0.95 var(--font-sans)",
              color: "var(--accent)",
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: "20px 0 0",
            }}>
              {copy.useCases.heading}
            </h2>
          </FadeIn>
        </div>

        <div>
          {copy.useCases.cards.map((card, i) => (
            <UseCaseCard key={i} card={card} index={i} total={copy.useCases.cards.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ProblemSection, MeetAlfredSection, FeaturesSection, UseCasesSection });
