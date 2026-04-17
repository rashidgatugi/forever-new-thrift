interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onAssistance: () => void;
}

export default function MobileMenu({ open, onClose, onAssistance }: MobileMenuProps) {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "#0A0A0A",
      zIndex: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "2rem",
    }}>
      <button onClick={onClose} style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", color: "#00FF88", cursor: "pointer" }}>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width={24} height={24}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <a href="#collections" className="display-font" onClick={onClose} style={{ fontSize: "1.5rem", color: "white", textDecoration: "none" }}>COLLECTIONS</a>
      <a href="#vault" className="display-font" onClick={onClose} style={{ fontSize: "1.5rem", color: "white", textDecoration: "none" }}>SHOE VAULT</a>
      <a href="#locations" className="display-font" onClick={onClose} style={{ fontSize: "1.5rem", color: "white", textDecoration: "none" }}>LOCATIONS</a>
      <button onClick={() => { onAssistance(); onClose(); }} className="ghost-chrome tracking-chrome" style={{ padding: "0.75rem 2rem", fontSize: "0.875rem", borderRadius: "2px", marginTop: "1rem" }}>
        GET ASSISTANCE
      </button>
    </div>
  );
}
