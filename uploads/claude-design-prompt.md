Build a landing page for "Alfred — Your AI Relationship Agent" using React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

IMPORTANT: Use the Alfred design system project already loaded in this conversation for ALL visual styling — colors, typography, spacing, component specs, shadows, glows, and assets. Do not invent new colors or fonts. Every visual decision should come from the existing design system tokens and patterns.

The page is bilingual (English default, Portuguese PT-BR toggle). The page title is "Alfred — Your AI Relationship Agent". The goal is to capture waitlist signups (name + email) for private early access.

Alfred is a Telegram bot powered by Claude AI that remembers everything about your contacts, nudges you when it's time to reach out, and drafts personalized messages. The brand personality is "The Butler Protocol" — inspired by Batman's Alfred Pennyworth. Smart, loyal, slightly theatrical, always composed. First person, dry wit, formal but warm. Never pushy, never emoji, never exclamation marks.

DESIGN QUALITY BAR: This must NOT look AI-generated. Avoid identical card grids (same size, same icon+heading+text repeated). Vary spacing for rhythm. Use asymmetric layouts where possible. No glassmorphism decorations. No gradient text. The design should feel intentionally crafted, like a boutique agency built it, not a template.

Main wrapper has overflowX: 'clip'. Use the design system's --bg-0 as page background.

---

SECTION ORDER

1. HeroSection
2. MarqueeSection
3. ProblemSection
4. MeetAlfredSection
5. FeaturesSection
6. UseCasesSection
7. EarlyAccessSection
8. FooterSection

---

1. HERO SECTION

Full viewport height (h-screen), flex column layout with overflowX: clip. Background: --bg-0.

Navbar: Use the design system's Nav component pattern — sticky, blurred translucent background, 72px height. Left: logo mark + "Alfred" wordmark. Right: navigation links ("About", "Features", "Early Access"), a primary CTA pill button "Join Early Access", and an EN/PT language toggle. The toggle shows two labels separated by /, active one bright, inactive one dim.

Hero layout: Two-column split — text content on the LEFT, Alfred avatar on the RIGHT. On mobile, avatar centers above text.

Eyebrow: Use the design system's eyebrow label pattern (cyan dot + "ALFRED" + gradient line) above the headline.

Hero Heading: Massive h1 in cyan accent color. Extra-bold, uppercase, tracking-tight, leading-none, whitespace-nowrap. Font sizes: text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]. Margin top: mt-6 sm:mt-4 md:-mt-5. Wrapped in overflow-hidden container.
- EN: "At your service.\nAlways remembering." (two lines)
- PT: "Ao seu dispor.\nSempre lembrando."

Subtitle: Secondary text color, regular weight, leading-relaxed, font size clamp(0.85rem, 1.5vw, 1.25rem), max-w-[480px].
- EN: "Alfred is your AI relationship agent — he remembers every detail about the people who matter, so no one important ever slips away."
- PT: "Alfred é seu agente de relacionamento com IA — ele lembra cada detalhe sobre as pessoas que importam, para que ninguém importante escape."

CTA row (flex row, gap-4):
- Primary: "Join Early Access" / "Acesso Antecipado" — primary CTA pill button from design system
- Secondary: "See how it works →" / "Veja como funciona →" — secondary outlined pill button from design system

Stats row: Use the design system's stat row pattern (large cyan numbers, uppercase labels, vertical separators).
- "100%" — "Your data · your control" / "Seus dados · seu controle"
- "24/7" — "Always remembering" / "Sempre lembrando"
- "0" — "Relationships forgotten" / "Relacionamentos esquecidos"

Hero Portrait: Alfred avatar on the right side, absolutely positioned. Wrapped in a Magnet component (mouse-following magnetic hover effect — see INTERACTION COMPONENTS below). Place the design system's hero glow (--glow-hero) behind the avatar. Magnet settings: padding 150, strength 3, activeTransition "transform 0.3s ease-out", inactiveTransition "transform 0.6s ease-in-out". Width: w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]. On mobile: centered, top-1/2 -translate-y-1/2, reduced opacity (0.3) behind text. On sm+: bottom-aligned, full opacity.

FadeIn stagger: Navbar delay 0 y -20. Eyebrow+Heading delay 0.15 y 40. Subtitle delay 0.25 y 20. CTAs delay 0.35 y 20. Stats delay 0.45 y 20. Portrait delay 0.6 y 30.

---

2. MARQUEE SECTION

Two rows of styled mockup cards that scroll horizontally based on page scroll position. Background: --bg-0. Padding: pt-24 sm:pt-32 md:pt-40 pb-10.

