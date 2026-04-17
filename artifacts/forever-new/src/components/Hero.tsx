interface HeroProps {
  onVip: () => void;
}

export default function Hero({ onVip }: HeroProps) {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", paddingTop: "5rem" }}>
      <div className="grid-overlay" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #0A0A0A, #0A0A0A, #141414)" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A, rgba(10,10,10,0.8), transparent)" }} />
      </div>

      <div className="chrome-line" style={{ position: "absolute", top: "25%", left: 0, right: 0, opacity: 0.3 }} />
      <div className="chrome-line" style={{ position: "absolute", bottom: "33%", left: 0, right: 0, opacity: 0.2 }} />

      <div className="reveal" style={{ position: "relative", zIndex: 10, maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
        <p className="tracking-chrome" style={{ color: "#00FF88", fontSize: "0.75rem", marginBottom: "1.5rem", fontWeight: 500, letterSpacing: "0.3em" }}>
          SECONDHAND COLLECTIONS
        </p>
        <h1 className="display-font" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", fontWeight: 500, color: "white", marginBottom: "1.5rem", lineHeight: 1 }}>
          THE NEW<br />
          <span style={{ 
            backgroundImage: "linear-gradient(90deg, #00FF88, #FFD700)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            display: "inline-block" 
          }}>
            STANDARD
          </span><br />
          OF PRE-LOVED
        </h1>
        <p style={{ color: "rgba(224,224,224,0.6)", fontSize: "clamp(0.875rem, 2vw, 1rem)", maxWidth: "40rem", margin: "0 auto 3rem", lineHeight: 1.8, letterSpacing: "0.05em", fontWeight: 300 }}>
          Experience organized efficiency and specialized styling in the heart of Karatina Town.
          Premium Grade A pre-loved fashion, curated with precision.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <button onClick={onVip} className="ghost-chrome pulse-glow pulse-ring tracking-chrome" style={{ padding: "1rem 2rem", fontSize: "0.75rem", fontWeight: 500, borderRadius: "2px", letterSpacing: "0.2em" }}>
              JOIN THE VIP LIST
            </button>
            <a href="https://wa.me/254793606050?text=Hello%20Forever%20New!%20I'm%20interested%20in%20your%20collections."
              target="_blank" rel="noopener noreferrer"
              style={{ border: "1px solid rgba(224,224,224,0.3)", color: "#E0E0E0", padding: "1rem 2rem", fontSize: "0.75rem", letterSpacing: "0.2em", fontWeight: 500, borderRadius: "2px", textDecoration: "none", transition: "all 0.3s ease", display: "inline-flex", alignItems: "center" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#FFD700"; (e.currentTarget as HTMLAnchorElement).style.color = "#FFD700"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(224,224,224,0.3)"; (e.currentTarget as HTMLAnchorElement).style.color = "#E0E0E0"; }}>
              CHAT WITH AI STYLIST
            </a>
          </div>
        </div>

        <div style={{ marginTop: "5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", maxWidth: "40rem", margin: "5rem auto 0" }}>
          <div className="gloss-panel reveal reveal-delay-1" style={{ padding: "1rem", borderRadius: "2px" }}>
            <div className="display-font" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", color: "#00FF88" }}>10K+</div>
            <div className="tracking-chrome" style={{ fontSize: "0.625rem", color: "rgba(224,224,224,0.5)", marginTop: "0.25rem" }}>UNIQUE ITEMS</div>
          </div>
          <div className="gloss-panel reveal reveal-delay-2" style={{ padding: "1rem", borderRadius: "2px" }}>
            <div className="display-font" style={{ fontSize: "clamp(1.25rem, 4vw, 2rem)", color: "#FFD700" }}>Grade A</div>
            <div className="tracking-chrome" style={{ fontSize: "0.625rem", color: "rgba(224,224,224,0.5)", marginTop: "0.25rem" }}>QUALITY ONLY</div>
          </div>
          <div className="gloss-panel reveal reveal-delay-3" style={{ padding: "1rem", borderRadius: "2px" }}>
            <div className="display-font" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", color: "white" }}>2</div>
            <div className="tracking-chrome" style={{ fontSize: "0.625rem", color: "rgba(224,224,224,0.5)", marginTop: "0.25rem" }}>LOCATIONS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
