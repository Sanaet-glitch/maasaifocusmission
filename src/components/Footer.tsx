import { Facebook, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const col1 = [
  { label: "Who We Are", to: "/about" },
  { label: "Our Work", to: "/our-work" },
  { label: "Our Mission, Vision & Values", to: "/about" },
  { label: "Our Team", to: "/team" },
  { label: "Board of Directors", to: "/team" },
  { label: "Collaborations", to: "/collaborations" },
];
const col2 = ["Education", "Healthcare", "Livelihoods", "Community Development", "School Outreach", "Cultural Programs", "Recruitment"];
const col3quick = [
  { label: "Members Portal", to: "/contact" },
  { label: "Find Us", to: "/contact" },
  { label: "Careers", to: "/contact" },
  { label: "Accountability Statement", to: "/contact" },
];
const col3involved = [
  { label: "Donate", to: "/contact" },
  { label: "Volunteer", to: "/volunteer" },
  { label: "Partner With Us", to: "/partner" },
  { label: "News", to: "/stories" },
];

const Footer = () => {
  return (
    <footer className="w-screen relative">
      <div className="absolute inset-0 bg-[#2d3a0e]" />
      <div className="relative mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 pt-12 md:pt-16 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Contact */}
        <div>
          <img src="/assets/logo.png" alt="Maasai Focus Mission" className="h-12 md:h-[65px] object-contain mb-4" />
          <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-white">
            Questions?{" "}
            <Link to="/contact" className="text-[#c8922a]">Contact Us</Link>
          </p>
          <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-white my-3 md:my-4">
            P.O. Box XXXX, Kajiado, Kenya
          </p>
          <a href="mailto:info@maasaifocusmission.org" className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#c8922a] break-all">
            info@maasaifocusmission.org
          </a>
          <div className="flex gap-4 mt-4">
            <Facebook size={24} color="#c8922a" />
            <Twitter size={24} color="#c8922a" />
            <Youtube size={24} color="#c8922a" />
          </div>
          <Link to="/contact" className="block mt-6 font-['Inter',sans-serif] font-light text-sm md:text-base text-white">
            Privacy Policy
          </Link>
        </div>

        {/* About */}
        <div>
          <h4 className="font-['Inter',sans-serif] font-light text-base md:text-lg text-white mb-4">About</h4>
          {col1.map((l) => (
            <Link key={l.label} to={l.to} className="block font-['Inter',sans-serif] font-light text-base md:text-lg text-[#c8922a] my-3">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-['Inter',sans-serif] font-light text-base md:text-lg text-white mb-4">Programs & Services</h4>
          {col2.map((l) => (
            <Link key={l} to="/programs" className="block font-['Inter',sans-serif] font-light text-base md:text-lg text-[#c8922a] my-3">
              {l}
            </Link>
          ))}
        </div>

        {/* Quick Links + Get Involved */}
        <div>
          <h4 className="font-['Inter',sans-serif] font-light text-base md:text-lg text-white mb-4">Quick Links</h4>
          {col3quick.map((l) => (
            <Link key={l.label} to={l.to} className="block font-['Inter',sans-serif] font-light text-base md:text-lg text-[#c8922a] my-3">
              {l.label}
            </Link>
          ))}
          <h4 className="font-['Inter',sans-serif] font-light text-base md:text-lg text-white mt-8 mb-4">Get Involved</h4>
          {col3involved.map((l) => (
            <Link key={l.label} to={l.to} className="block font-['Inter',sans-serif] font-light text-base md:text-lg text-[#c8922a] my-3">
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative border-t border-white/10 px-6 sm:px-8 md:px-12 py-4">
        <p className="font-['Inter',sans-serif] font-light italic text-sm md:text-base text-white/70 text-left max-w-[1280px] mx-auto m-0">
          Maasai Focus Mission is a registered NGO in the Republic of Kenya. © 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