Create 12 styled "product preview" cards that look like dark-themed Telegram chat windows or app UI mockups. Each card is a mini illustration of Alfred in action, built entirely with CSS/HTML (not external images). Style them using the design system's card/surface tokens.

The 12 mockup cards (each 420px x 270px):

1. "Memory Recall" — Chat bubble from Alfred: "Maria works at Acme Corp. You last spoke 23 days ago about her son's graduation." Small contact avatar circle + name at top.
2. "Smart Nudge" — Notification-style: bell icon + "Time to reach out to Carlos — it's been 31 days. His preferred cadence is monthly." With "Copy Draft" and "Snooze" buttons.
3. "Draft Message" — Chat UI showing Alfred's draft: "Hey Carlos, how's the new office setup going? Last time we talked you mentioned the move was stressful." With "Edit" and "Send" action buttons.
4. "Semantic Search" — Search bar with query "who works in marketing?" showing 3 results: "Ana Silva — CMO at TechBR", "Pedro Santos — Marketing Lead at StartupX", "Lucia Ferreira — Brand Director at MediaCo".
5. "Contact Card" — Rich profile: Name, company, title, relationship "Mentor", cadence "Every 2 weeks", last contact "May 3", tags: "AI", "Investor".
6. "Daily Digest" — "Good morning, sir. Today's agenda:" with 3 mini contact rows with status dots.
7. "New Contact" — User: "I met João at the conference, he runs a fintech startup" → Alfred: "Noted. I've created a contact for João. Shall I set a follow-up reminder?"
8. "Interaction Log" — Timeline: "May 10 — Coffee (in-person)" → "May 5 — Email follow-up" → "Apr 28 — Intro call" with sentiment indicators.
9. "Follow-up Reminder" — "Might I remind you — Ana's birthday is Thursday. Shall I draft something appropriate?"
10. "Privacy Shield" — Lock icon + "Your data is encrypted, isolated, and deletable at any time. No external sources. No data mining."
11. "Quick Stats" — "47 contacts • 12 due this week • 3 overdue • 98% response rate" with small bar chart.
12. "Alfred's Voice" — Playfair italic quote: "You haven't spoken to Maria in 47 days. I'm certain she's noticed." Cyan left border accent.

Row 1: first 6 cards, tripled for seamless looping. Moves RIGHT on scroll: translateX(offset - 200).
Row 2: remaining 6 cards, tripled. Moves LEFT on scroll: translateX(-(offset - 200)).
Scroll offset: (window.scrollY - sectionTop + window.innerHeight) * 0.3.
Each tile: 420px x 270px, rounded-2xl, surface background, border, overflow hidden.
Gap: gap-3 between tiles and rows. Uses willChange: 'transform'. Passive scroll listener.

---

3. PROBLEM SECTION

Full-height centered section, min-h-screen, padding px-5 sm:px-8 md:px-10 py-20. Background: --bg-1.

Clean, focused — no decorative images. Optional: very faint grid pattern at 3% opacity for tech feel.

Eyebrow: "THE PROBLEM" / "O PROBLEMA"

Heading: Cyan accent, extra-bold, uppercase, centered, clamp(3rem, 12vw, 160px). FadeIn delay 0, y 40.
- EN: "You know hundreds."
- PT: "Você conhece centenas."

Animated paragraph: Character-by-character scroll-driven opacity animation (see AnimatedText in INTERACTION COMPONENTS). Each character: opacity 0.15 → 1 based on scroll progress, offset ['start 0.8', 'end 0.2']. Medium weight, centered, leading-relaxed, max-w-[620px], clamp(1rem, 2.2vw, 1.4rem).
- EN: "Life gets busy. Birthdays pass unnoticed. Old friends become strangers. Not because you stopped caring — because no human brain can track 500 relationships. The people who matter most deserve better than 'sorry, I've been meaning to reach out.'"
- PT: "A vida fica corrida. Aniversários passam despercebidos. Velhos amigos viram estranhos. Não porque você deixou de se importar — porque nenhum cérebro humano consegue acompanhar 500 relacionamentos. As pessoas que mais importam merecem mais do que 'desculpa, eu ia te mandar mensagem.'"

Primary CTA button below: "Join Early Access" / "Acesso Antecipado". Gaps: heading→text gap-10 sm:gap-14 md:gap-16. Text→button gap-16 sm:gap-20 md:gap-24.

---

4. MEET ALFRED SECTION

Background: --bg-0. Padding: px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32.

Eyebrow: "MEET ALFRED" / "CONHEÇA O ALFRED"

Heading: Cyan, extra-bold, uppercase, centered.
- EN: "That's where I come in."
- PT: "É aí que eu entro."

