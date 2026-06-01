import React from "react";

interface FruitGraphProps {
  data: { fruit: string; emoji: string; count: number }[];
}

export const FruitGraph: React.FC<FruitGraphProps> = ({ data }) => {
  return (
    <div
      className="math-illustration"
      style={{
        border: "2px solid var(--color-ink)",
        borderRadius: "var(--radius-md)",
        padding: "8px 12px",
        margin: "0",
        backgroundColor: "#fafafa",
      }}
    >
      <h4
        style={{
          textAlign: "left",
          marginBottom: "8px",
          fontFamily: "var(--font-lao)",
          fontSize: "var(--text-base)",
        }}
      >
        ໝາກໄມ້ທີ່ມັກທີ່ສຸດ
      </h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {data.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "70px",
                fontFamily: "var(--font-lao)",
                fontSize: "var(--text-sm)",
                textAlign: "left",
                paddingRight: "8px",
                borderRight: "2px solid var(--color-ink)",
                lineHeight: 1.2,
              }}
            >
              {item.fruit}
            </div>
            <div
              style={{
                display: "flex",
                gap: "4px",
                paddingLeft: "8px",
                flex: 1,
                flexWrap: "wrap",
              }}
            >
              {Array.from({ length: item.count }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "24px",
                    height: "24px",
                    border: "1px solid #ddd",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    fontSize: "14px",
                  }}
                >
                  {item.emoji}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
