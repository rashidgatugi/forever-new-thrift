interface LocationsProps {
  onSelectBranch: () => void;
}

export default function Locations({ onSelectBranch }: LocationsProps) {
  const openWhatsApp = (branch: "kwft" | "pacoon") => {
    const msg = branch === "kwft"
      ? "Hello Forever New (Karatina Town)! I'd like to visit your store."
      : "Hello Forever New (Pacoon Junction)! I'd like to visit your store.";
    window.open(`https://wa.me/254793606050?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="locations" style={{ padding: "6rem 1.5rem", background: "#0A0A0A", position: "relative" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="tracking-chrome" style={{ color: "#00FF88", fontSize: "0.75rem", marginBottom: "1rem", letterSpacing: "0.3em" }}>VISIT US</p>
          <h2 className="display-font" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", color: "white", fontWeight: 500 }}>
            Two <span style={{ color: "#FFD700" }}>Locations</span>. One Standard.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          {/* KWFT Branch */}
          <div className="gloss-panel reveal" onClick={onSelectBranch} style={{ padding: "2rem", borderRadius: "2px", cursor: "pointer", transition: "all 0.3s ease" }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,255,136,0.2)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.05)"; }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <div>
                <p className="tracking-chrome" style={{ fontSize: "0.625rem", color: "#00FF88", marginBottom: "0.5rem" }}>FLAGSHIP</p>
                <h3 className="display-font" style={{ fontSize: "1.5rem", color: "white", fontWeight: 500 }}>Karatina Town</h3>
              </div>
              <div className="pulse-glow" style={{ width: "3rem", height: "3rem", borderRadius: "50%", border: "1px solid rgba(0,255,136,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg fill="none" stroke="#00FF88" viewBox="0 0 24 24" width={20} height={20}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <p style={{ color: "rgba(224,224,224,0.7)", fontSize: "0.875rem", marginBottom: "0.25rem" }}>Opposite KWFT Building</p>
            <p style={{ color: "rgba(224,224,224,0.5)", fontSize: "0.75rem", marginBottom: "1.5rem" }}>Main Commercial District, Karatina</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <a href="tel:+254793606050" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}
                onClick={e => e.stopPropagation()}>
                <div className="pulse-glow" style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "rgba(0,255,136,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg fill="none" stroke="#00FF88" viewBox="0 0 24 24" width={16} height={16}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span style={{ color: "#00FF88", fontWeight: 500, letterSpacing: "0.1em" }}>0793606050</span>
              </a>
              <button className="tracking-chrome" onClick={e => { e.stopPropagation(); openWhatsApp("kwft"); }}
                style={{ fontSize: "0.625rem", color: "#00FF88", border: "1px solid rgba(0,255,136,0.3)", padding: "0.5rem 0.75rem", borderRadius: "2px", background: "transparent", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,255,136,0.1)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                WHATSAPP
              </button>
            </div>
            <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <p style={{ fontSize: "0.625rem", color: "rgba(224,224,224,0.4)" }}>Click card to select this branch</p>
            </div>
          </div>

          {/* Pacoon Branch */}
          <div className="gloss-panel reveal reveal-delay-1" onClick={onSelectBranch} style={{ padding: "2rem", borderRadius: "2px", cursor: "pointer", transition: "all 0.3s ease" }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,215,0,0.2)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.05)"; }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <div>
                <p className="tracking-chrome" style={{ fontSize: "0.625rem", color: "#FFD700", marginBottom: "0.5rem" }}>JUNCTION</p>
                <h3 className="display-font" style={{ fontSize: "1.5rem", color: "white", fontWeight: 500 }}>Pacoon Junction</h3>
              </div>
              <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", border: "1px solid rgba(255,215,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(255,215,0,0.3)", animation: "pulseGlow 2s ease-in-out 1s infinite" }}>
                <svg fill="none" stroke="#FFD700" viewBox="0 0 24 24" width={20} height={20}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <p style={{ color: "rgba(224,224,224,0.7)", fontSize: "0.875rem", marginBottom: "0.25rem" }}>Next to Jesus Winner Church</p>
            <p style={{ color: "rgba(224,224,224,0.5)", fontSize: "0.75rem", marginBottom: "1.5rem" }}>Pacoon Road, Karatina</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <a href="tel:+254793606050" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}
                onClick={e => e.stopPropagation()}>
                <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "rgba(255,215,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(255,215,0,0.3)" }}>
                  <svg fill="none" stroke="#FFD700" viewBox="0 0 24 24" width={16} height={16}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span style={{ color: "#FFD700", fontWeight: 500, letterSpacing: "0.1em" }}>0793606050</span>
              </a>
              <button className="tracking-chrome" onClick={e => { e.stopPropagation(); openWhatsApp("pacoon"); }}
                style={{ fontSize: "0.625rem", color: "#FFD700", border: "1px solid rgba(255,215,0,0.3)", padding: "0.5rem 0.75rem", borderRadius: "2px", background: "transparent", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,215,0,0.1)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                WHATSAPP
              </button>
            </div>
            <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <p style={{ fontSize: "0.625rem", color: "rgba(224,224,224,0.4)" }}>Click card to select this branch</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="map-container reveal reveal-delay-2" style={{ height: "24rem", borderRadius: "2px", position: "relative" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7246621!2d37.1246!3d-0.4896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a77a2e3e8bc3%3A0xd5a7b7fad64fcc99!2sKaratina%2C%20Kenya!5e0!3m2!1sen!2ske!4v1711234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(80%) contrast(90%)", position: "absolute", inset: 0, opacity: 0.6 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Forever New Store Locations"
          />
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(to top, #0A0A0A, transparent, rgba(10,10,10,0.5))" }} />
          <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div className="gloss" style={{ padding: "0.5rem 1rem", borderRadius: "2px" }}>
              <p className="tracking-chrome" style={{ fontSize: "0.625rem", color: "#00FF88" }}>KARATINA, KENYA</p>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div style={{ width: "0.75rem", height: "0.75rem", borderRadius: "50%", background: "#00FF88", animation: "pulse 2s infinite" }} />
              <div style={{ width: "0.75rem", height: "0.75rem", borderRadius: "50%", background: "#FFD700", animation: "pulse 2s 0.5s infinite" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
