const Disclosure = () => {
  return (
    <section style={{ width: "100vw", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "#ffffff" }} />
      <div
        style={{
          position: "relative",
          width: 1280,
          maxWidth: "100%",
          margin: "0 auto",
          minHeight: 127.94,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px 40px",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 20.608,
            lineHeight: "28.8512px",
            color: "#2d3a0e",
            textAlign: "center",
          }}
        >
          © 2025 All Rights Reserved Maasai Focus Mission. Registered NGO, Kenya. This website
          represents the work of Maasai Focus Mission. The contents are those of the organization
          and do not necessarily represent any endorsement by the Government of Kenya.
        </p>
      </div>
    </section>
  );
};

export default Disclosure;
