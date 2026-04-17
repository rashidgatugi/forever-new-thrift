import type { RefObject } from "react";
import ProductCard from "./ProductCard";

const womenItems = [
  { cat: "JACKET", name: "Vintage Leather", img: "photo-1591047139829-d91aecb6caea", tag: "NEW IN" },
  { cat: "DENIM", name: "High-Waist Jeans", img: "photo-1541099649107-f6ad13856c24" },
  { cat: "BLAZER", name: "Office Classic", img: "photo-1551488852-0801751ac367", tag: "HOT" },
  { cat: "DRESS", name: "Evening Wear", img: "photo-1594633312681-425c7b97ccd1" },
  { cat: "COAT", name: "Trench Style", img: "photo-1591047139829-d91aecb6caea" },
  { cat: "SKIRT", name: "Pencil Cut", img: "photo-1541099649107-f6ad13856c24" },
  { cat: "TOP", name: "Silk Blouse", img: "photo-1551488852-0801751ac367" },
  { cat: "CARDIGAN", name: "Knitwear", img: "photo-1594633312681-425c7b97ccd1", tag: "RARE" },
  { cat: "JEANS", name: "Slim Fit", img: "photo-1541099649107-f6ad13856c24" },
  { cat: "JACKET", name: "Bomber", img: "photo-1591047139829-d91aecb6caea" },
  { cat: "DRESS", name: "Cocktail", img: "photo-1594633312681-425c7b97ccd1" },
  { cat: "BLOUSE", name: "Chiffon", img: "photo-1551488852-0801751ac367" },
];

const menItems = [
  { cat: "SUIT", name: "Navy Classic", img: "photo-1602810318383-e386cc2a3ccf", tag: "HOT" },
  { cat: "SHIRT", name: "Oxford Blue", img: "photo-1598033129183-c424f2ce8c04" },
  { cat: "BLAZER", name: "Charcoal Grey", img: "photo-1594938298603-c8148c4dae35", tag: "NEW IN" },
  { cat: "POLO", name: "Cotton Pique", img: "photo-1620012259985-6c0565e5d7d6" },
  { cat: "TROUSERS", name: "Chino Fit", img: "photo-1602810318383-e386cc2a3ccf" },
  { cat: "JACKET", name: "Bomber Style", img: "photo-1598033129183-c424f2ce8c04" },
  { cat: "SHIRT", name: "Linen White", img: "photo-1594938298603-c8148c4dae35" },
  { cat: "SUIT", name: "Black Tie", img: "photo-1602810318383-e386cc2a3ccf", tag: "RARE" },
];

const kidsItems = [
  { cat: "AGES 4-6", name: "Playwear Set", img: "photo-1503944583220-79d8926ad5e2" },
  { cat: "AGES 7-10", name: "School Uniform", img: "photo-1519238263496-636c726470d7", tag: "NEW IN" },
  { cat: "AGES 11-14", name: "Casual Wear", img: "photo-1503944583220-79d8926ad5e2" },
  { cat: "TEENS", name: "Trendy Styles", img: "photo-1519238263496-636c726470d7" },
  { cat: "KIDS", name: "Party Dress", img: "photo-1503944583220-79d8926ad5e2" },
  { cat: "BABY", name: "Onesies", img: "photo-1519238263496-636c726470d7" },
];

interface CollectionsProps {
  collectionsRef: RefObject<HTMLElement>;
}

export default function Collections({ collectionsRef }: CollectionsProps) {
  return (
    <section id="collections" ref={collectionsRef as RefObject<HTMLDivElement>} style={{ padding: "6rem 1.5rem", background: "#0A0A0A", position: "relative" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
          <div>
            <p className="tracking-chrome" style={{ color: "#00FF88", fontSize: "0.75rem", marginBottom: "0.5rem", letterSpacing: "0.3em" }}>ORGANIZED EFFICIENCY</p>
            <h2 className="display-font" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", color: "white", fontWeight: 500 }}>
              The <span style={{ color: "#FFD700" }}>Supermarket</span> of Style
            </h2>
          </div>
          <div style={{ display: "none" }} className="desc-md">
            <p className="tracking-chrome" style={{ color: "rgba(224,224,224,0.5)", fontSize: "0.75rem", textAlign: "right" }}>DENSELY VARIED</p>
            <p className="tracking-chrome" style={{ color: "rgba(224,224,224,0.5)", fontSize: "0.75rem", textAlign: "right" }}>HYPER-ORGANIZED</p>
          </div>
        </div>
        <style>{`@media (min-width: 768px) { .desc-md { display: block !important; } }`}</style>

        <CategorySection title="WOMEN'S COLLECTIONS" sub="Jackets & Denim Wall" items={womenItems} />
        <CategorySection title="GENTLEMEN'S COLLECTIONS" sub="Shirts & Suits Section" items={menItems} />
        <CategorySection title="KIDS' COLLECTIONS" sub="Youth Apparel Section" items={kidsItems} />
      </div>
    </section>
  );
}

function CategorySection({ title, sub, items }: { title: string; sub: string; items: typeof womenItems }) {
  return (
    <>
      <div className="reveal" style={{ marginBottom: "1rem" }}>
        <h3 className="display-font" style={{ fontSize: "1.5rem", color: "white", fontWeight: 500 }}>{title}</h3>
        <p style={{ color: "rgba(224,224,224,0.5)", fontSize: "0.75rem", marginTop: "0.25rem", letterSpacing: "0.05em" }}>{sub}</p>
      </div>
      <div className="supermarket-grid reveal" style={{ marginBottom: "4rem" }}>
        {items.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
      </div>
    </>
  );
}