Two-column on desktop. Left: smaller Alfred portrait (w-[200px] md:w-[280px]) with subtle cyan glow, circular. Right: quote + feature cards.

Alfred's quote in Playfair Display Italic (the voice font from the design system). Wrapped in blockquote with 3px cyan left border at 40% opacity.
- EN: "I'm Alfred — your AI relationship agent. Think of me as the assistant you'd hire if you could afford someone with a perfect memory, impeccable timing, and just the right words. I remember everything you tell me about everyone. And I'll make sure you never lose touch with the people who matter."
- PT: "Sou o Alfred — seu agente de relacionamento com IA. Pense em mim como o assistente que você contrataria se pudesse pagar alguém com memória perfeita, timing impecável e sempre as palavras certas. Eu lembro de tudo que você me conta sobre cada pessoa. E vou garantir que você nunca perca contato com quem importa."

Three feature blocks below the quote. NOT identical card grids — vary the presentation to avoid generic "AI-made" patterns. Use an asymmetric layout: one large featured block on the left (takes 50% width) and two smaller stacked blocks on the right (each 50% height of the featured one). Each block uses the design system's surface/border tokens but at different scales. Featured block gets a larger Lucide icon (32px) and bigger type. Smaller blocks get 20px icons and tighter padding.

Featured block — Icon "brain" (32px, cyan):
- EN: "Perfect Memory" / "I never forget a birthday, a preference, or a promise."
- PT: "Memória Perfeita" / "Nunca esqueço um aniversário, uma preferência ou uma promessa."

Smaller block 1 — Icon "bell-ring" (20px, cyan):
- EN: "Timely Nudges" / "I'll tap your shoulder before someone slips away."
- PT: "Lembretes no Tempo Certo" / "Vou te cutucar antes que alguém escape."

Smaller block 2 — Icon "send" (20px, cyan):
- EN: "Your Words, Not Mine" / "I draft. You send. Always."
- PT: "Suas Palavras, Não as Minhas" / "Eu rascunho. Você envia. Sempre."

On mobile, all three stack vertically at equal size.

Staggered FadeIn: portrait 0.1, quote 0.2, cards +0.1 each.

---

5. FEATURES SECTION

Background: --bg-1, with rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] top corners. Padding: px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32.

Eyebrow: "WHAT ALFRED DOES" / "O QUE O ALFRED FAZ"

Heading: Cyan, extra-bold, uppercase, centered, clamp(3rem, 12vw, 160px). Margin bottom: mb-16 sm:mb-20 md:mb-28.
- EN: "Capabilities"
- PT: "Capacidades"

6 feature items, vertical list, max-w-5xl, centered. Each item: horizontal layout with huge cyan number on the left, name + description on the right. Separated by 1px borders at low cyan opacity. Padding: py-8 sm:py-10 md:py-12.

Number: Extra-bold, clamp(3rem, 10vw, 140px), cyan.
Name: Semibold, uppercase, clamp(1rem, 2.2vw, 2.1rem), primary text.
Description: Regular weight, leading-relaxed, max-w-2xl, clamp(0.85rem, 1.6vw, 1.25rem), secondary text.

EN:
01 - Persistent Memory: "Every detail about every contact — name, company, role, personal notes, conversation history — stored with precision and always at your fingertips."
02 - Smart Nudges: "Daily reminders when someone's contact cadence is overdue. Each nudge includes context and a pre-drafted message. Never miss a follow-up again."
03 - Message Drafting: "Context-aware messages drafted from your real interaction history. Not templates — genuine, personalized outreach that sounds like you."
04 - Semantic Search: "Ask 'who works in marketing?' or 'who did I meet at the conference?' — Alfred searches by meaning, not just names or tags."
05 - Privacy by Design: "Row-Level Security from day one. Your data is physically isolated, never shared, never mined, deletable at any time. Your contacts are sacred."
06 - Telegram-First: "No app to download, no new interface to learn. Alfred lives where you already are — a conversation in Telegram, available on every device."

PT:
01 - Memória Persistente: "Cada detalhe sobre cada contato — nome, empresa, cargo, notas pessoais, histórico de conversas — guardado com precisão e sempre ao seu alcance."
02 - Nudges Inteligentes: "Lembretes diários quando a cadência de contato está vencida. Cada nudge inclui contexto e uma mensagem pré-rascunhada. Nunca mais perca um follow-up."
03 - Rascunho de Mensagens: "Mensagens com contexto real das suas interações. Não são templates — são mensagens genuínas e personalizadas que parecem escritas por você."
04 - Busca Semântica: "Pergunte 'quem trabalha com marketing?' ou 'quem conheci na conferência?' — Alfred busca por significado, não apenas por nomes ou tags."
05 - Privacidade por Design: "Row-Level Security desde o dia um. Seus dados são fisicamente isolados, nunca compartilhados, nunca minerados, deletáveis a qualquer momento."
06 - Telegram-First: "Sem app pra baixar, sem interface nova pra aprender. Alfred mora onde você já está — uma conversa no Telegram, disponível em qualquer dispositivo."

