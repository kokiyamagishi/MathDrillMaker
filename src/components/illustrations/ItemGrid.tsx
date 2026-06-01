import React from "react";

interface ItemGridProps {
  item: string;
  count: number;
  columns?: number;
  backgroundColor?: string;
  emojiSize?: string;
}

export const ItemGrid: React.FC<ItemGridProps> = ({ item, count, columns = 5, backgroundColor = "#F5F5F5", emojiSize = "24px" }) => {
  return (
    <div
      className="math-illustration item-grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "4px",
        backgroundColor: backgroundColor,
        padding: "8px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        border: "1px solid #E0E0E0",
        width: "fit-content"
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{ fontSize: emojiSize, textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {item}
        </div>
      ))}
    </div>
  );
};
