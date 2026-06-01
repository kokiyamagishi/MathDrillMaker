import React from "react";

interface AnimalTableProps {
  data: { animal: string; emoji: string; count: React.ReactNode }[];
}

export const AnimalTable: React.FC<AnimalTableProps> = ({ data }) => {
  return (
    <div className="math-illustration" style={{ margin: "12px 0", overflowX: "auto" }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "center",
        border: "2px solid var(--color-ink)",
        fontFamily: "var(--font-lao)"
      }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid var(--color-ink)", padding: "8px", backgroundColor: "#f0f0f0" }}>
              ສັດ
            </th>
            {data.map((item, index) => (
              <th key={index} style={{ border: "1px solid var(--color-ink)", padding: "8px", backgroundColor: "#f0f0f0" }}>
                {item.emoji} {item.animal}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid var(--color-ink)", padding: "8px", fontWeight: "bold" }}>
              ຈຳນວນ(ໂຕ)
            </td>
            {data.map((item, index) => (
              <td key={index} style={{ border: "1px solid var(--color-ink)", padding: "8px", fontFamily: "var(--font-number)" }}>
                {item.count}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
