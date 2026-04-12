import { useState } from "react";
import { Menu, X, Accessibility } from "lucide-react";

const navRow1 = ["About", "Our Work", "Programs", "Stories", "News"];
const navRow2 = ["Trainings & Events", "Careers", "Volunteer", "2025 Community Forum"];
const navRow3 = ["2025 School Outreach Conference", "Communities of Practice"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-screen z-50"
      style={{ height: 168.64, background: "#2d3a0e" }}
    >
      <div
        className="flex items-center justify-between h-full"
        style={{ paddingLeft: 88, paddingRight: 88 }}
      >
        {/* Logo */}
        <div
          className="flex-shrink-0 font-bold tracking-tight"
          style={{
            width: 265.59,
            height: 64.98,
            fontFamily: "'Playfair Display', serif",
            fontSize: 22,
            color: "#c8922a",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src="assets/logo.png" alt="Maasai Focus Mission" style={{ height: 65, objectFit: "contain" }} />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-col items-center gap-[8px] pt-[4px]">
          {[navRow1, navRow2, navRow3].map((row, ri) => (
            <div key={ri} className="flex flex-wrap gap-x-[20px] gap-y-[8px] justify-center">
              {row.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white no-underline"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: 19.072,
                    padding: "1.9072px 0",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* CTA + Accessibility */}
        <div className="hidden lg:flex items-center gap-[10px]">
          <a
            href="#"
            style={{
              background: "#c8922a",
              color: "#2d3a0e",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: 19.84,
              padding: "15.872px 33.728px",
              borderRadius: 300,
            }}
          >
            Donate Now
          </a>
          <button
            className="flex items-center justify-center"
            style={{
              width: 44,
              height: 44,
              borderRadius: 9999,
              border: "2px solid white",
              background: "transparent",
              color: "white",
            }}
          >
            <Accessibility size={20} />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full" style={{ background: "#2d3a0e", padding: "30px 38px" }}>
          {[...navRow1, ...navRow2, ...navRow3].map((link) => (
            <a
              key={link}
              href="#"
              className="block text-white"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 25,
                marginBottom: 16,
                lineHeight: "0.9em",
                fontWeight: 500,
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="inline-block mt-4"
            style={{
              background: "#c8922a",
              color: "#2d3a0e",
              fontWeight: 900,
              fontSize: 19.84,
              padding: "15.872px 33.728px",
              borderRadius: 300,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Donate Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
