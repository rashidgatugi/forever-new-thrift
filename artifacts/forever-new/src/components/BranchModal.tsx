interface BranchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BranchModal({ open, onClose }: BranchModalProps) {
  const openWhatsApp = (branch: "kwft" | "pacoon") => {
    const msg = branch === "kwft"
      ? "Hello Forever New (Karatina Town)! I'd like assistance with your collections."
      : "Hello Forever New (Pacoon Junction)! I'd like assistance with your collections.";
    window.open(`https://wa.me/254793606050?text=${encodeURIComponent(msg)}`, "_blank");
    onClose();
  };

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(10px)",
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: open ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}>
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "linear-gradient(135deg, #141414, #0A0A0A)",
          border: "1px solid rgba(0,255,136,0.3)",
          borderRadius: "16px",
          padding: "2rem",
          maxWidth: "400px",
          width: "90%",
          transform: open ? "scale(1) translateY(0)" : "scale(0.9) translateY(20px)",
          transition: "transform 0.3s ease",
        }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
          <div>
            <p className="tracking-chrome" style={{ fontSize: "0.625rem", color: "#00FF88", marginBottom: "0.5rem" }}>SELECT LOCATION</p>
            <h3 className="display-font" style={{ fontSize: "1.25rem", color: "white", fontWeight: 500 }}>Which branch would you like to contact?</h3>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "rgba(224,224,224,0.5)", cursor: "pointer", transition: "color 0.2s", padding: "0.25rem" }}
            onMouseEnter={e => (e.currentTarget.style.color = "white")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(224,224,224,0.5)")}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width={20} height={20}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p style={{ fontSize: "0.75rem", color: "rgba(224,224,224,0.6)", marginBottom: "1.5rem" }}>Choose your nearest branch for faster service:</p>

        {/* KWFT Branch */}
        <button onClick={() => openWhatsApp("kwft")} className="branch-btn kwft">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg fill="none" stroke="#00FF88" viewBox="0 0 24 24" width={24} height={24}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "white" }}>Karatina Town Branch</p>
              <p style={{ fontSize: "0.625rem", color: "rgba(224,224,224,0.5)" }}>Opposite KWFT Building</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span className="tracking-chrome" style={{ fontSize: "0.625rem", color: "#00FF88" }}>WHATSAPP</span>
            <svg fill="none" stroke="#00FF88" viewBox="0 0 24 24" width={16} height={16}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        {/* Pacoon Branch */}
        <button onClick={() => openWhatsApp("pacoon")} className="branch-btn pacoon">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg fill="none" stroke="#FFD700" viewBox="0 0 24 24" width={24} height={24}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "white" }}>Pacoon Junction Branch</p>
              <p style={{ fontSize: "0.625rem", color: "rgba(224,224,224,0.5)" }}>Next to Jesus Winner Church</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span className="tracking-chrome" style={{ fontSize: "0.625rem", color: "#FFD700" }}>WHATSAPP</span>
            <svg fill="none" stroke="#FFD700" viewBox="0 0 24 24" width={16} height={16}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="tracking-chrome" style={{ fontSize: "0.625rem", textAlign: "center", color: "rgba(224,224,224,0.4)", marginBottom: "1rem" }}>OR CALL DIRECTLY</p>
          <a href="tel:+254793606050"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", width: "100%", padding: "0.75rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={e => { (e.currentTarget).style.borderColor = "#00FF88"; (e.currentTarget).style.background = "rgba(0,255,136,0.05)"; }}
            onMouseLeave={e => { (e.currentTarget).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget).style.background = "rgba(255,255,255,0.05)"; }}>
            <svg fill="none" stroke="#00FF88" viewBox="0 0 24 24" width={20} height={20}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "white", letterSpacing: "0.1em" }}>0793606050</span>
          </a>
        </div>
      </div>
    </div>
  );
}
