const MissionFeature = () => {
  return (
    <section style={{ width: "100vw", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "#b5411a" }} />
      <div
        className="relative mx-auto"
        style={{ width: 1280, maxWidth: "100%", minHeight: 478.02 }}
      >
        {/* Desktop layout */}
        <div className="hidden md:block relative" style={{ minHeight: 478.02 }}>
          <div style={{ position: "absolute", width: 493.2, height: 430.21, background: "#6b6b1a", left: 27, top: 0 }} />
          <div style={{ position: "absolute", width: 165.6, height: 149.53, background: "#4a5e1f", left: 460, top: 8 }} />
          <div style={{ position: "absolute", width: 203.4, height: 196.31, background: "#2d3a0e", left: 1052, bottom: 0, zIndex: 0 }} />

          <div style={{ position: "absolute", left: 633, top: 47, width: 544, zIndex: 1 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 37.504, lineHeight: "42.4845px", color: "#ffffff", margin: 0 }}>
              Rooted in community. Driven by faith. Maasai Focus Mission walks alongside the Maasai people — building lasting change from within.
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 20.608, lineHeight: "28.8512px", color: "#2d3a0e", marginTop: 16 }}>
              Discover how we work and where your support goes.
            </p>
            <div className="mt-6">
              <a href="#" style={{ background: "#c8922a", color: "#2d3a0e", fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: 19.84, padding: "15.872px 33.728px", borderRadius: 300, display: "inline-block" }}>
                Explore Our Programs
              </a>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden p-6">
          <div className="mx-auto" style={{ maxWidth: 337.5, height: 237.6, background: "#6b6b1a" }} />
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 30, lineHeight: "36px", color: "#ffffff", marginTop: 24 }}>
            Rooted in community. Driven by faith. Maasai Focus Mission walks alongside the Maasai people — building lasting change from within.
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 18, color: "#2d3a0e", marginTop: 12 }}>
            Discover how we work and where your support goes.
          </p>
          <a href="#" className="inline-block mt-4" style={{ background: "#c8922a", color: "#2d3a0e", fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: 19.84, padding: "15.872px 33.728px", borderRadius: 300 }}>
            Explore Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default MissionFeature;
