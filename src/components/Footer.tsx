import { Facebook, Twitter, Youtube } from "lucide-react";

const col1 = ["Who We Are", "Our Mission, Vision & Values", "Our Team", "Board of Directors", "Collaborations"];
const col2 = ["Education", "Healthcare", "Livelihoods", "Community Development", "School Outreach", "Discipleship", "Recruitment"];
const col3quick = ["Members Portal", "Find Us", "Careers", "Accountability Statement"];
const col3involved = ["Donate", "Volunteer", "Partner With Us", "News"];

const Footer = () => {
  return (
    <footer style={{ width: "100vw", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "#2d3a0e" }} />
      <div
        style={{
          position: "relative",
          width: 1280,
          maxWidth: "100%",
          margin: "0 auto",
          minHeight: 778.27,
          padding: "60px 24px 30px",
        }}
        className="grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {/* Contact */}
        <div>
          <img src="assets/logo.png" alt="Maasai Focus Mission" style={{ height: 65, objectFit: "contain", marginBottom: 16 }} />
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 20.608, color: "#fff" }}>
            Questions?{" "}
            <a href="#" style={{ color: "#c8922a" }}>
              Contact Us
            </a>
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 20.608, color: "#fff", margin: "16px 0" }}>
            P.O. Box XXXX, Kajiado, Kenya
          </p>
          <a href="mailto:info@maasaifocusmission.org" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 20.608, color: "#c8922a" }}>
            info@maasaifocusmission.org
          </a>
          <div className="flex gap-4 mt-4">
            <Facebook size={24} color="#c8922a" />
            <Twitter size={24} color="#c8922a" />
            <Youtube size={24} color="#c8922a" />
          </div>
          <a href="#" className="block mt-6" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16, color: "#fff" }}>
            Privacy Policy
          </a>
        </div>

        {/* About */}
        <div>
          <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 20.608, color: "#fff", marginBottom: 16 }}>About</h4>
          {col1.map((l) => (
            <a key={l} href="#" className="block" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 20.608, lineHeight: "28.8512px", color: "#c8922a", margin: "16px 0" }}>
              {l}
            </a>
          ))}
        </div>

        {/* Programs */}
        <div>
          <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 20.608, color: "#fff", marginBottom: 16 }}>Programs & Services</h4>
          {col2.map((l) => (
            <a key={l} href="#" className="block" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 20.608, lineHeight: "28.8512px", color: "#c8922a", margin: "16px 0" }}>
              {l}
            </a>
          ))}
        </div>

        {/* Quick Links + Get Involved */}
        <div>
          <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 20.608, color: "#fff", marginBottom: 16 }}>Quick Links</h4>
          {col3quick.map((l) => (
            <a key={l} href="#" className="block" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 20.608, lineHeight: "28.8512px", color: "#c8922a", margin: "16px 0" }}>
              {l}
            </a>
          ))}
          <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 20.608, color: "#fff", marginTop: 32, marginBottom: 16 }}>Get Involved</h4>
          {col3involved.map((l) => (
            <a key={l} href="#" className="block" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 20.608, lineHeight: "28.8512px", color: "#c8922a", margin: "16px 0" }}>
              {l}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright bar */}
      <div style={{ position: "relative", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "16px 24px" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontStyle: "italic", fontSize: 16, color: "rgba(255,255,255,0.7)", textAlign: "left", maxWidth: 1280, margin: "0 auto" }}>
          Copyright © 2025 Maasai Focus Mission. Registered NGO, Kenya.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
