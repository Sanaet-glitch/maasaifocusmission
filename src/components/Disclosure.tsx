const Disclosure = () => {
  return (
    <section style={{ width: "100vw", position: "relative", background: "#ffffff", borderTop: "1px solid #e5e5e5" }}>
      <div
        style={{
          width: 1280,
          maxWidth: "100%",
          margin: "0 auto",
          padding: "40px 88px",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 16,
            lineHeight: "24px",
            color: "#2d3a0e",
            textAlign: "center",
            margin: 0,
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
