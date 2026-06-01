import React from 'react';

type ShapeType = 'triangle' | 'quadrilateral' | 'rectangle' | 'square' | 'rightTriangle';

interface ShapeProps {
  type: ShapeType;
  width?: number;
  height?: number;
  color?: string;
  label?: string;
  showRightAngle?: boolean;
  sideLabels?: { top?: string, right?: string, bottom?: string, left?: string };
  rotation?: number;
  size?: number;
}

export const Shape: React.FC<ShapeProps> = ({ 
  type, 
  width: propWidth, 
  height: propHeight, 
  color = '#E3F2FD', 
  label,
  showRightAngle = false,
  sideLabels = {},
  rotation = 0,
  size
}) => {
  const width = size || propWidth || 100;
  const height = size || propHeight || 100;
  const strokeColor = '#1976D2';
  const strokeWidth = 3;

  const renderShape = () => {
    switch (type) {
      case 'triangle':
        return (
          <polygon 
            points={`${width/2},10 ${width-10},${height-10} 10,${height-10}`}
            fill={color}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        );
      case 'rightTriangle':
        return (
          <g>
            <polygon 
              points={`10,10 10,${height-10} ${width-10},${height-10}`}
              fill={color}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {showRightAngle && (
              <polyline 
                points={`10,${height-30} 30,${height-30} 30,${height-10}`}
                fill="none"
                stroke="#E53935"
                strokeWidth={2}
              />
            )}
          </g>
        );
      case 'quadrilateral':
        return (
          <polygon 
            points={`20,10 ${width-10},30 ${width-30},${height-10} 10,${height-30}`}
            fill={color}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        );
      case 'rectangle':
        return (
          <g>
            <rect 
              x="10" y="10" 
              width={width-20} height={height-20}
              fill={color}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {showRightAngle && (
              <>
                <polyline points={`10,30 30,30 30,10`} fill="none" stroke="#E53935" strokeWidth={2} />
                <polyline points={`${width-30},10 ${width-30},30 ${width-10},30`} fill="none" stroke="#E53935" strokeWidth={2} />
                <polyline points={`${width-10},${height-30} ${width-30},${height-30} ${width-30},${height-10}`} fill="none" stroke="#E53935" strokeWidth={2} />
                <polyline points={`30,${height-10} 30,${height-30} 10,${height-30}`} fill="none" stroke="#E53935" strokeWidth={2} />
              </>
            )}
          </g>
        );
      case 'square':
        // Ensure square actually is square visually
        const size = Math.min(width, height) - 20;
        return (
          <g>
            <rect 
              x={(width - size) / 2} y={(height - size) / 2} 
              width={size} height={size}
              fill={color}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
            {showRightAngle && (
              <>
                <polyline points={`${(width - size) / 2},${(height - size) / 2 + 20} ${(width - size) / 2 + 20},${(height - size) / 2 + 20} ${(width - size) / 2 + 20},${(height - size) / 2}`} fill="none" stroke="#E53935" strokeWidth={2} />
                <polyline points={`${(width + size) / 2 - 20},${(height - size) / 2} ${(width + size) / 2 - 20},${(height - size) / 2 + 20} ${(width + size) / 2},${(height - size) / 2 + 20}`} fill="none" stroke="#E53935" strokeWidth={2} />
                <polyline points={`${(width + size) / 2},${(height + size) / 2 - 20} ${(width + size) / 2 - 20},${(height + size) / 2 - 20} ${(width + size) / 2 - 20},${(height + size) / 2}`} fill="none" stroke="#E53935" strokeWidth={2} />
                <polyline points={`${(width - size) / 2 + 20},${(height + size) / 2} ${(width - size) / 2 + 20},${(height + size) / 2 - 20} ${(width - size) / 2},${(height + size) / 2 - 20}`} fill="none" stroke="#E53935" strokeWidth={2} />
              </>
            )}
          </g>
        );
    }
  };

  return (
    <div className="math-illustration" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', margin: '8px' }}>
      <div style={{ position: 'relative', width, height }}>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={rotation ? { transform: `rotate(${rotation}deg)` } : undefined}>
          {renderShape()}
        </svg>
        
        {/* Side Labels */}
        {sideLabels.top && (
          <div style={{ position: 'absolute', top: -10, left: 0, width: '100%', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }}>
            {sideLabels.top}
          </div>
        )}
        {sideLabels.bottom && (
          <div style={{ position: 'absolute', bottom: -10, left: 0, width: '100%', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }}>
            {sideLabels.bottom}
          </div>
        )}
        {sideLabels.left && (
          <div style={{ position: 'absolute', top: '50%', left: type === 'square' ? (width - (Math.min(width, height) - 20)) / 2 - 30 : -20, transform: 'translateY(-50%)', fontSize: '14px', fontWeight: 'bold' }}>
            {sideLabels.left}
          </div>
        )}
        {sideLabels.right && (
          <div style={{ position: 'absolute', top: '50%', right: type === 'square' ? (width - (Math.min(width, height) - 20)) / 2 - 30 : -20, transform: 'translateY(-50%)', fontSize: '14px', fontWeight: 'bold' }}>
            {sideLabels.right}
          </div>
        )}
      </div>
      {label && <span style={{ marginTop: '8px', fontWeight: 'bold' }}>{label}</span>}
    </div>
  );
};
