import Link from 'next/link';

export default function Home() {
  return (
    <main className="animated-bg" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px", fontFamily: "var(--font-lao)" }}>
      <div className="glass-card" style={{ padding: "60px 40px", borderRadius: "24px", textAlign: "center", maxWidth: "900px", width: "100%", margin: "0 auto" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px", color: "var(--color-accent-dark)", fontWeight: "800", letterSpacing: "-0.5px" }}>
          {"ສູໂຣໂບ ກັບ ການຜະຈົນໄພ！"}
          <br />
          <span style={{ fontSize: "1.8rem", color: "var(--color-primary)", fontWeight: "600", display: "block", marginTop: "10px" }}>Surobo and the Adventure!</span>
        </h1>
        <p style={{ fontSize: "1.3rem", marginBottom: "50px", color: "var(--color-text-light)", fontWeight: "500" }}>
          {"ແບບຝຶກຫັດຄະນິດສາດ (Math Drill Maker)"}
        </p>

        {/* Primary School Section */}
        <h2 style={{ fontSize: "1.8rem", color: "var(--color-accent)", margin: "30px 0 20px 0", borderBottom: "2px solid #ddd", paddingBottom: "8px", textAlign: "left" }}>
          {"ຊັ້ນປະຖົມສຶກສາ (Primary School)"}
        </h2>
        <div style={{ display: "flex", gap: "20px", justifyContent: "flex-start", flexWrap: "wrap", marginBottom: "40px" }}>
          {[
            { href: "/grade1", lao: "ປ.1", jp: "小学1年生", color: "#4CAF50" },
            { href: "/grade2", lao: "ປ.2", jp: "小学2年生", color: "#2196F3" },
            { href: "/grade3", lao: "ປ.3", jp: "小学3年生", color: "#9C27B0" },
            { href: "/grade4", lao: "ປ.4", jp: "小学4年生", color: "#FF9800" },
            { href: "/grade5", lao: "ປ.5", jp: "小学5年生", color: "#009688" },
          ].map((grade) => (
            <Link key={grade.href} href={grade.href} style={{ textDecoration: "none" }}>
              <div className="glass-card" style={{
                padding: "20px",
                borderRadius: "16px",
                color: grade.color,
                width: "140px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderTop: `4px solid ${grade.color}`
              }}>
                <h3 style={{ fontSize: "2rem", marginBottom: "4px", fontWeight: "800" }}>{grade.lao}</h3>
                <p style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--color-text-light)" }}>{grade.jp}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Secondary School Section */}
        <h2 style={{ fontSize: "1.8rem", color: "var(--color-primary)", margin: "30px 0 20px 0", borderBottom: "2px solid #ddd", paddingBottom: "8px", textAlign: "left" }}>
          {"ຊັ້ນມັດທະຍົມສຶກສາ (Secondary School)"}
        </h2>
        <div style={{ display: "flex", gap: "20px", justifyContent: "flex-start", flexWrap: "wrap" }}>
          {[
            { href: "/secondary1", lao: "ມ.1", jp: "中学1年生", color: "#00BCD4" },
            { href: "/secondary2", lao: "ມ.2", jp: "中学2年生", color: "#3F51B5" },
            { href: "/secondary3", lao: "ມ.3", jp: "中学3年生", color: "#E91E63" },
            { href: "/secondary4", lao: "ມ.4", jp: "中学4年生", color: "#607D8B" },
          ].map((grade) => (
            <Link key={grade.href} href={grade.href} style={{ textDecoration: "none" }}>
              <div className="glass-card" style={{
                padding: "20px",
                borderRadius: "16px",
                color: grade.color,
                width: "140px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderTop: `4px solid ${grade.color}`
              }}>
                <h3 style={{ fontSize: "2rem", marginBottom: "4px", fontWeight: "800" }}>{grade.lao}</h3>
                <p style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--color-text-light)" }}>{grade.jp}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
