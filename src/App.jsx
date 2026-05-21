import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Início", "Serviços", "Galeria", "Sobre", "Contato"];

const SERVICES = [
  { name: "Molde f1", desc: "Acabamento impecável com durabilidade ate 15 dias,manutenção 50$.", price: "R$ 70", icon: "✦", duration: "60 min" },
  { name: "Esmaltação em gel", desc: "manutenção 45$.", price: "R$ 50", icon: "◇", duration: "90 min" },
  { name: "Pedicure", desc: "inventar algo praca", price: "R$25", icon: "◈", duration: "120 min" },
  { name: "Esmaltação tradicional", desc: "Cores vibrantes e acabamento preciso que dura dias.", price: "R$ 30", icon: "○", duration: "45 min" },
];

const TESTIMONIALS = [
  { name: "Isabela Martins", text: "Simplesmente perfeita! Cada detalhe foi tratado com tanto cuidado. Minhas unhas nunca ficaram tão lindas. Voltarei sempre.", stars: 5, role: "Cliente há 2 anos" },
  { name: "Gabriela Souza", text: "O nail art ficou exatamente como eu queria. Profissionalismo e delicadeza em cada detalhe. Super recomendo!", stars: 5, role: "Cliente há 1 ano" },
  { name: "Camila Ferreira", text: "Atendimento acolhedor e resultado incrível. O ambiente é lindo e relaxante. Me sinto especial a cada visita.", stars: 5, role: "Cliente há 3 anos" },
  { name: "Larissa Costa", text: "Gel que durou mais de 3 semanas sem lascar! Técnica impecável, ambiente elegante. Recomendo de olhos fechados.", stars: 5, role: "Cliente há 6 meses" },
];

const GALLERY_ITEMS = [
  { id: 1, color: "#f4c2cc", label: "Nude Rosé", size: "tall", img: "/imagens/unha.png" },
  { id: 2, color: "#e8d5c4", label: "Champagne", size: "normal", img: "/imagens/unha1.png" },
  { id: 3, color: "#c9a9b4", label: "Mauve Dreams", size: "normal", img: "/imagens/unha2.png" },
  { id: 4, color: "#f7e8e8", label: "Blush Bridal", size: "tall", img: "/imagens/unha3.png" },
  { id: 5, color: "#d4b8c7", label: "Rose Quartz", size: "normal", img: "/imagens/unha.png" },
  { id: 6, color: "#e6cec8", label: "Terracotta Soft", size: "normal", img: "/imagens/unha1.png" },
  { id: 7, color: "#f0dbd8", label: "Petal Pink", size: "tall", img: "/imagens/unha2.png" },
  { id: 8, color: "#c8b4bc", label: "Dusty Lilac", size: "normal", img: "/imagens/unha3.png" },
  { id: 9, color: "#edddd4", label: "Warm Nude", size: "normal", img: "/imagens/unha.png" },
];

const INSTAGRAM_ITEMS = [
  { id: 1, color: "#f4c2cc", likes: "2.3k" },
  { id: 2, color: "#e8d5c4", likes: "1.8k" },
  { id: 3, color: "#c9a9b4", likes: "3.1k" },
  { id: 4, color: "#f7e8e8", likes: "2.7k" },
  { id: 5, color: "#d4b8c7", likes: "1.5k" },
  { id: 6, color: "#e6cec8", likes: "2.9k" },
];

