// mockups.jsx — 12 product preview cards for the marquee
const { useState: _useStateMock } = React;

// Icon helper (lucide) — returns an inline svg matching lucide style
function Ico({ name, size = 14, color = "currentColor", strokeWidth = 1.75, style = {} }) {
  // We just render lucide via <i data-lucide> and let lucide.createIcons() replace it
  return (
    <i
      data-lucide={name}
      style={{
        width: size,
        height: size,
        color,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style,
      }}
      data-lucide-stroke-width={strokeWidth}
    />
  );
}

function MockHeader({ avatar, title, sub, dot = "cyan" }) {
  const dotClass = dot === "cyan" ? "dot-cyan" : dot === "warn" ? "dot-warn" : "dot-success";
  return (
    <div className="mock-header">
      <div className="mock-avatar">{avatar}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 3, flex: 1, minWidth: 0 }}>
        <div className="mock-title">{title}</div>
        {sub && <div className="mock-sub">{sub}</div>}
      </div>
      <div className={dotClass} />
    </div>
  );
}

// 1. Memory Recall
function MockMemoryRecall() {
  return (
    <div className="mock">
      <MockHeader avatar="MA" title="Maria Andrade" sub="Acme Corp · CMO" />
      <div className="mock-bubble">
        <span style={{ color: "var(--accent-2)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em" }}>ALFRED</span>
        <div style={{ marginTop: 4 }}>
          Maria works at Acme Corp. You last spoke <span style={{ color: "var(--accent)" }}>23 days ago</span> about her son's graduation.
        </div>
      </div>
      <div style={{ display: "flex", gap: 6, marginTop: "auto" }}>
        <span className="mock-tag">memory</span>
        <span className="mock-tag">23d</span>
      </div>
    </div>
  );
}

// 2. Smart Nudge
function MockSmartNudge() {
  return (
    <div className="mock">
      <MockHeader avatar={<Ico name="bell-ring" size={14} color="var(--on-accent)" />} title="Reminder" sub="Carlos · 31 days" dot="warn" />
      <div className="mock-bubble">
        Time to reach out to <span style={{ color: "var(--accent)" }}>Carlos</span> — it's been 31 days. His preferred cadence is monthly.
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
        <span className="mock-pill primary"><Ico name="copy" size={11} color="var(--on-accent)" />Copy draft</span>
        <span className="mock-pill"><Ico name="moon" size={11} />Snooze</span>
      </div>
    </div>
  );
}

// 3. Draft Message
function MockDraftMessage() {
  return (
    <div className="mock">
      <MockHeader avatar="CR" title="Carlos Ramos" sub="Draft · ready" />
      <div className="mock-bubble" style={{ fontSize: 12 }}>
        Hey Carlos, how's the new office setup going? Last time we talked you mentioned the move was stressful.
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
        <span className="mock-pill"><Ico name="pencil" size={11} />Edit</span>
        <span className="mock-pill primary"><Ico name="send-horizontal" size={11} color="var(--on-accent)" />Send</span>
      </div>
    </div>
  );
}

