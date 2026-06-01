import React from 'react';

export interface LaoBanknoteProps {
  amount: 500 | 1000 | 2000 | 5000 | 10000;
  count?: number;
  width?: number;
}

export const LaoBanknote: React.FC<LaoBanknoteProps> = ({ amount, count = 1, width = 120 }) => {
  let color = "#E0E0E0";
  let textColor = "#000";

  switch (amount) {
    case 500:
      color = "#FFCDD2"; // Pinkish Red
      textColor = "#C62828";
      break;
    case 1000:
      color = "#BBDEFB"; // Blue
      textColor = "#1565C0";
      break;
    case 2000:
      color = "#F8BBD0"; // Pink
      textColor = "#AD1457";
      break;
    case 5000:
      color = "#FFF59D"; // Yellow
      textColor = "#F57F17";
      break;
    case 10000:
      color = "#B2DFDB"; // Teal/Green
      textColor = "#00695C";
      break;
  }

  const height = width * 0.45;

  const Note = () => (
    <div className="math-illustration" style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: color,
      border: `2px solid ${textColor}`,
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      position: "relative",
      boxSizing: "border-box"
    }}>
      <div style={{ fontSize: `${width * 0.12}px`, fontWeight: "bold", color: textColor }}>{amount}</div>
      <div style={{ fontSize: `${width * 0.1}px`, fontWeight: "bold", color: textColor }}>ກີບ</div>
      
      {/* Center circle */}
      <div style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: `${height * 0.6}px`,
        height: `${height * 0.6}px`,
        borderRadius: "50%",
        border: `1px dashed ${textColor}`,
        opacity: 0.5
      }}></div>
    </div>
  );

  if (count === 1) {
    return <Note />;
  }

  // Stack them
  return (
    <div className="math-illustration" style={{ position: "relative", width: `${width + (count - 1) * 10}px`, height: `${height + (count - 1) * 5}px` }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{ position: "absolute", top: `${i * 5}px`, left: `${i * 10}px`, zIndex: i }}>
          <Note />
        </div>
      ))}
    </div>
  );
};