Staggered FadeIn: each item delays by i * 0.08.

---

6. USE CASES SECTION

Background: --bg-0, rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px], pulled up -mt-10 sm:-mt-12 md:-mt-14, z-10.

Eyebrow: "WHO IT'S FOR" / "PARA QUEM É"

Heading: Cyan, extra-bold, uppercase, centered, clamp(3rem, 12vw, 160px).
- EN: "Use cases"
- PT: "Casos de uso"

3 sticky-stacking cards (card stacking effect using Framer Motion useScroll and useTransform). Each card is sticky top-24 md:top-32 inside an h-[85vh] container.

Scale: targetScale = 1 - (totalCards - 1 - index) * 0.03. Offset: top: ${index * 28}px.

Each card: rounded-[40px] sm:rounded-[50px] md:rounded-[60px], border 2px solid (border token), --bg-1 background, padding p-6 sm:p-8 md:p-10.

Card layout:
- Top: Huge cyan number + persona label (uppercase, tracking-widest, secondary text) + persona title (bold, primary text) + "Learn More →" outlined pill button.
- Bottom: Two columns. Left (40%): pain point in Playfair Italic. Right (60%): styled Telegram mockup card showing Alfred helping this persona (surface bg, border, large border-radius).

Card 1 — Founders & CEOs:
- EN: Pain: "You maintain 200 relationships. How many are you neglecting right now? Alfred knows — and warns you before it's too late." — Mockup: Alfred says "Good evening, sir. Three investors haven't heard from you in over a month. Shall I draft something for Paulo first?"
- PT: Pain: "Você mantém 200 relacionamentos. Quantos está negligenciando agora? Alfred sabe — e avisa antes que seja tarde."

Card 2 — Salespeople / Vendedores:
- EN: Pain: "Follow-up at the right time with the right message. Alfred remembers the context so you don't have to open the CRM." — Mockup: Alfred says "Carlos mentioned his team is evaluating solutions next quarter. Based on your last call, I'd suggest reaching out next week with the case study."
- PT: Pain: "Follow-up no timing certo com a mensagem certa. Alfred lembra do contexto pra você não precisar abrir o CRM."

Card 3 — Recruiters / Recrutadores:
- EN: Pain: "Every candidate is unique. Alfred stores preferences, history, availability — so you seem like you remember everything." — Mockup: Alfred says "Ana updated her LinkedIn — she's now open to new opportunities. You last spoke 45 days ago about senior React roles. Shall I draft an outreach?"
- PT: Pain: "Cada candidato é único. Alfred guarda preferências, histórico e disponibilidade — pra você parecer que lembra de tudo."

---

7. EARLY ACCESS SECTION

Background: --bg-2. Padding: px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40. id="join".

Centered, max-w-[560px], text-center.

Eyebrow: "EARLY ACCESS" / "ACESSO ANTECIPADO"

Heading: Cyan, extra-bold, clamp(2rem, 6vw, 56px).
- EN: "May I take your name?"
- PT: "Posso anotar seu nome?"

Subtitle: Regular weight, secondary text, leading-relaxed, clamp(0.9rem, 1.6vw, 1.15rem).
- EN: "Alfred is currently in private early access. Leave your details and I'll be in touch."
- PT: "Alfred está em acesso antecipado privado. Deixe seus dados e entrarei em contato."

Form (flex column, gap-3, max-w-[420px], mx-auto):
- Name input: Use design system's form input pattern. Placeholder: "Your name" / "Seu nome".
- Email input: Same. Placeholder: "Your email" / "Seu email".
- Submit: Full-width primary CTA pill button. "Request Access" / "Solicitar Acesso".

Success state: Replace form with Playfair Italic confirmation + check-circle icon in cyan. Subtle cyan-tinted background with cyan border, rounded.
- EN: "A pleasure, sir. I shall be in touch shortly."
- PT: "Um prazer. Entrarei em contato em breve."

Fine print: Small, dim text.
- EN: "Currently available via Telegram. More platforms coming soon."
- PT: "Atualmente disponível no Telegram. Mais plataformas em breve."

