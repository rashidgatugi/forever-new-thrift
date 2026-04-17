interface StickyAssistProps {
  visible: boolean;
}

export default function StickyAssist({ visible }: StickyAssistProps) {
  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: "linear-gradient(to top, rgba(10,10,10,0.98), rgba(10,10,10,0.9))",
      borderTop: "1px solid rgba(0,255,136,0.2)",
      backdropFilter: "blur(20px)",
      padding: "1rem",
      zIndex: 40,
      transform: visible ? "translateY(0)" : "translateY(100%)",
      transition: "transform 0.3s ease",
    }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className="pulse-glow" style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "rgba(0,255,136,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg fill="none" stroke="#00FF88" viewBox="0 0 24 24" width={20} height={20}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 500, color: "white" }}>Browsing Collections?</p>
            <p style={{ fontSize: "0.625rem", color: "rgba(224,224,224,0.5)" }}>Get instant help via WhatsApp</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a href="https://wa.me/254793606050?text=Hello!%20I'm%20browsing%20your%20collections%20and%20need%20assistance."
            target="_blank" rel="noopener noreferrer"
            className="tracking-chrome"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.5)", borderRadius: "2px", fontSize: "0.75rem", color: "rgba(74,222,128,1)", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(34,197,94,0.3)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(34,197,94,0.2)")}>
            <svg fill="rgba(74,222,128,1)" viewBox="0 0 24 24" width={16} height={16}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>WHATSAPP</span>
          </a>
          <a href="tel:+254793606050" className="tracking-chrome"
            style={{ padding: "0.5rem 1rem", background: "rgba(0,255,136,0.2)", border: "1px solid rgba(0,255,136,0.5)", borderRadius: "2px", fontSize: "0.75rem", color: "#00FF88", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,255,136,0.3)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,255,136,0.2)")}>
            CALL NOW
          </a>
        </div>
      </div>
    </div>
  );
}