// 4. Semantic Search
function MockSemanticSearch() {
  return (
    <div className="mock">
      <div style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--bg-1)", border: "1px solid var(--border)", borderRadius: 9999, padding: "8px 14px" }}>
        <Ico name="search" size={13} color="var(--accent)" />
        <span style={{ font: "400 12px/1 var(--font-sans)", color: "var(--fg-1)" }}>who works in marketing?</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[
          ["AS", "Ana Silva", "CMO · TechBR"],
          ["PS", "Pedro Santos", "Marketing Lead · StartupX"],
          ["LF", "Lucia Ferreira", "Brand Director · MediaCo"],
        ].map(([i, n, r]) => (
          <div key={n} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", background: "var(--bg-1)", borderRadius: 10, border: "1px solid var(--border)" }}>
            <div className="mock-avatar" style={{ width: 24, height: 24, fontSize: 10 }}>{i}</div>
            <div style={{ font: "500 12px/1.2 var(--font-sans)", color: "var(--fg-1)" }}>{n}</div>
            <div style={{ font: "400 11px/1 var(--font-sans)", color: "var(--fg-4)", marginLeft: "auto" }}>{r}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 5. Contact Card
function MockContactCard() {
  return (
    <div className="mock" style={{ padding: 18 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div className="mock-avatar" style={{ width: 44, height: 44, fontSize: 14 }}>JM</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ font: "600 14px/1.2 var(--font-sans)", color: "var(--fg-1)" }}>João Mendes</div>
          <div style={{ font: "400 11.5px/1.3 var(--font-sans)", color: "var(--fg-3)", marginTop: 2 }}>Fintech founder · PayLink</div>
        </div>
        <div className="mock-tag">Mentor</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: 11, color: "var(--fg-3)" }}>
        <div><span style={{ color: "var(--fg-4)" }}>Cadence</span> · Every 2 weeks</div>
        <div><span style={{ color: "var(--fg-4)" }}>Last</span> · May 3</div>
      </div>
      <div style={{ display: "flex", gap: 6, marginTop: "auto" }}>
        <span className="mock-tag">AI</span>
        <span className="mock-tag">Investor</span>
        <span className="mock-tag">Brazil</span>
      </div>
    </div>
  );
}

// 6. Daily Digest
function MockDailyDigest() {
  return (
    <div className="mock">
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Ico name="sunrise" size={16} color="var(--accent)" />
        <div style={{ font: "var(--font-serif)", fontStyle: "italic", fontSize: 14, color: "var(--fg-1)" }}>
          Good morning, sir. Today's agenda:
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[
          ["RD", "Rafa Dias", "Birthday today", "warn"],
          ["LM", "Luiza Marques", "Follow up · 14 days", "cyan"],
          ["BT", "Bruno Tavares", "Coffee at 4pm", "success"],
        ].map(([i, n, t, d]) => (
          <div key={n} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", background: "var(--bg-1)", borderRadius: 10, border: "1px solid var(--border)" }}>
            <div className={d === "warn" ? "dot-warn" : d === "success" ? "dot-success" : "dot-cyan"} />
            <div className="mock-avatar" style={{ width: 22, height: 22, fontSize: 9 }}>{i}</div>
            <div style={{ font: "500 12px/1.2 var(--font-sans)", color: "var(--fg-1)" }}>{n}</div>
            <div style={{ font: "400 11px/1 var(--font-sans)", color: "var(--fg-3)", marginLeft: "auto" }}>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 7. New Contact
function MockNewContact() {
  return (
    <div className="mock">
      <MockHeader avatar="YOU" title="Adding contact" sub="Capture" />
      <div className="mock-bubble-user">I met João at the conference, he runs a fintech startup</div>
      <div className="mock-bubble">
        Noted. I've created a contact for <span style={{ color: "var(--accent)" }}>João</span>. Shall I set a follow-up reminder?
      </div>
    </div>
  );
}

// 8. Interaction Log
function MockInteractionLog() {
  return (
    <div className="mock">
      <MockHeader avatar="TL" title="Tomás · Timeline" sub="last 30 days" />
      <div style={{ display: "flex", flexDirection: "column", gap: 6, position: "relative" }}>
        {[
          ["May 10", "Coffee · in-person", "success"],
          ["May 5", "Email follow-up", "cyan"],
          ["Apr 28", "Intro call", "cyan"],
        ].map(([date, what, d]) => (
          <div key={date} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 10px", background: "var(--bg-1)", borderRadius: 8, border: "1px solid var(--border)" }}>
            <div className={d === "success" ? "dot-success" : "dot-cyan"} />
            <div style={{ font: "500 11px/1 var(--font-mono)", color: "var(--fg-4)", width: 56 }}>{date}</div>
            <div style={{ font: "400 12px/1.2 var(--font-sans)", color: "var(--fg-1)" }}>{what}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 9. Birthday Reminder
function MockBirthdayReminder() {
  return (
    <div className="mock">
      <MockHeader avatar={<Ico name="gift" size={14} color="var(--on-accent)" />} title="Birthday · Thursday" sub="Ana Silva" dot="warn" />
      <div className="mock-bubble" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 13.5 }}>
        Might I remind you — Ana's birthday is Thursday. Shall I draft something appropriate?
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
        <span className="mock-pill primary">Draft message</span>
        <span className="mock-pill">Add to calendar</span>
      </div>
    </div>
  );
}

// 10. Privacy Shield
function MockPrivacy() {
  return (
    <div className="mock" style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0" }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: "rgba(0,212,255,0.10)",
          display: "flex", alignItems: "center", justifyContent: "center",
          border: "1px solid var(--border)",
        }}>
          <Ico name="shield-check" size={22} color="var(--accent)" />
        </div>
        <div style={{ font: "600 13px/1.2 var(--font-sans)", color: "var(--accent)", letterSpacing: 0.4 }}>PRIVACY · RLS · ZERO TRACKING</div>
      </div>
      <div style={{ font: "400 13px/1.55 var(--font-sans)", color: "var(--fg-2)", maxWidth: 340 }}>
        Your data is encrypted, isolated, and deletable at any time. No external sources. No data mining.
      </div>
      <div style={{ display: "flex", gap: 6, marginTop: "auto" }}>
        <span className="mock-tag">RLS</span>
        <span className="mock-tag">AES-256</span>
        <span className="mock-tag">Erasable</span>
      </div>
    </div>
  );
}

// 11. Quick Stats — with mini bar chart
function MockQuickStats() {
  const bars = [40, 65, 30, 80, 55, 70, 45];
  return (
    <div className="mock">
      <MockHeader avatar={<Ico name="activity" size={14} color="var(--on-accent)" />} title="This Week" sub="Stats" />
      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 60, padding: "4px 0" }}>
        {bars.map((h, i) => (
          <div key={i} style={{
            flex: 1, height: `${h}%`,
            background: i === 3 ? "var(--accent)" : "rgba(0,212,255,0.25)",
            borderRadius: 3,
          }} />
        ))}
      </div>
      <div style={{ display: "flex", gap: 16, font: "500 11px/1 var(--font-sans)", color: "var(--fg-2)", marginTop: "auto" }}>
        <span><span style={{ color: "var(--accent)", fontWeight: 700 }}>47</span> contacts</span>
        <span><span style={{ color: "var(--accent)", fontWeight: 700 }}>12</span> due</span>
        <span><span style={{ color: "var(--warning)", fontWeight: 700 }}>3</span> overdue</span>
        <span><span style={{ color: "var(--success)", fontWeight: 700 }}>98%</span></span>
      </div>
    </div>
  );
}

// 12. Alfred's Voice
function MockVoice() {
  return (
    <div className="mock" style={{ padding: "22px 26px", justifyContent: "center" }}>
      <div style={{
        borderLeft: "3px solid var(--accent)",
        paddingLeft: 16,
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontSize: 18,
        lineHeight: 1.45,
        color: "var(--fg-1)",
      }}>
        "You haven't spoken to Maria in 47 days. I'm certain she's noticed."
      </div>
      <div style={{ font: "500 10px/1 var(--font-sans)", color: "var(--fg-4)", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: "auto" }}>
        — Alfred
      </div>
    </div>
  );
}

const MOCKS = [
  MockMemoryRecall,
  MockSmartNudge,
  MockDraftMessage,
  MockSemanticSearch,
  MockContactCard,
  MockDailyDigest,
  MockNewContact,
  MockInteractionLog,
  MockBirthdayReminder,
  MockPrivacy,
  MockQuickStats,
  MockVoice,
];

window.MOCKS = MOCKS;
window.Ico = Ico;
