import React from "react";

interface AngleProps {
  children: string;
  type?: "convex" | "reflex";
}

export const Angle: React.FC<AngleProps> = ({ children, type = "convex" }) => {
  const isSingleChar = children.length === 1;

  if (type === "reflex") {
    // 凹角 (文字の下に谷型 ◡ または v)
    return (
      <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", position: "relative", padding: "0 2px" }}>
        <span style={{ fontSize: "1.375rem", lineHeight: "1.2", paddingBottom: "2px" }}>{children}</span>
        <svg viewBox="0 0 100 20" style={{ width: isSingleChar ? "14px" : "100%", height: "8px", position: "absolute", bottom: "-6px", left: isSingleChar ? "50%" : 0, transform: isSingleChar ? "translateX(-50%)" : "none" }} preserveAspectRatio="none">
          <path d="M 5,2 L 50,15 L 95,2" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }

  // 凸角 (文字の上に山型 ^)
  return (
    <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", verticalAlign: "middle", position: "relative", padding: "0 2px" }}>
      <svg viewBox="0 0 100 20" style={{ width: isSingleChar ? "14px" : "100%", height: "8px", position: "absolute", top: "-5px", left: isSingleChar ? "50%" : 0, transform: isSingleChar ? "translateX(-50%)" : "none" }} preserveAspectRatio="none">
        <path d="M 5,18 L 50,5 L 95,18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ fontSize: "1.375rem", lineHeight: "1.2", paddingTop: "2px" }}>{children}</span>
    </span>
  );
};
