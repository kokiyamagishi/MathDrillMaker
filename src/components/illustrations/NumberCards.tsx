import React from "react";

interface NumberCardsProps {
  thousands?: number;
  hundreds?: number;
  tens?: number;
  ones?: number;
}

export const NumberCards: React.FC<NumberCardsProps> = ({
  thousands = 0,
  hundreds = 0,
  tens = 0,
  ones = 0,
}) => {
  const renderCard = (val: number, label: string, color: string, bgColor: string, count: number) => {
    if (count <= 0) return null;
    return (
      <div style={{ display: "flex", gap: "8px", flexWrap: "nowrap", justifyContent: "center" }}>
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={`${val}-${i}`}
            style={{
              width: val > 100 ? "60px" : "40px",
              height: "40px",
              backgroundColor: bgColor,
              border: `2px solid ${color}`,
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: val > 100 ? "18px" : "20px",
              color: color,
              fontFamily: "var(--font-number)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            {label}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="math-illustration" style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", gap: "12px", justifyContent: "center" }}>
      {renderCard(1000, "1000", "#D32F2F", "#FFEBEE", thousands)}
      {renderCard(100, "100", "#1976D2", "#E3F2FD", hundreds)}
      {renderCard(10, "10", "#388E3C", "#E8F5E9", tens)}
      {renderCard(1, "1", "#F57C00", "#FFF3E0", ones)}
    </div>
  );
};