function NailIllustration({ color = "#f4c2cc", style = {} }) {
  return (
    <svg viewBox="0 0 80 120" style={{ width: "100%", height: "100%", ...style }}>
      <defs>
        <linearGradient id={`ng-${color.replace("#","")}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="10" y="20" width="60" height="80" rx="30" fill={`url(#ng-${color.replace("#","")})`} />
      <rect x="10" y="20" width="60" height="30" rx="30" fill={color} opacity="0.5" />
      <ellipse cx="40" cy="32" rx="20" ry="8" fill="white" opacity="0.25" />
      <rect x="15" y="95" width="50" height="12" rx="6" fill="#3a2030" opacity="0.12" />
    </svg>
  );
}

function HandIllustration() {
  return (
    <svg viewBox="0 0 340 420" style={{ width: "100%", height: "100%", maxWidth: 340 }}>
      <defs>
        <linearGradient id="skinGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f2d4c2" />
          <stop offset="100%" stopColor="#e8c4aa" />
        </linearGradient>
        <linearGradient id="nailGrad" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#f4c2cc" />
          <stop offset="100%" stopColor="#d4899a" />
        </linearGradient>
        <linearGradient id="shineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <filter id="softBlur"><feGaussianBlur stdDeviation="1.5"/></filter>
      </defs>
      {/* Palm */}
      <ellipse cx="170" cy="310" rx="90" ry="80" fill="url(#skinGrad)" />
      {/* Thumb */}
      <ellipse cx="75" cy="260" rx="22" ry="50" fill="url(#skinGrad)" transform="rotate(-25 75 260)" />
      <ellipse cx="65" cy="228" rx="13" ry="9" fill="url(#nailGrad)" transform="rotate(-25 65 228)" />
      <ellipse cx="63" cy="224" rx="7" ry="4" fill="url(#shineGrad)" transform="rotate(-25 63 224)" />
      {/* Index */}
      <rect x="128" y="120" width="38" height="130" rx="19" fill="url(#skinGrad)" />
      <ellipse cx="147" cy="130" rx="16" ry="22" fill="url(#nailGrad)" />
      <ellipse cx="147" cy="122" rx="8" ry="8" fill="url(#shineGrad)" />
      {/* Middle */}
      <rect x="170" y="100" width="40" height="145" rx="20" fill="url(#skinGrad)" />
      <ellipse cx="190" cy="110" rx="17" ry="24" fill="url(#nailGrad)" />
      <ellipse cx="190" cy="101" rx="9" ry="9" fill="url(#shineGrad)" />
      {/* Ring */}
      <rect x="213" y="112" width="38" height="138" rx="19" fill="url(#skinGrad)" />
      <ellipse cx="232" cy="122" rx="16" ry="22" fill="url(#nailGrad)" />
      <ellipse cx="232" cy="113" rx="8" ry="8" fill="url(#shineGrad)" />
      {/* Pinky */}
      <rect x="253" y="145" width="32" height="110" rx="16" fill="url(#skinGrad)" />
      <ellipse cx="269" cy="154" rx="13" ry="18" fill="url(#nailGrad)" />
      <ellipse cx="269" cy="147" rx="7" ry="7" fill="url(#shineGrad)" />
      {/* Wrist */}
      <rect x="110" y="360" width="120" height="60" rx="20" fill="url(#skinGrad)" />
      {/* Gold ring on ring finger */}
      <ellipse cx="232" cy="235" rx="18" ry="5" fill="none" stroke="#d4a853" strokeWidth="4" opacity="0.9" />
      <ellipse cx="232" cy="234" rx="18" ry="4" fill="none" stroke="#f0c96a" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

function StarRating({ count = 5 }) {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 12 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14">
          <polygon points="7,1 8.8,5.6 14,5.6 9.8,8.6 11.6,13 7,10.1 2.4,13 4.2,8.6 0,5.6 5.2,5.6" fill="#c49a6c" />
        </svg>
      ))}
    </div>
  );
}

