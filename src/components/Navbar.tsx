import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Accessibility } from "lucide-react";

const linkMap: Record<string, string> = {
  About: "/about",
  Programs: "/programs",
  "Find Us": "/contact",
  Careers: "/contact",
  Volunteer: "/contact",
  "Trainings & Events": "/contact",
};

const navRow1 = ["About", "Our Work", "Programs", "Stories", "News"];
const navRow2 = ["Trainings & Events", "Careers", "Volunteer", "2025 Community Forum"];
const navRow3 = ["2025 School Outreach Conference", "Communities of Practice"];

const NavItem = ({ link }: { link: string }) => {
  const to = linkMap[link];
  const cls = "text-white no-underline font-['Inter',sans-serif] font-medium text-[15px] xl:text-[19px] py-[2px]";
  if (to) return <Link to={to} className={cls}>{link}</Link>;
  return <a href="#" className={cls}>{link}</a>;
};

const MobileNavItem = ({ link, onClick }: { link: string; onClick: () => void }) => {
  const to = linkMap[link];
  const cls = "block text-white font-['Inter',sans-serif] text-lg md:text-xl font-medium leading-tight";
  if (to) return <Link to={to} className={cls} onClick={onClick}>{link}</Link>;
  return <a href="#" className={cls}>{link}</a>;
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-screen z-50 bg-[#2d3a0e] h-[100px] md:h-[130px] lg:h-[168px]">
      <div className="flex items-center justify-between h-full px-4 sm:px-6 md:px-10 lg:px-[88px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="/assets/logo.png"
              alt="Maasai Focus Mission"
              className="h-10 md:h-[50px] lg:h-[65px] object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-col items-center gap-[8px] pt-[4px]">
          {[navRow1, navRow2, navRow3].map((row, ri) => (
            <div key={ri} className="flex flex-wrap gap-x-[20px] gap-y-[8px] justify-center">
              {row.map((link) => (
                <NavItem key={link} link={link} />
              ))}
            </div>
          ))}
        </div>

        {/* CTA + Accessibility */}
        <div className="hidden lg:flex items-center gap-[10px]">
          <Link
            to="/contact"
            className="bg-[#c8922a] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-base xl:text-[19.84px] px-6 xl:px-[33.728px] py-3 xl:py-[15.872px] rounded-full inline-block"
          >
            Donate Now
          </Link>
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
              <MobileNavItem key={link} link={link} onClick={() => setMenuOpen(false)} />
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-[#c8922a] text-[#2d3a0e] font-black text-lg px-8 py-4 rounded-full font-['Inter',sans-serif]"
          >
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
