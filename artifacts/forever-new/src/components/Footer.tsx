export default function Footer() {
  return (
    <footer style={{ background: "#141414", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "3rem 1.5rem 8rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
        <div className="display-font" style={{ fontSize: "1.5rem", fontWeight: 500, color: "white" }}>
          FOREVERNEW
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem 2rem" }}>
          <span className="tracking-chrome" style={{ fontSize: "0.75rem", color: "rgba(224,224,224,0.5)" }}>KARATINA TOWN</span>
          <span style={{ color: "#00FF88", display: "none" }} className="dot-sep">•</span>
          <span className="tracking-chrome" style={{ fontSize: "0.75rem", color: "rgba(224,224,224,0.5)" }}>PACOON JUNCTION</span>
          <span style={{ color: "#00FF88", display: "none" }} className="dot-sep">•</span>
          <a href="tel:+254793606050" className="tracking-chrome" style={{ fontSize: "0.75rem", color: "#FFD700", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#00FF88")}
            onMouseLeave={e => (e.currentTarget.style.color = "#FFD700")}>
            0793606050
          </a>
        </div>
      </div>
      <div style={{ maxWidth: "80rem", margin: "2rem auto 0", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.5rem" }}>
        <p className="tracking-chrome" style={{ fontSize: "0.625rem", color: "rgba(224,224,224,0.3)" }}>© 2026 FOREVERNEW SECONDHAND COLLECTIONS</p>
        <p className="tracking-chrome" style={{ fontSize: "0.625rem", color: "rgba(224,224,224,0.3)" }}>GRADE A PRE-LOVED FASHION</p>
      </div>
      <style>{`@media (min-width: 768px) { .dot-sep { display: inline !important; } }`}</style>
    </footer>
  );
}
