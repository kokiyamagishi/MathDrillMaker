import React from 'react';

export interface TapeDiagramProps {
  type?: 'single' | 'compare' | 'parts';
  totalLabel?: string;
  leftLabel?: string;
  rightLabel?: string;
  leftWidthPercent?: number; // 0 to 100
  // For compare type
  topBarLabel?: string;
  topBarValue?: string;
  topBarWidthPercent?: number;
  bottomBarLabel?: string;
  bottomBarValue?: string;
  bottomBarWidthPercent?: number;
  differenceLabel?: string;
  // For parts type
  totalParts?: number;
  highlightedParts?: number;
  label?: string;
  width?: number;
  color?: string;
}

export const TapeDiagram: React.FC<TapeDiagramProps> = ({
  type = 'single',
  totalLabel,
  leftLabel,
  rightLabel,
  leftWidthPercent = 60,
  topBarLabel,
  topBarValue,
  topBarWidthPercent = 50,
  bottomBarLabel,
  bottomBarValue,
  bottomBarWidthPercent = 80,
  differenceLabel,
  totalParts,
  highlightedParts,
  label,
  width: propWidth,
  color = '#2196F3',
}) => {
  if (totalParts !== undefined && totalParts > 0) {
    const displayWidth = propWidth || 400;
    const highlight = highlightedParts !== undefined ? highlightedParts : totalParts;
    const partsArray = Array.from({ length: totalParts });
    
    return (
      <div className="math-illustration" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', margin: '8px' }}>
        <div style={{ position: 'relative', width: displayWidth, height: '40px', display: 'flex', border: `2px solid ${color}`, borderRadius: '4px', overflow: 'hidden' }}>
          {partsArray.map((_, idx) => (
            <div 
              key={idx} 
              style={{ 
                flex: 1, 
                backgroundColor: idx < highlight ? color : '#E0E0E0', 
                borderRight: idx < totalParts - 1 ? '1px solid #757575' : 'none',
                opacity: idx < highlight ? 0.85 : 0.4
              }} 
            />
          ))}
        </div>
        {label && <span style={{ marginTop: '8px', fontWeight: 'bold', fontSize: '18px' }}>{label}</span>}
      </div>
    );
  }

  if (type === 'compare') {
    const minWidth = Math.min(topBarWidthPercent, bottomBarWidthPercent);
    const maxWidth = Math.max(topBarWidthPercent, bottomBarWidthPercent);
    const diffWidth = maxWidth - minWidth;
    
    return (
      <div className="math-illustration" style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px", marginBottom: "16px", width: "90%", margin: "16px auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", position: "relative" }}>
          <div style={{ minWidth: "90px", textAlign: "right", fontWeight: "normal", whiteSpace: "nowrap" }}>{topBarLabel}</div>
          <div style={{ flex: 1, position: "relative", height: "30px" }}>
            <div style={{ 
              height: "30px", 
              width: `${topBarWidthPercent}%`, 
              backgroundColor: "#BBDEFB", 
              border: "2px solid #2196F3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px"
            }}>
              {topBarValue}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", position: "relative" }}>
          <div style={{ minWidth: "90px", textAlign: "right", fontWeight: "normal", whiteSpace: "nowrap" }}>{bottomBarLabel}</div>
          <div style={{ flex: 1, position: "relative", height: "30px" }}>
            <div style={{ 
              height: "30px", 
              width: `${bottomBarWidthPercent}%`, 
              backgroundColor: "#C8E6C9", 
              border: "2px solid #4CAF50",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px"
            }}>
              {bottomBarValue}
            </div>
            
            {/* Dashed line to show difference start */}
            <div style={{
              position: "absolute",
              left: `${minWidth}%`,
              bottom: "100%",
              height: "40px",
              borderLeft: "2px dashed #757575",
              zIndex: 0
            }}></div>

            {/* Difference Label */}
            {differenceLabel && (
              <div style={{
                position: "absolute",
                left: `${minWidth}%`,
                width: `${diffWidth}%`,
                top: bottomBarWidthPercent > topBarWidthPercent ? "-25px" : "35px",
                textAlign: "center",
                color: "#E53935",
                fontWeight: "normal",
                whiteSpace: "nowrap",
                fontSize: "14px"
              }}>
                {"⟵ "}{differenceLabel}{" ⟶"}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Single type
  return (
    <div className="math-illustration" style={{ display: "flex", justifyContent: "center", marginTop: "32px", marginBottom: "24px", width: "100%" }}>
      <div style={{ width: "95%", height: "46px", backgroundColor: "#E3F2FD", border: "2px solid #2196F3", position: "relative" }}>
        {totalLabel && (
          <div style={{ position: "absolute", top: "-28px", width: "100%", display: "flex", justifyContent: "center" }}>
            <div style={{ 
              borderTop: "2px solid #2196F3", 
              borderLeft: "2px solid #2196F3", 
              borderRight: "2px solid #2196F3", 
              padding: "2px 16px", 
              backgroundColor: "#fff",
              borderTopLeftRadius: "6px", 
              borderTopRightRadius: "6px",
              fontWeight: "normal",
              color: "#1976D2",
              fontSize: "14px",
              whiteSpace: "nowrap"
            }}>
              {totalLabel}
            </div>
          </div>
        )}
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ 
            width: `${leftWidthPercent}%`, 
            borderRight: "2px dashed #2196F3", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            backgroundColor: "#BBDEFB",
            fontWeight: "normal",
            whiteSpace: "nowrap"
          }}>
            {leftLabel}
          </div>
          <div style={{ 
            width: `${100 - leftWidthPercent}%`, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            fontWeight: "normal",
            whiteSpace: "nowrap"
          }}>
            {rightLabel}
          </div>
        </div>
      </div>
    </div>
  );
};
