interface FabMenuProps {
  open: boolean;
  onToggle: () => void;
  onBranchSelect: () => void;
}

export default function FabMenu({ open, onToggle, onBranchSelect }: FabMenuProps) {
  return (
    <div style={{ position: "fixed", bottom: "2rem", right: "2rem", zIndex: 50 }}>
      {/* FAB Options */}
      <div style={{
        position: "absolute",
        bottom: "80px",
        right: 0,
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "all" : "none",
        transform: open ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        {/* AI Stylist WhatsApp */}
        <a href="https://wa.me/254793606050?text=Hello%20Forever%20New!%20I%20need%20styling%20assistance."
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 20px",
            background: "linear-gradient(135deg, rgba(20,20,20,0.95), rgba(10,10,10,0.98))",
            border: "1px solid rgba(0,255,136,0.3)",
            borderRadius: "12px",
            backdropFilter: "blur(20px)",
            whiteSpace: "nowrap",
            textDecoration: "none",
            transition: "all 0.3s ease",
            transitionDelay: open ? "0.05s" : "0s",
            transform: open ? "translateX(0)" : "translateX(20px)",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#00FF88"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,255,136,0.2)"; (e.currentTarget as HTMLElement).style.transform = "translateX(-5px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.3)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}>
          <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg fill="rgba(74,222,128,1)" viewBox="0 0 24 24" width={20} height={20}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 500, color: "white" }}>Chat with AI Stylist</p>
            <p style={{ fontSize: "0.625rem", color: "rgba(224,224,224,0.5)" }}>WhatsApp Instant Reply</p>
          </div>
        </a>

        {/* Direct Call */}
        <a href="tel:+254793606050"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 20px",
            background: "linear-gradient(135deg, rgba(20,20,20,0.95), rgba(10,10,10,0.98))",
            border: "1px solid rgba(0,255,136,0.3)",
            borderRadius: "12px",
            backdropFilter: "blur(20px)",
            whiteSpace: "nowrap",
            textDecoration: "none",
            transition: "all 0.3s ease",
            transitionDelay: open ? "0.1s" : "0s",
            transform: open ? "translateX(0)" : "translateX(20px)",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#00FF88"; (e.currentTarget as HTMLElement).style.transform = "translateX(-5px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}>
          <div className="pulse-glow" style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "rgba(0,255,136,0.2)", border: "1px solid rgba(0,255,136,0.5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg fill="none" stroke="#00FF88" viewBox="0 0 24 24" width={20} height={20}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 500, color: "white" }}>Talk to Store Manager</p>
            <p style={{ fontSize: "0.625rem", color: "rgba(224,224,224,0.5)" }}>One-Tap Calling</p>
          </div>
        </a>

        {/* Locate Branch */}
        <button onClick={onBranchSelect}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 20px",
            background: "linear-gradient(135deg, rgba(20,20,20,0.95), rgba(10,10,10,0.98))",
            border: "1px solid rgba(0,255,136,0.3)",
            borderRadius: "12px",
            backdropFilter: "blur(20px)",
            whiteSpace: "nowrap",
            cursor: "pointer",
            transition: "all 0.3s ease",
            transitionDelay: open ? "0.15s" : "0s",
            transform: open ? "translateX(0)" : "translateX(20px)",
            textAlign: "left",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#00FF88"; (e.currentTarget as HTMLElement).style.transform = "translateX(-5px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}>
          <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "rgba(255,215,0,0.2)", border: "1px solid rgba(255,215,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg fill="none" stroke="#FFD700" viewBox="0 0 24 24" width={20} height={20}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 500, color: "white" }}>Locate My Branch</p>
            <p style={{ fontSize: "0.625rem", color: "rgba(224,224,224,0.5)" }}>KWFT or Pacoon Junction</p>
          </div>
        </button>
      </div>

      {/* Main FAB Button */}
      <button
        onClick={onToggle}
        className={`fab-main pulse-ring ${open ? "active" : ""}`}
        style={{ transition: "all 0.3s ease" }}>
        <svg fill="none" stroke="#00FF88" viewBox="0 0 24 24" width={24} height={24}
          style={{ transition: "transform 0.3s ease", transform: open ? "rotate(45deg)" : "rotate(0)" }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
  );
}
