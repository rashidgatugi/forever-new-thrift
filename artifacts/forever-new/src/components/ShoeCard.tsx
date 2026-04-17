interface ShoeCardProps {
  brand: string;
  size: string;
  color: string;
  img: string;
  accent: string;
}

export default function ShoeCard({ brand, size, color, img, accent }: ShoeCardProps) {
  return (
    <div style={{ cursor: "pointer", textAlign: "center", position: "relative" }}>
      <div style={{
        background: "linear-gradient(135deg, rgba(30,30,30,0.8), rgba(15,15,15,0.9))",
        border: `1px solid ${accent}30`,
        borderRadius: "4px",
        padding: "1rem",
        marginBottom: "0.5rem",
        transition: "all 0.3s ease",
        overflow: "hidden",
        aspectRatio: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.borderColor = `${accent}60`;
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${accent}20`;
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.borderColor = `${accent}30`;
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        }}
      >
        <img
          src={`https://images.unsplash.com/${img}?w=200&q=80`}
          alt={brand}
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7, borderRadius: "2px" }}
          loading="lazy"
        />
      </div>
      <p style={{ color: accent, fontSize: "0.625rem", letterSpacing: "0.1em", fontWeight: 500 }}>{brand}</p>
      <p style={{ color: "rgba(224,224,224,0.5)", fontSize: "0.625rem" }}>SZ {size}</p>
    </div>
  );
}
