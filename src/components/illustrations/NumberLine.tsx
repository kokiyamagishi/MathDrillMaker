import React from "react";

interface NumberLineProps {
  /** 最小値 */
  min: number;
  /** 最大値 */
  max: number;
  /** 大目盛りの間隔 */
  step: number;
  /** 小目盛りの間隔（省略時は大目盛りのみ） */
  minorStep?: number;
  /** 矢印で指し示す値とラベルの配列 */
  arrows?: { value: number; label: string; color?: string; showAnswer?: boolean }[];
  /** 数直線の幅 (px) */
  width?: number;
  /** 数値ラベルを表示するかどうか */
  showLabels?: boolean;
}

export const NumberLine: React.FC<NumberLineProps> = ({
  min,
  max,
  step,
  minorStep,
  arrows = [],
  width = 600,
  showLabels = true,
}) => {
  const height = 100;
  const paddingH = 40; // 左右の余白
  const lineY = 60; // 線のY座標
  const usableWidth = width - paddingH * 2;
  const range = max - min;
  
  // 値からX座標を計算する関数
  const valToX = (val: number) => {
    return paddingH + ((val - min) / range) * usableWidth;
  };

  const ticks: React.ReactNode[] = [];
  const labels: React.ReactNode[] = [];

  // 小目盛りの描画
  if (minorStep && minorStep > 0) {
    for (let v = min; v <= max; v += minorStep) {
      // 大目盛りと重なる場合はスキップ（あとで大目盛りを描画するため）
      if (v % step === 0) continue;
      
      const x = valToX(v);
      ticks.push(
        <line
          key={`minor-${v}`}
          x1={x}
          y1={lineY - 6}
          x2={x}
          y2={lineY}
          stroke="#455A64"
          strokeWidth={1.5}
        />
      );
    }
  }

  // 大目盛りと数値ラベルの描画
  for (let v = min; v <= max; v += step) {
    const x = valToX(v);
    ticks.push(
      <line
        key={`major-${v}`}
        x1={x}
        y1={lineY - 12}
        x2={x}
        y2={lineY + 12}
        stroke="#1976D2"
        strokeWidth={2.5}
      />
    );
    if (showLabels) {
      // 浮動小数点数の丸め誤差を排除
      const labelText = Math.round(v * 1000) / 1000;
      
      // 小数の数直線 (step < 1) ではフォントサイズを小さくして重なりを防ぐ
      const labelFontSize = step < 1 ? "12px" : "16px";
      const textY = step < 1 ? lineY + 26 : lineY + 30;

      labels.push(
        <text
          key={`label-${v}`}
          x={x}
          y={textY}
          textAnchor="middle"
          fontSize={labelFontSize}
          fontWeight="bold"
          fontFamily="var(--font-number)"
          fill="#1976D2"
        >
          {labelText}
        </text>
      );
    }
  }

  // 矢印の描画
  const arrowElements = arrows.map((arrow, i) => {
    const x = valToX(arrow.value);
    const arrowColor = arrow.color || "#E53935"; // デフォルトは赤
    const answerText = arrow.showAnswer ? String(arrow.value) : "";
    
    return (
      <g key={`arrow-${i}`} transform={`translate(${x}, ${lineY - 20})`}>
        {/* 矢印の三角形 */}
        <polygon
          points="0,0 -8,-12 8,-12"
          fill={arrowColor}
        />
        {/* ラベル (例: (1)) */}
        <text
          x={0}
          y={-18}
          textAnchor="middle"
          fontSize="18px"
          fontWeight="bold"
          fill={arrowColor}
        >
          {arrow.label}
        </text>
        {/* 解答モードの場合、数値を表示 */}
        {arrow.showAnswer && (
          <text
            x={0}
            y={-38}
            textAnchor="middle"
            fontSize="16px"
            fontWeight="bold"
            fontFamily="var(--font-number)"
            fill={arrowColor}
            style={{ backgroundColor: "white" }}
          >
            {answerText}
          </text>
        )}
      </g>
    );
  });

  return (
    <div className="math-illustration" style={{ textAlign: "center", margin: "10px 0" }}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {/* メインの数直線の線 */}
        <line
          x1={paddingH - 20}
          y1={lineY}
          x2={width - paddingH + 20}
          y2={lineY}
          stroke="#1976D2"
          strokeWidth={3}
          strokeLinecap="round"
        />
        {/* 目盛りとラベル */}
        {ticks}
        {labels}
        {/* 矢印 */}
        {arrowElements}
      </svg>
    </div>
  );
};