Trust signals (flex row, gap-8, centered, mt-8). Three items with Lucide icons + small text:
- Shield icon + "Your data stays yours" / "Seus dados são seus"
- Lock icon + "Encrypted & isolated" / "Criptografado e isolado"
- Trash-2 icon + "Delete anytime" / "Delete quando quiser"

---

8. FOOTER SECTION

Slightly darker background than main. Minimal. Thin top border with subtle cyan. Use the design system's footer pattern: logo lockup left, links center, GitHub icon right, copyright below.

- EN: "© 2026 Alfred. At your service."
- PT: "© 2026 Alfred. Ao seu dispor."

---

INTERACTION COMPONENTS (new — not in the design system)

These components add the "wow factor" interactions. They are NOT part of the existing design system and must be built from scratch:

FadeIn: Framer Motion wrapper. whileInView with viewport={{ once: true, margin: "50px", amount: 0 }}. Props: delay, duration (default 0.7), x (default 0), y (default 30). Easing: [0.25, 0.1, 0.25, 1]. Uses motion.create() for dynamic element types. Initial: { opacity: 0, x, y }. Animate: { opacity: 1, x: 0, y: 0 }.

Magnet: Mouse-following magnetic hover effect. Tracks mouse position relative to element center. Applies translate3d(dx/strength, dy/strength, 0). Activates when cursor is within `padding` px of element edge. Transitions: in 0.3s ease-out, out 0.6s ease-in-out. willChange: 'transform'. Props: padding (default 150), strength (default 3).

AnimatedText: Character-by-character scroll-reveal. Each character transitions from opacity 0.15 to 1 based on its position in the text relative to scroll progress. Uses Framer Motion useScroll targeting the paragraph ref with offset ['start 0.8', 'end 0.2']. Implementation: render each character as a span with invisible placeholder (visibility: hidden) + absolute-positioned animated span. useTransform maps each character's range to opacity [0.15, 1].

MarqueeScroll: Two rows of cards with scroll-driven horizontal translation. Row 1 moves RIGHT, Row 2 moves LEFT. Offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3. Cards tripled for seamless loop. Passive scroll listener. willChange: 'transform' for GPU acceleration.

StickyStackCards: Cards that stack and scale as you scroll. Each card is sticky (position: sticky) inside a tall container (h-[85vh]). Uses Framer Motion useScroll per card container. Scale transforms from 1 to targetScale = 1 - (totalCards - 1 - index) * 0.03. Each card offset by top: ${index * 28}px. Smooth scale transition.

TelegramMockup: Styled component simulating a Telegram chat window. Uses design system surface/border tokens. Contains: top bar (avatar circle + name in cyan + status dot), message bubbles (user right-aligned on raised surface, Alfred left-aligned with subtle cyan left border), optional action buttons at bottom. All Inter font. Timestamps in dim text, 11px.

LangToggle: "EN / PT" toggle in navbar. Active label: bright primary text. Inactive: dim placeholder text. Switches global `lang` state ('en'|'pt'). All page copy reads from COPY[lang] dictionary. Default: 'en'. Portuguese maintains same butler register — formal "você", same dry wit.

---

ANIMATION TIMING (from the design system)

Use the design system's motion tokens:
- Ease out: cubic-bezier(0.22, 1, 0.36, 1) — appearing elements
- Ease in-out: cubic-bezier(0.65, 0, 0.35, 1) — state changes
- Fast: 120ms — hover color shifts
- Base: 200ms — default transitions
- Slow: 600ms — scroll fade-ups

Extra rules for this page:
- No bounces, no springs. Smooth, restrained, elegant.
- Cyan glow pulse on hero avatar: 4-second loop, opacity 0.20↔0.35. Subtle.
- Marquee: smooth scroll-driven, no jerky movement.
- Sticky cards: smooth scale on scroll threshold.
- Char animation: smooth per-character opacity, no flicker.

---

RESPONSIVE BEHAVIOR

Mobile-first with Tailwind breakpoints (sm: 640px, md: 768px, lg: 1024px). Fluid typography via clamp().

- Desktop (1200px+): Full two-column hero. Cards side by side. 80px+ section spacing.
- Tablet (768-1199px): Cards 2-column. Smaller avatar. Proportional spacing.
- Mobile (<768px): Single column. Avatar behind text at low opacity. Stacked cards. Hamburger nav (lang toggle stays visible). Full-width CTAs. 44px minimum tap targets.

---

KEY DEPENDENCIES

react, react-dom (^18.3.1)
framer-motion (^12.38.0)
lucide-react (^0.460.0)
tailwindcss (^3.4.1)
vite, typescript
