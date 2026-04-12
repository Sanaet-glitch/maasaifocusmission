import { useState } from "react";
import { Menu, X, Accessibility } from "lucide-react";

const navRow1 = ["About", "Our Work", "Programs", "Stories", "News"];
const navRow2 = ["Trainings & Events", "Careers", "Volunteer", "2025 Community Forum"];
const navRow3 = ["2025 School Outreach Conference", "Communities of Practice"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-screen z-50 bg-[#2d3a0e] h-[100px] md:h-[130px] lg:h-[168px]">
      <div className="flex items-center justify-between h-full px-4 sm:px-6 md:px-10 lg:px-[88px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="assets/logo.png"
            alt="Maasai Focus Mission"
            className="h-10 md:h-[50px] lg:h-[65px] object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-col items-center gap-[8px] pt-[4px]">
          {[navRow1, navRow2, navRow3].map((row, ri) => (
            <div key={ri} className="flex flex-wrap gap-x-[20px] gap-y-[8px] justify-center">
              {row.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white no-underline font-['Inter',sans-serif] font-medium text-[15px] xl:text-[19px] py-[2px]"
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
            className="bg-[#c8922a] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-base xl:text-[19.84px] px-6 xl:px-[33.728px] py-3 xl:py-[15.872px] rounded-full inline-block"
          >
            Donate Now
          </a>
          <button className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-white bg-transparent text-white">
            <Accessibility size={20} />
          </button>
        </div>

        {/* Mobile/Tablet hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile/Tablet menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#2d3a0e] px-6 py-6 md:px-10 md:py-8 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {[...navRow1, ...navRow2, ...navRow3].map((link) => (
              <a
                key={link}
                href="#"
                className="block text-white font-['Inter',sans-serif] text-lg md:text-xl font-medium leading-tight"
              >
                {link}
              </a>
            ))}
          </div>
          <a
            href="#"
            className="inline-block mt-6 bg-[#c8922a] text-[#2d3a0e] font-black text-lg px-8 py-4 rounded-full font-['Inter',sans-serif]"
          >
            Donate Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
