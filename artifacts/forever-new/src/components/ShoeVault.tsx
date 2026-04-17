import ShoeCard from "./ShoeCard";

const sneakers = [
  { brand: "NIKE AIR", size: "42", color: "#00FF88", img: "photo-1542291026-7eec264c27ff", accent: "#00FF88" },
  { brand: "ADIDAS", size: "40", color: "#00FF88", img: "photo-1608231387042-66d1773d3028", accent: "#00FF88" },
  { brand: "JORDAN", size: "44", color: "#00FF88", img: "photo-1608379743498-55982a2c3337", accent: "#00FF88" },
  { brand: "PUMA", size: "41", color: "#00FF88", img: "photo-1587563871167-1ee9c731aefb", accent: "#00FF88" },
  { brand: "NEW BAL.", size: "43", color: "#00FF88", img: "photo-1539185441755-769473a23570", accent: "#00FF88" },
  { brand: "CONVERSE", size: "39", color: "#00FF88", img: "photo-1463100099107-aa0980cbb901", accent: "#00FF88" },
];

const formal = [
  { brand: "CLARKS", size: "42", color: "#FFD700", img: "photo-1543163521-1bf539c55dd2", accent: "#FFD700" },
  { brand: "BROGUES", size: "43", color: "#FFD700", img: "photo-1614252235316-8c857d38b5f4", accent: "#FFD700" },
  { brand: "OXFORDS", size: "40", color: "#FFD700", img: "photo-1621996346565-e3dbc646d9a9", accent: "#FFD700" },
  { brand: "LOAFERS", size: "41", color: "#FFD700", img: "photo-1603808033192-082d6919d3e1", accent: "#FFD700" },
  { brand: "DERBY", size: "44", color: "#FFD700", img: "photo-1638247025967-b4e38f787b76", accent: "#FFD700" },
  { brand: "CHELSEA", size: "39", color: "#FFD700", img: "photo-1583743814966-8936f5b7be1a", accent: "#FFD700" },
];

export default function ShoeVault() {
  return (
    <section id="vault" style={{ padding: "6rem 1.5rem", background: "#141414", position: "relative", overflow: "hidden" }}>
      <div className="grid-overlay" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
      <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative", zIndex: 10 }}>
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
          <div>
            <p className="tracking-chrome" style={{ color: "#FFD700", fontSize: "0.75rem", marginBottom: "0.5rem", letterSpacing: "0.3em" }}>PREMIUM FOOTWEAR</p>
            <h2 className="display-font" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", color: "white", fontWeight: 500 }}>
              The <span style={{ color: "#FFD700" }}>Shoe</span> Vault
            </h2>
          </div>
        </div>

        <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div className="shoe-shelf" style={{ padding: "1.5rem", borderRadius: "2px" }}>
            <p className="tracking-chrome" style={{ fontSize: "0.625rem", color: "#00FF88", marginBottom: "1rem" }}>TIER 01 — LUXURY SNEAKERS</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: "1rem" }}>
              {sneakers.map((shoe, i) => <ShoeCard key={i} {...shoe} />)}
            </div>
          </div>
          <div className="shoe-shelf" style={{ padding: "1.5rem", borderRadius: "2px" }}>
            <p className="tracking-chrome" style={{ fontSize: "0.625rem", color: "#FFD700", marginBottom: "1rem" }}>TIER 02 — FORMAL & LEATHER</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: "1rem" }}>
              {formal.map((shoe, i) => <ShoeCard key={i} {...shoe} />)}
            </div>
          </div>
        </div>

        <div className="reveal" style={{ marginTop: "3rem", textAlign: "center" }}>
          <a href="tel:+254793606050" className="ghost-chrome pulse-glow tracking-chrome" style={{ display: "inline-block", padding: "1rem 2rem", fontSize: "0.75rem", fontWeight: 500, borderRadius: "2px", textDecoration: "none" }}>
            CALL TO RESERVE SIZE
          </a>
        </div>
      </div>
    </section>
  );
}