export default function NailStudio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const heroRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(intervalRef.current);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const WA_LINK = "https://wa.me/554896344186?text=Olá! Gostaria de agendar um horário.";

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif", background: "#fdfaf8", color: "#2a1a1f", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        ::selection { background: #f4c2cc; color: #f0d2d0; }
        .sans { font-family: 'Jost', system-ui, sans-serif; }
        .fade-up { opacity: 0; transform: translateY(32px); transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1); }
        .fade-up.visible { opacity: 1; transform: none; }
        .btn-primary { background: #f0d2d0; color: #fdfaf8; border: none; padding: 16px 36px; font-family: 'Jost', sans-serif; font-size: 13px; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: all 0.3s ease; display: inline-block; text-decoration: none; }
        .btn-primary:hover { background: #c49a6c; transform: translateY(-2px); }
        .btn-outline { background: transparent; color: #f0d2d0; border: 1px solid rgba(42,26,31,0.3); padding: 14px 32px; font-family: 'Jost', sans-serif; font-size: 12px; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: all 0.3s ease; display: inline-block; text-decoration: none; }
        .btn-outline:hover { border-color: #f0d2d0; background: #f0d2d0; color: #fdfaf8; }
        .service-card { background: #fff; padding: 40px 32px; border: 1px solid rgba(42,26,31,0.08); transition: all 0.4s ease; cursor: default; position: relative; overflow: hidden; }
        .service-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(196,154,108,0.04) 0%, rgba(244,194,204,0.04) 100%); opacity: 0; transition: opacity 0.4s; }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(42,26,31,0.1); border-color: rgba(196,154,108,0.3); }
        .service-card:hover::before { opacity: 1; }
        .gallery-item { overflow: hidden; cursor: pointer; position: relative; }
        .gallery-item img, .gallery-item .nail-placeholder { transition: transform 0.6s cubic-bezier(0.22,1,0.36,1); }
        .gallery-item:hover .nail-placeholder { transform: scale(1.05); }
        .gallery-overlay { position: absolute; inset: 0; background: rgba(42,26,31,0); transition: background 0.4s; display: flex; align-items: center; justify-content: center; }
        .gallery-item:hover .gallery-overlay { background: rgba(42,26,31,0.35); }
        .gallery-overlay-text { color: white; font-family: 'Jost', sans-serif; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; opacity: 0; transform: translateY(8px); transition: all 0.3s ease 0.1s; }
        .gallery-item:hover .gallery-overlay-text { opacity: 1; transform: none; }
        .testimonial-card { background: #fff; padding: 48px 40px; border: 1px solid rgba(42,26,31,0.08); }
        .nav-link { font-family: 'Jost', sans-serif; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: inherit; text-decoration: none; opacity: 0.7; transition: opacity 0.3s; cursor: pointer; background: none; border: none; }
        .nav-link:hover { opacity: 1; }
        .wa-float { position: fixed; bottom: 32px; right: 32px; z-index: 1000; width: 58px; height: 58px; background: #25d366; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 32px rgba(37,211,102,0.4); cursor: pointer; text-decoration: none; transition: transform 0.3s ease, box-shadow 0.3s ease; animation: waPulse 2.5s ease-in-out infinite; }
        .wa-float:hover { transform: scale(1.1); box-shadow: 0 12px 40px rgba(37,211,102,0.5); animation: none; }
        @keyframes waPulse { 0%,100%{ box-shadow: 0 8px 32px rgba(37,211,102,0.4); } 50%{ box-shadow: 0 8px 48px rgba(37,211,102,0.6); } }
        .divider { width: 40px; height: 1px; background: linear-gradient(90deg, transparent, #c49a6c, transparent); margin: 20px auto; }
        .section-eyebrow { font-family: 'Jost', sans-serif; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: #c49a6c; margin-bottom: 16px; }
        .hero-tag { font-family: 'Jost', sans-serif; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: rgba(253,250,248,0.7); }
        .insta-item { overflow: hidden; aspect-ratio: 1; cursor: pointer; position: relative; }
        .insta-overlay { position: absolute; inset: 0; background: rgba(42,26,31,0); display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
        .insta-item:hover .insta-overlay { background: rgba(42,26,31,0.4); }
        .insta-likes { color: white; font-family: 'Jost', sans-serif; font-size: 13px; opacity: 0; transition: opacity 0.3s; }
        .insta-item:hover .insta-likes { opacity: 1; }
        @media(max-width: 768px) {
          .hero-title { font-size: clamp(44px, 12vw, 80px) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .insta-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .wa-float { bottom: 20px; right: 20px; width: 52px; height: 52px; }
        }
        @keyframes floatIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
        @keyframes slideRight { from { width: 0; } to { width: 100%; } }
        .hero-line { display: block; overflow: hidden; }
        .hero-line-inner { display: block; }
        .scroll-reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .scroll-reveal.revealed { opacity: 1; transform: none; }
        .gold-line { width: 0; height: 1px; background: #c49a6c; transition: width 1s ease 0.5s; }
        .gold-line.visible { width: 60px; }
        .tag-pill { display: inline-block; background: rgba(196,154,108,0.1); border: 1px solid rgba(196,154,108,0.3); color: #c49a6c; font-family: 'Jost', sans-serif; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; padding: 6px 16px; }
        .mobile-menu { position: fixed; inset: 0; background: #fdfaf8; z-index: 999; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 32px; transform: translateX(100%); transition: transform 0.4s cubic-bezier(0.22,1,0.36,1); }
        .mobile-menu.open { transform: none; }
        .lightbox { position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 2000; display: flex; align-items: center; justify-content: center; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
        padding: "20px 48px",
        background: scrolled ? "rgba(253,250,248,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(42,26,31,0.08)" : "none",
        transition: "all 0.4s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div onClick={() => scrollTo("hero")} style={{ cursor: "pointer" }}>
          <div style={{ fontSize: 22, fontWeight: 300, letterSpacing: 6, color: scrolled ? "#2a1a1f" : "#fdfaf8", lineHeight: 1 }}>LUNNA</div>
          <div className="sans" style={{ fontSize: 8, letterSpacing: 5, color: scrolled ? "#c49a6c" : "rgba(253,250,248,0.8)", textTransform: "uppercase", marginTop: 2 }}>Nail Studio</div>
        </div>

        <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <button key={l} className="nav-link" onClick={() => scrollTo(l.toLowerCase().replace("í","i").replace("ç","c").replace("ê","e"))} style={{ color: scrolled ? "#2a1a1f" : "rgba(253,250,248,0.85)" }}>{l}</button>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener" className="btn-primary" style={{ padding: "10px 24px", fontSize: 11 }}>WhatsApp</a>
        </div>

        <button onClick={() => setMenuOpen(v => !v)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5 }} className="menu-btn" aria-label="Menu">
          {[0,1,2].map(i => <span key={i} style={{ display: "block", width: 24, height: 1, background: scrolled ? "#2a1a1f" : "#fdfaf8", transition: "all 0.3s" }} />)}
        </button>

        <style>{`.desktop-nav { display: flex !important; } .menu-btn { display: none !important; } @media(max-width: 900px){ .desktop-nav { display: none !important; } .menu-btn { display: flex !important; } }`}</style>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 24, right: 24, background: "none", border: "none", fontSize: 28, cursor: "pointer", color: "#2a1a1f" }}>×</button>
        {NAV_LINKS.map(l => (
          <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 300, letterSpacing: 4, background: "none", border: "none", cursor: "pointer", color: "#2a1a1f" }}>{l}</button>
        ))}
        <a href={WA_LINK} target="_blank" rel="noopener" className="btn-primary">WhatsApp</a>
      </div>

      {/* HERO */}
      <section id="início" ref={heroRef} style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", background: "linear-gradient(135deg, #2a1a1f 0%, #4a2a35 40%, #3a2030 100%)" }}>
        {/* Decorative background */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div style={{ position: "absolute", width: 600, height: 600, right: -100, top: -100, borderRadius: "50%", background: "radial-gradient(circle, rgba(196,154,108,0.12) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", width: 400, height: 400, left: -50, bottom: -50, borderRadius: "50%", background: "radial-gradient(circle, rgba(244,194,204,0.08) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,0.015) 80px, rgba(255,255,255,0.015) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,0.015) 80px, rgba(255,255,255,0.015) 81px)" }} />
        </div>

        {/* Hand illustration right side */}
        <div style={{ position: "absolute", right: "5%", bottom: 0, width: "min(420px, 45vw)", opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(40px)", transition: "all 1.2s cubic-bezier(0.22,1,0.36,1) 0.4s" }}>
          <HandIllustration />
        </div>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, padding: "0 8vw", maxWidth: 720 }}>
          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "all 0.8s ease 0.2s", marginBottom: 28 }}>
            <span className="hero-tag">✦ Nail Studio Premium ✦</span>
          </div>

          <h1 className="hero-title" style={{
            fontSize: "clamp(56px, 8vw, 100px)", fontWeight: 300, color: "#fdfaf8", lineHeight: 1.05, letterSpacing: -1,
            opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(40px)", transition: "all 1s cubic-bezier(0.22,1,0.36,1) 0.3s",
            marginBottom: 8
          }}>
            <em>Arte</em> nas<br />suas mãos
          </h1>

          <div style={{ opacity: heroVisible ? 1 : 0, transition: "opacity 1s ease 0.6s" }}>
            <div style={{ width: 60, height: 1, background: "linear-gradient(90deg, #c49a6c, rgba(196,154,108,0.3))", margin: "28px 0" }} />
          </div>

          <p className="sans" style={{
            fontSize: "clamp(14px, 1.8vw, 18px)", fontWeight: 300, color: "rgba(253,250,248,0.72)", lineHeight: 1.8, maxWidth: 420, marginBottom: 48,
            opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "all 0.8s ease 0.7s"
          }}>
            Realçando sua beleza através das unhas com técnicas exclusivas e produtos premium.
          </p>

          <div style={{
            display: "flex", gap: 16, flexWrap: "wrap",
            opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "all 0.8s ease 0.9s"
          }}>
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn-primary" style={{ background: "#c49a6c" }}>Agendar Horário</a>
            <button onClick={() => scrollTo("galeria")} className="btn-outline" style={{ color: "#fdfaf8", borderColor: "rgba(253,250,248,0.3)" }}>Ver Galeria</button>
          </div>

          <div style={{ display: "flex", gap: 48, marginTop: 72, opacity: heroVisible ? 1 : 0, transition: "opacity 1s ease 1.2s" }}>
            {[["500+", "Clientes"], ["5★", "Avaliação"], ["8+", "Anos"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: 28, fontWeight: 300, color: "#fdfaf8", letterSpacing: -0.5 }}>{n}</div>
                <div className="sans" style={{ fontSize: 10, letterSpacing: 3, color: "rgba(253,250,248,0.5)", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", opacity: heroVisible ? 0.5 : 0, transition: "opacity 1s ease 1.5s" }}>
          <div className="sans" style={{ fontSize: 9, letterSpacing: 4, color: "#fdfaf8", textTransform: "uppercase", textAlign: "center", marginBottom: 12 }}>Scroll</div>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(253,250,248,0.6), transparent)", margin: "0 auto", animation: "pulse 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* BRAND BAR */}
      <div style={{ background: "#2a1a1f", padding: "20px 48px", display: "flex", alignItems: "center", justifyContent: "center", gap: 64, overflowX: "auto" }}>
        {["Técnicas Exclusivas", "✦", "Produtos Premium", "✦", "Atendimento Personalizado", "✦", "Ambiente Refinado"].map((t, i) => (
          <span key={i} className="sans" style={{ fontSize: 10, letterSpacing: 3, color: i % 2 === 1 ? "#c49a6c" : "rgba(253,250,248,0.5)", textTransform: "uppercase", whiteSpace: "nowrap" }}>{t}</span>
        ))}
      </div>

      {/* SERVICES */}
      <section id="serviços" style={{ padding: "120px 8vw" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div className="section-eyebrow">Nossos Serviços</div>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 300, letterSpacing: -0.5, marginBottom: 20 }}>
            Experiência<br /><em>Completa em Beleza</em>
          </h2>
          <div className="divider" />
          <p className="sans" style={{ color: "#7a5a60", fontSize: 15, fontWeight: 300, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            Cada serviço é realizado com técnica apurada, produtos selecionados e total atenção aos detalhes.
          </p>
        </div>

        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div style={{ fontSize: 24, color: "#c49a6c", marginBottom: 20, lineHeight: 1 }}>{s.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 400, marginBottom: 12, letterSpacing: 0.5 }}>{s.name}</h3>
              <p className="sans" style={{ fontSize: 13, color: "#7a5a60", fontWeight: 300, lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 300, color: "#2a1a1f" }}>{s.price}</div>
                  <div className="sans" style={{ fontSize: 10, letterSpacing: 2, color: "#c49a6c", textTransform: "uppercase", marginTop: 2 }}>{s.duration}</div>
                </div>
                <a href={WA_LINK} target="_blank" rel="noopener" style={{ fontSize: 10, color: "#c49a6c", textDecoration: "none", fontFamily: "'Jost', sans-serif", letterSpacing: 2, textTransform: "uppercase", borderBottom: "1px solid #c49a6c", paddingBottom: 2 }}>Agendar →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" style={{ padding: "0 0 120px" }}>
        <div style={{ padding: "0 8vw 56px", textAlign: "center" }}>
          <div className="section-eyebrow">Galeria</div>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 300, letterSpacing: -0.5 }}>
            <em>Inspiração</em> para<br />cada ocasião
          </h2>
          <div className="divider" />
        </div>

        <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3, padding: "0 8vw" }}>
          {GALLERY_ITEMS.map((item, i) => (
            <div key={item.id} className="gallery-item" style={{ aspectRatio: item.size === "tall" ? "3/4" : "1/1" }} onClick={() => setLightbox(item)}>
              <img src={item.img} alt={item.label} className="nail-placeholder" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div className="gallery-overlay">
                <div>
                  <div className="gallery-overlay-text">{item.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="https://www.instagram.com/_bymanunailss/" target="_blank" rel="noopener" className="btn-outline">Ver Mais no Instagram</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" style={{ background: "#f0d2d0", padding: "120px 8vw" }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Portrait placeholder */}
          <div style={{ position: "relative" }}>
            <div style={{ aspectRatio: "4/5", background: "linear-gradient(145deg, #4a2a35 0%, #3a2030 100%)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <div style={{ width: "65%", opacity: 0.85 }}>
                <HandIllustration />
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(42,26,31,0.9) 0%, transparent 60%)", padding: "40px 36px 36px" }}>
                <div style={{ color: "#fdfaf8", fontSize: 26, fontWeight: 300, fontStyle: "italic" }}>Lunna Oliveira</div>
                <div className="sans" style={{ color: "#c49a6c", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", marginTop: 6 }}>Nail Designer Certificada</div>
              </div>
            </div>
            <div style={{ position: "absolute", top: -16, right: -16, width: 80, height: 80, border: "1px solid rgba(196,154,108,0.4)" }} />
            <div style={{ position: "absolute", bottom: -16, left: -16, width: 80, height: 80, border: "1px solid rgba(196,154,108,0.2)" }} />
          </div>

          <div>
            <div className="section-eyebrow" style={{ color: "rgba(196,154,108,0.8)" }}>Sobre Mim</div>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#fdfaf8", letterSpacing: -0.5, marginBottom: 28, lineHeight: 1.15 }}>
              Cada unha é<br /><em>uma obra de arte</em>
            </h2>
            <div style={{ width: 40, height: 1, background: "#c49a6c", marginBottom: 32 }} />
            <p className="sans" style={{ fontSize: 15, color: "rgba(253,250,248,0.65)", fontWeight: 300, lineHeight: 1.9, marginBottom: 24 }}>
              Com mais de 8 anos de experiência, sou especialista em nail art, extensões e técnicas avançadas de esmaltação. Meu trabalho une técnica precisa com sensibilidade artística.
            </p>
            <p className="sans" style={{ fontSize: 15, color: "rgba(253,250,248,0.65)", fontWeight: 300, lineHeight: 1.9, marginBottom: 40 }}>
              Cada cliente recebe uma experiência personalizada, num ambiente sofisticado e acolhedor, criado para que você se sinta verdadeiramente especial.
            </p>
            <div style={{ display: "flex", gap: 48, marginBottom: 40 }}>
              {[["8+", "Anos de Experiência"], ["500+", "Clientes Felizes"], ["50+", "Técnicas Dominadas"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 32, fontWeight: 300, color: "#c49a6c" }}>{n}</div>
                  <div className="sans" style={{ fontSize: 10, letterSpacing: 2, color: "rgba(253,250,248,0.4)", textTransform: "uppercase", marginTop: 4, lineHeight: 1.4 }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["Certificada ABNT", "Premium Products", "Nail Art Expert"].map(tag => (
                <span key={tag} style={{ background: "rgba(196,154,108,0.1)", border: "1px solid rgba(196,154,108,0.3)", color: "#c49a6c", fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px" }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "120px 8vw", background: "#fdfaf8" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-eyebrow">Depoimentos</div>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 300, letterSpacing: -0.5 }}>
            O que nossas<br /><em>clientes dizem</em>
          </h2>
          <div className="divider" />
        </div>

        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{
              display: i === activeTestimonial ? "block" : "none",
              animation: "floatIn 0.5s ease",
            }}>
              <div className="testimonial-card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: 48, color: "#f4c2cc", fontWeight: 300, lineHeight: 1, marginBottom: 24 }}>"</div>
                <p style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 300, fontStyle: "italic", color: "#2a1a1f", lineHeight: 1.6, marginBottom: 36 }}>
                  {t.text}
                </p>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
                  <StarRating count={t.stars} />
                </div>
                <div style={{ fontSize: 16, fontWeight: 400, color: "#2a1a1f", marginBottom: 4 }}>{t.name}</div>
                <div className="sans" style={{ fontSize: 11, letterSpacing: 2, color: "#c49a6c", textTransform: "uppercase" }}>{t.role}</div>
              </div>
            </div>
          ))}

          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 32 }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => { setActiveTestimonial(i); clearInterval(intervalRef.current); }} style={{
                width: i === activeTestimonial ? 28 : 8, height: 2,
                background: i === activeTestimonial ? "#c49a6c" : "#d4c0b0",
                border: "none", cursor: "pointer", transition: "all 0.4s ease", padding: 0,
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section style={{ padding: "0 0 120px", background: "#fdfaf8" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-eyebrow">Instagram</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300, letterSpacing: -0.5 }}>@lunna.nailstudio</h2>
        </div>

        <div className="insta-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
          {INSTAGRAM_ITEMS.map((item) => (
            <div key={item.id} className="insta-item">
              <div style={{ width: "100%", height: "100%", background: `linear-gradient(135deg, ${item.color}, ${item.color}bb)`, minHeight: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 80, height: 100, opacity: 0.7 }}>
                  <NailIllustration color={item.color} />
                </div>
              </div>
              <div className="insta-overlay">
                <span className="insta-likes">♡ {item.likes}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="https://www.instagram.com/_bymanunailss/" target="_blank" rel="noopener" className="btn-outline">Seguir no Instagram</a>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #2a1a1f 0%, #4a2a35 100%)", padding: "120px 8vw", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 500, height: 500, top: "50%", left: "50%", transform: "translate(-50%, -50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,154,108,0.1) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="section-eyebrow" style={{ color: "rgba(196,154,108,0.8)" }}>Agende Agora</div>
          <h2 style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 300, color: "#fdfaf8", letterSpacing: -0.5, marginBottom: 20, lineHeight: 1.1 }}>
            Você merece o<br /><em>melhor cuidado</em>
          </h2>
          <div className="divider" />
          <p className="sans" style={{ fontSize: 15, color: "rgba(253,250,248,0.6)", fontWeight: 300, maxWidth: 440, margin: "0 auto 48px", lineHeight: 1.8 }}>
            Entre em contato pelo WhatsApp e agende seu horário. Vagas limitadas — garanta a sua.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener" className="btn-primary" style={{ background: "#c49a6c", fontSize: 13, padding: "20px 52px" }}>
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" style={{ background: "#1a0f13", padding: "80px 8vw 48px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, marginBottom: 60 }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 300, letterSpacing: 6, color: "#fdfaf8", marginBottom: 4 }}>LUNNA</div>
            <div className="sans" style={{ fontSize: 8, letterSpacing: 5, color: "#c49a6c", textTransform: "uppercase", marginBottom: 24 }}>Nail Studio</div>
            <p className="sans" style={{ fontSize: 13, color: "rgba(253,250,248,0.4)", fontWeight: 300, lineHeight: 1.8, maxWidth: 260 }}>
              Arte e sofisticação em cada detalhe. Porque você merece o melhor.
            </p>
          </div>
          <div>
            <div className="sans" style={{ fontSize: 10, letterSpacing: 3, color: "#c49a6c", textTransform: "uppercase", marginBottom: 24 }}>Serviços</div>
            {["Banho em Gel", "Fibra de Vidro", "Nail Art", "Esmaltação", "Manutenção"].map(s => (
              <div key={s} className="sans" style={{ fontSize: 13, color: "rgba(253,250,248,0.4)", marginBottom: 12, fontWeight: 300 }}>{s}</div>
            ))}
          </div>
          <div>
            <div className="sans" style={{ fontSize: 10, letterSpacing: 3, color: "#c49a6c", textTransform: "uppercase", marginBottom: 24 }}>Horários</div>
            {[["Seg – Sex", "9h às 19h"], ["Sábado", "9h às 17h"], ["Domingo", "Fechado"]].map(([d, h]) => (
              <div key={d} style={{ marginBottom: 16 }}>
                <div className="sans" style={{ fontSize: 12, color: "rgba(253,250,248,0.6)", marginBottom: 2 }}>{d}</div>
                <div className="sans" style={{ fontSize: 12, color: "rgba(253,250,248,0.35)", fontWeight: 300 }}>{h}</div>
              </div>
            ))}
          </div>
          <div>
            <div className="sans" style={{ fontSize: 10, letterSpacing: 3, color: "#c49a6c", textTransform: "uppercase", marginBottom: 24 }}>Contato</div>
            <a href={WA_LINK} target="_blank" rel="noopener" style={{ display: "block", fontSize: 13, color: "rgba(253,250,248,0.4)", textDecoration: "none", marginBottom: 12, fontFamily: "'Jost',sans-serif", fontWeight: 300 }}>WhatsApp</a>
            <a href="https://www.instagram.com/_bymanunailss/" target="_blank" rel="noopener" style={{ display: "block", fontSize: 13, color: "rgba(253,250,248,0.4)", textDecoration: "none", marginBottom: 12, fontFamily: "'Jost',sans-serif", fontWeight: 300 }}>@lunna.nailstudio</a>
            <div className="sans" style={{ fontSize: 13, color: "rgba(253,250,248,0.4)", fontWeight: 300, lineHeight: 1.6 }}>Florianópolis, SC</div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(253,250,248,0.06)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div className="sans" style={{ fontSize: 11, color: "rgba(253,250,248,0.25)", fontWeight: 300 }}>© 2025 Lunna Nail Studio. Todos os direitos reservados.</div>
          <div className="sans" style={{ fontSize: 11, color: "rgba(253,250,248,0.25)", fontWeight: 300 }}>Feito com ✦ para você</div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href={WA_LINK} target="_blank" rel="noopener" className="wa-float" aria-label="WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.139.564 4.147 1.55 5.887L.057 23.882a.5.5 0 00.615.612l6.143-1.589A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a10 10 0 01-5.169-1.44l-.369-.222-3.826.99 1.012-3.726-.239-.384A10 10 0 1112 22z"/>
        </svg>
      </a>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div style={{ position: "relative", width: "min(400px, 85vw)", aspectRatio: "3/4", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }} onClick={e => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: 24, left: 0, right: 0, textAlign: "center" }}>
              <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 12, letterSpacing: 3, color: "#2a1a1f", textTransform: "uppercase", opacity: 0.7 }}>{lightbox.label}</div>
            </div>
            <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: -40, right: 0, background: "none", border: "none", color: "white", fontSize: 28, cursor: "pointer" }}>×</button>
          </div>
        </div>
      )}
    </div>
  );
}