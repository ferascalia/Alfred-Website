// app.jsx — root
const { useState: _usApp, useEffect: _ueApp } = React;

function App() {
  const [lang, setLang] = _usApp("en");
  const copy = COPY[lang];

  // Re-run lucide icon replacement after any render
  _ueApp(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  });

  return (
    <div style={{ overflowX: "clip", background: "var(--bg-0)", minHeight: "100vh" }}>
      <Nav lang={lang} setLang={setLang} copy={copy} />
      <HeroSection copy={copy} />
      <MarqueeSection copy={copy} />
      <ProblemSection copy={copy} />
      <MeetAlfredSection copy={copy} />
      <FeaturesSection copy={copy} />
      <UseCasesSection copy={copy} />
      <EarlyAccessSection copy={copy} />
      <FooterSection copy={copy} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
