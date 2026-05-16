// copy.jsx — all bilingual copy
const COPY = {
  en: {
    nav: {
      about: "About",
      features: "Features",
      earlyAccess: "Early Access",
      cta: "Join Early Access",
    },
    hero: {
      eyebrow: "Alfred",
      h1Line1: "At your service.",
      h1Line2: "Always remembering.",
      subtitle:
        "Alfred is your AI relationship agent — he remembers every detail about the people who matter, so no one important ever slips away.",
      ctaPrimary: "Join Early Access",
      ctaSecondary: "See how it works",
      stat1Num: "100%",
      stat1Lbl: "Your data · your control",
      stat2Num: "24/7",
      stat2Lbl: "Always remembering",
      stat3Num: "0",
      stat3Lbl: "Relationships forgotten",
      scrollHint: "Scroll",
    },
    marquee: {
      eyebrow: "In Practice",
    },
    problem: {
      eyebrow: "The Problem",
      heading: "You know hundreds.",
      paragraph:
        "Life gets busy. Birthdays pass unnoticed. Old friends become strangers. Not because you stopped caring — because no human brain can track 500 relationships. The people who matter most deserve better than 'sorry, I've been meaning to reach out.'",
      cta: "Join Early Access",
    },
    meet: {
      eyebrow: "Meet Alfred",
      heading: "That's where I come in.",
      quote:
        "I'm Alfred — your AI relationship agent. Think of me as the assistant you'd hire if you could afford someone with a perfect memory, impeccable timing, and just the right words. I remember everything you tell me about everyone. And I'll make sure you never lose touch with the people who matter.",
      featured: {
        title: "Perfect Memory",
        desc: "I never forget a birthday, a preference, or a promise.",
      },
      small1: {
        title: "Timely Nudges",
        desc: "I'll tap your shoulder before someone slips away.",
      },
      small2: {
        title: "Your Words, Not Mine",
        desc: "I draft. You send. Always.",
      },
    },
    features: {
      eyebrow: "What Alfred does",
      heading: "Capabilities",
      items: [
        {
          name: "Persistent Memory",
          desc: "Every detail about every contact — name, company, role, personal notes, conversation history — stored with precision and always at your fingertips.",
        },
        {
          name: "Smart Nudges",
          desc: "Daily reminders when someone's contact cadence is overdue. Each nudge includes context and a pre-drafted message. Never miss a follow-up again.",
        },
        {
          name: "Message Drafting",
          desc: "Context-aware messages drafted from your real interaction history. Not templates — genuine, personalized outreach that sounds like you.",
        },
        {
          name: "Semantic Search",
          desc: "Ask 'who works in marketing?' or 'who did I meet at the conference?' — Alfred searches by meaning, not just names or tags.",
        },
        {
          name: "Privacy by Design",
          desc: "Row-Level Security from day one. Your data is physically isolated, never shared, never mined, deletable at any time. Your contacts are sacred.",
        },
        {
          name: "Telegram-First",
          desc: "No app to download, no new interface to learn. Alfred lives where you already are — a conversation in Telegram, available on every device.",
        },
      ],
    },
    useCases: {
      eyebrow: "Who it's for",
      heading: "Use cases",
      cards: [
        {
          persona: "Founders & CEOs",
          number: "01",
          pain:
            "You maintain 200 relationships. How many are you neglecting right now? Alfred knows — and warns you before it's too late.",
          mockTitle: "Investor pipeline",
          mockMsg:
            "Good evening, sir. Three investors haven't heard from you in over a month. Shall I draft something for Paulo first?",
          cta: "Learn More",
        },
        {
          persona: "Salespeople",
          number: "02",
          pain:
            "Follow-up at the right time with the right message. Alfred remembers the context so you don't have to open the CRM.",
          mockTitle: "Carlos · Acme Corp",
          mockMsg:
            "Carlos mentioned his team is evaluating solutions next quarter. Based on your last call, I'd suggest reaching out next week with the case study.",
          cta: "Learn More",
        },
        {
          persona: "Recruiters",
          number: "03",
          pain:
            "Every candidate is unique. Alfred stores preferences, history, availability — so you seem like you remember everything.",
          mockTitle: "Ana Silva · Senior Eng",
          mockMsg:
            "Ana updated her LinkedIn — she's now open to new opportunities. You last spoke 45 days ago about senior React roles. Shall I draft an outreach?",
          cta: "Learn More",
        },
      ],
    },
    early: {
      eyebrow: "Early Access",
      heading: "May I take your name?",
      subtitle:
        "Alfred is currently in private early access. Leave your details and I'll be in touch.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      submit: "Request Access",
      success: "A pleasure, sir. I shall be in touch shortly.",
      fine: "Currently available via Telegram. More platforms coming soon.",
      trust: [
        { label: "Your data stays yours" },
        { label: "Encrypted & isolated" },
        { label: "Delete anytime" },
      ],
    },
    footer: {
      tagline: "© 2026 Alfred. At your service.",
      links: ["Privacy", "Terms", "Contact"],
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      features: "Recursos",
      earlyAccess: "Acesso Antecipado",
      cta: "Acesso Antecipado",
    },
    hero: {
      eyebrow: "Alfred",
      h1Line1: "Ao seu dispor.",
      h1Line2: "Sempre lembrando.",
      subtitle:
        "Alfred é seu agente de relacionamento com IA — ele lembra cada detalhe sobre as pessoas que importam, para que ninguém importante escape.",
      ctaPrimary: "Acesso Antecipado",
      ctaSecondary: "Veja como funciona",
      stat1Num: "100%",
      stat1Lbl: "Seus dados · seu controle",
      stat2Num: "24/7",
      stat2Lbl: "Sempre lembrando",
      stat3Num: "0",
      stat3Lbl: "Relacionamentos esquecidos",
      scrollHint: "Role",
    },
    marquee: {
      eyebrow: "Na prática",
    },
    problem: {
      eyebrow: "O Problema",
      heading: "Você conhece centenas.",
      paragraph:
        "A vida fica corrida. Aniversários passam despercebidos. Velhos amigos viram estranhos. Não porque você deixou de se importar — porque nenhum cérebro humano consegue acompanhar 500 relacionamentos. As pessoas que mais importam merecem mais do que 'desculpa, eu ia te mandar mensagem.'",
      cta: "Acesso Antecipado",
    },
    meet: {
      eyebrow: "Conheça o Alfred",
      heading: "É aí que eu entro.",
      quote:
        "Sou o Alfred — seu agente de relacionamento com IA. Pense em mim como o assistente que você contrataria se pudesse pagar alguém com memória perfeita, timing impecável e sempre as palavras certas. Eu lembro de tudo que você me conta sobre cada pessoa. E vou garantir que você nunca perca contato com quem importa.",
      featured: {
        title: "Memória Perfeita",
        desc: "Nunca esqueço um aniversário, uma preferência ou uma promessa.",
      },
      small1: {
        title: "Lembretes no Tempo Certo",
        desc: "Vou te cutucar antes que alguém escape.",
      },
      small2: {
        title: "Suas Palavras, Não as Minhas",
        desc: "Eu rascunho. Você envia. Sempre.",
      },
    },
    features: {
      eyebrow: "O que o Alfred faz",
      heading: "Capacidades",
      items: [
        {
          name: "Memória Persistente",
          desc: "Cada detalhe sobre cada contato — nome, empresa, cargo, notas pessoais, histórico de conversas — guardado com precisão e sempre ao seu alcance.",
        },
        {
          name: "Nudges Inteligentes",
          desc: "Lembretes diários quando a cadência de contato está vencida. Cada nudge inclui contexto e uma mensagem pré-rascunhada. Nunca mais perca um follow-up.",
        },
        {
          name: "Rascunho de Mensagens",
          desc: "Mensagens com contexto real das suas interações. Não são templates — são mensagens genuínas e personalizadas que parecem escritas por você.",
        },
        {
          name: "Busca Semântica",
          desc: "Pergunte 'quem trabalha com marketing?' ou 'quem conheci na conferência?' — Alfred busca por significado, não apenas por nomes ou tags.",
        },
        {
          name: "Privacidade por Design",
          desc: "Row-Level Security desde o dia um. Seus dados são fisicamente isolados, nunca compartilhados, nunca minerados, deletáveis a qualquer momento.",
        },
        {
          name: "Telegram-First",
          desc: "Sem app pra baixar, sem interface nova pra aprender. Alfred mora onde você já está — uma conversa no Telegram, disponível em qualquer dispositivo.",
        },
      ],
    },
    useCases: {
      eyebrow: "Para quem é",
      heading: "Casos de uso",
      cards: [
        {
          persona: "Fundadores & CEOs",
          number: "01",
          pain:
            "Você mantém 200 relacionamentos. Quantos está negligenciando agora? Alfred sabe — e avisa antes que seja tarde.",
          mockTitle: "Pipeline de investidores",
          mockMsg:
            "Boa noite, senhor. Três investidores não têm notícias suas há mais de um mês. Posso rascunhar algo para o Paulo primeiro?",
          cta: "Saiba Mais",
        },
        {
          persona: "Vendedores",
          number: "02",
          pain:
            "Follow-up no timing certo com a mensagem certa. Alfred lembra do contexto pra você não precisar abrir o CRM.",
          mockTitle: "Carlos · Acme Corp",
          mockMsg:
            "Carlos comentou que o time vai avaliar soluções no próximo trimestre. Com base na última call, sugiro retomar semana que vem com o case study.",
          cta: "Saiba Mais",
        },
        {
          persona: "Recrutadores",
          number: "03",
          pain:
            "Cada candidato é único. Alfred guarda preferências, histórico e disponibilidade — pra você parecer que lembra de tudo.",
          mockTitle: "Ana Silva · Senior Eng",
          mockMsg:
            "Ana atualizou o LinkedIn — agora está aberta a novas oportunidades. Vocês conversaram há 45 dias sobre vagas senior de React. Posso rascunhar uma abordagem?",
          cta: "Saiba Mais",
        },
      ],
    },
    early: {
      eyebrow: "Acesso Antecipado",
      heading: "Posso anotar seu nome?",
      subtitle:
        "Alfred está em acesso antecipado privado. Deixe seus dados e entrarei em contato.",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "Seu email",
      submit: "Solicitar Acesso",
      success: "Um prazer. Entrarei em contato em breve.",
      fine: "Atualmente disponível no Telegram. Mais plataformas em breve.",
      trust: [
        { label: "Seus dados são seus" },
        { label: "Criptografado e isolado" },
        { label: "Delete quando quiser" },
      ],
    },
    footer: {
      tagline: "© 2026 Alfred. Ao seu dispor.",
      links: ["Privacidade", "Termos", "Contato"],
    },
  },
};

window.COPY = COPY;
