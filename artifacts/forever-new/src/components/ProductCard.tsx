interface ProductCardProps {
  cat: string;
  name: string;
  img: string;
  tag?: string;
}

export default function ProductCard({ cat, name, img, tag }: ProductCardProps) {
  return (
    <div className="product-card" style={{ aspectRatio: "3/4", cursor: "pointer", borderRadius: "2px" }}>
      <div className="hanger-line" />
      <div style={{ height: "100%", background: "linear-gradient(180deg, rgba(42,42,42,0.2), #141414)", padding: "0.75rem", display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, borderRadius: "2px", marginBottom: "0.5rem", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, rgba(42,42,42,0.3), rgba(15,15,15,0.3))" }}>
          <img
            src={`https://images.unsplash.com/${img}?w=300&q=80`}
            alt={name}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.7, transition: "opacity 0.3s ease" }}
            onMouseEnter={e => { (e.target as HTMLImageElement).style.opacity = "0.9"; }}
            onMouseLeave={e => { (e.target as HTMLImageElement).style.opacity = "0.7"; }}
            loading="lazy"
          />
          {tag && (
            <div style={{ position: "absolute", top: "0.5rem", left: "0.5rem", background: "rgba(0,255,136,0.15)", border: "1px solid rgba(0,255,136,0.4)", borderRadius: "2px", padding: "0.125rem 0.375rem" }}>
              <span style={{ fontSize: "0.5rem", color: "#00FF88", letterSpacing: "0.1em" }}>{tag}</span>
            </div>
          )}
        </div>
        <p className="tracking-chrome" style={{ fontSize: "0.625rem", color: "#00FF88" }}>{cat}</p>
        <p style={{ fontSize: "0.75rem", color: "rgba(224,224,224,0.7)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</p>
      </div>
    </div>
  );
}
