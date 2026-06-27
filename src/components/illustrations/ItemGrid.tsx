"use client";

import React, { useState, useEffect } from "react";
import { useEditor } from "../EditorContext";

interface ItemGridProps {
  item: string;
  count: number;
  columns?: number;
  backgroundColor?: string;
  emojiSize?: string;
  dataPath?: string;
}

export const ItemGrid: React.FC<ItemGridProps> = ({
  item,
  count,
  columns = 5,
  backgroundColor = "#F5F5F5",
  emojiSize = "24px",
  dataPath,
}) => {
  const { isEditing } = useEditor();
  const [localCount, setLocalCount] = useState(count);

  useEffect(() => {
    setLocalCount(count);
  }, [count]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
          width: "fit-content",
        }}
      >
        {Array.from({ length: localCount }).map((_, i) => (
          <div
            key={i}
            style={{
              fontSize: emojiSize,
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {item}
          </div>
        ))}
      </div>
      
      {isEditing && dataPath && (
        <input
          type="number"
          min={0}
          max={20}
          value={localCount}
          data-path={dataPath}
          data-type="number"
          onChange={(e) => setLocalCount(Number(e.target.value))}
          style={{
            width: "55px",
            padding: "4px",
            borderRadius: "6px",
            border: "2px solid #4caf50",
            backgroundColor: "#fff",
            color: "#333",
            fontWeight: "bold",
            textAlign: "center",
          }}
        />
      )}
    </div>
  );
};
