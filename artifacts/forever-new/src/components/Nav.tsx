interface NavProps {
  onAssistance: () => void;
  onMobileMenu: () => void;
}

export default function Nav({ onAssistance, onMobileMenu }: NavProps) {
  return (
    <nav className="fixed w-full z-50 gloss" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "1rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="display-font" style={{ fontSize: "1.5rem", fontWeight: 500, letterSpacing: "-0.02em", color: "white" }}>
          FOREVER NEW<span style={{ color: "#00FF88" }}>.COM</span>
        </div>
        <div style={{ display: "none" }} className="md-nav">
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <a href="#collections" className="tracking-chrome" style={{ fontSize: "0.75rem", color: "rgba(224,224,224,0.7)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#00FF88")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(224,224,224,0.7)")}>
              COLLECTIONS
            </a>
            <a href="#vault" className="tracking-chrome" style={{ fontSize: "0.75rem", color: "rgba(224,224,224,0.7)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#00FF88")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(224,224,224,0.7)")}>
              SHOE VAULT
            </a>
            <a href="#locations" className="tracking-chrome" style={{ fontSize: "0.75rem", color: "rgba(224,224,224,0.7)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#00FF88")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(224,224,224,0.7)")}>
              LOCATIONS
            </a>
            <button onClick={onAssistance} className="ghost-chrome pulse-glow tracking-chrome" style={{ padding: "0.5rem 1.5rem", fontSize: "0.75rem", borderRadius: "2px" }}>
              GET ASSISTANCE
            </button>
          </div>
        </div>
        <button className="mobile-only" onClick={onMobileMenu} style={{ background: "none", border: "none", color: "#00FF88", cursor: "pointer", display: "flex", alignItems: "center" }}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" width={24} height={24}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .md-nav { display: flex !important; }
          .mobile-only { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
