import { useEffect, useState, useRef } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import ShoeVault from "@/components/ShoeVault";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";
import FabMenu from "@/components/FabMenu";
import BranchModal from "@/components/BranchModal";
import StickyAssist from "@/components/StickyAssist";
import MobileMenu from "@/components/MobileMenu";

export default function App() {
  const [fabOpen, setFabOpen] = useState(false);
  const [branchOpen, setBranchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const collectionsRef = useRef<HTMLElement>(null);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Sticky assist bar - show when in collections section
  useEffect(() => {
    const handleScroll = () => {
      const collectionsEl = document.getElementById("collections");
      if (!collectionsEl) return;
      const rect = collectionsEl.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      setStickyVisible(inView);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openBranch = () => {
    setBranchOpen(true);
    setFabOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <div className="antialiased" style={{ background: "#0A0A0A", color: "#E0E0E0" }}>
      <Nav
        onAssistance={openBranch}
        onMobileMenu={() => setMobileMenuOpen(true)}
      />
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onAssistance={openBranch}
      />
      <Hero onVip={openBranch} />
      <Collections collectionsRef={collectionsRef} />
      <ShoeVault />
      <Locations onSelectBranch={openBranch} />
      <Footer />

      <FabMenu
        open={fabOpen}
        onToggle={() => setFabOpen((v) => !v)}
        onBranchSelect={openBranch}
      />

      <BranchModal open={branchOpen} onClose={() => setBranchOpen(false)} />

      <StickyAssist visible={stickyVisible} />
    </div>
  );
}
