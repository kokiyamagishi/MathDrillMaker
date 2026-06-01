import React from "react";

interface RulerProps {
  /** 測定対象の長さ (cm)。例: 5, 4.3, 7.8 など */
  measuredLength: number;
  /** 定規の最大表示長さ (cm)。デフォルト 12 */
  maxLength?: number;
  /** 測定対象の種類 ('line': 青い線, 'pencil': 鉛筆, 'eraser': 消しゴム) */
  objectType?: "line" | "pencil" | "eraser";
  /** 答えを表示するかどうか */
  showAnswer?: boolean;
}

export const Ruler: React.FC<RulerProps> = ({
  measuredLength,
  maxLength = 12,
  objectType = "line",
  showAnswer = false,
}) => {
  const pxPerCm = 30; // 1cm = 30px (1mm = 3px) これですべての目盛りのピクセル位置が完璧に整数になり、A4幅に美しく収まりつつ、にじみゼロで極めてシャープに表示されます！
  const paddingLeft = 24; // 左右の余白をさらに縮小してコンパクトに
  const rulerTop = 26; // 定規の上端y座標をさらに上に詰める
  const rulerHeight = 30; // 定規の高さを30pxにして極限までスマートに
  const width = maxLength * pxPerCm + paddingLeft * 2;
  const height = rulerTop + rulerHeight + 10; // 全体の高さを66pxに大幅圧縮して見切れを根絶

  const ticks: React.ReactNode[] = [];
  const labels: React.ReactNode[] = [];

  // 目盛りのループ
  for (let i = 0; i <= maxLength * 10; i++) {
    // pxPerCmが40なので、(i / 10) * 40 = i * 4 となり、必ず整数値になる！
    const x = paddingLeft + i * (pxPerCm / 10);
    const isCm = i % 10 === 0;
    const isHalfCm = i % 5 === 0 && !isCm;

    let tickHeight = 6;
    let tickColor = "#263238"; // 1mm目盛りは濃いグレー
    let strokeW = 0.8; // 1mm目盛りの太さを極細にしてシャープに

    if (isCm) {
      tickHeight = 13;
      tickColor = "#000000"; // 1cm目盛りは完全な黒
      strokeW = 1.5;
    } else if (isHalfCm) {
      tickHeight = 9;
      tickColor = "#000000"; // 5mm目盛りも完全な黒
      strokeW = 1.1;
    }

    ticks.push(
      <line
        key={`tick-${i}`}
        x1={x}
        y1={rulerTop}
        x2={x}
        y2={rulerTop + tickHeight}
        stroke={tickColor}
        strokeWidth={strokeW}
        shapeRendering="crispEdges"
      />
    );

    if (isCm) {
      labels.push(
        <text
          key={`label-${i}`}
          x={x}
          y={rulerTop + 22}
          textAnchor="middle"
          fontSize="10px"
          fontWeight="bold"
          fontFamily="var(--font-number)"
          fill="#000000"
        >
          {i / 10}
        </text>
      );
    }
  }

  const objectX1 = paddingLeft;
  const objectX2 = paddingLeft + measuredLength * pxPerCm;
  const objectY = rulerTop - 8; // 定規のすぐ上に配置

  let measurementObject = null;
  if (objectType === "pencil") {
    const pencilWidth = measuredLength * pxPerCm;
    const pencilHeight = 10;
    measurementObject = (
      <g transform={`translate(${objectX1}, ${objectY - pencilHeight / 2})`}>
        {/* 鉛筆のボディ（木の部分） */}
        <rect x={10} y={0} width={pencilWidth - 22} height={pencilHeight} fill="#FFB74D" />
        {/* 鉛筆の溝線 */}
        <line x1={10} y1={pencilHeight / 2} x2={pencilWidth - 12} y2={pencilHeight / 2} stroke="#F57C00" strokeWidth={0.8} />
        {/* 先端の木の部分 */}
        <polygon points={`${pencilWidth - 12},0 ${pencilWidth},${pencilHeight / 2} ${pencilWidth - 12},${pencilHeight}`} fill="#FFE082" />
        {/* 鉛筆の芯先 */}
        <polygon points={`${pencilWidth - 4},${pencilHeight / 2 - 1.5} ${pencilWidth},${pencilHeight / 2} ${pencilWidth - 4},${pencilHeight / 2 + 1.5}`} fill="#37474F" />
        {/* 消しゴムと金具（左端） */}
        <rect x={3} y={0} width={7} height={pencilHeight} fill="#B0BEC5" />
        <rect x={0} y={0} width={3} height={pencilHeight} fill="#E57373" rx={0.5} />
      </g>
    );
  } else if (objectType === "eraser") {
    const eraserWidth = measuredLength * pxPerCm;
    const eraserHeight = 12;
    measurementObject = (
      <g transform={`translate(${objectX1}, ${objectY - eraserHeight / 2})`}>
        {/* 消しゴム本体 */}
        <rect x={0} y={0} width={eraserWidth} height={eraserHeight} fill="#ECEFF1" rx={1} stroke="#757575" strokeWidth={0.8} />
        {/* スリーブ（紙のカバー） */}
        <rect x={0} y={0} width={Math.min(eraserWidth * 0.7, 35)} height={eraserHeight} fill="#1E88E5" rx={0.5} />
        <text x={Math.min(eraserWidth * 0.35, 17.5)} y={eraserHeight / 2 + 3} fontSize="7px" fill="#FFF" textAnchor="middle" fontWeight="bold">Surobo</text>
      </g>
    );
  } else {
    // シンプルな青い線
    measurementObject = (
      <line
        x1={objectX1}
        y1={objectY}
        x2={objectX2}
        y2={objectY}
        stroke="#1976D2"
        strokeWidth={4}
        strokeLinecap="round"
      />
    );
  }

  // 小数点長さを cm と mm の表記に分解
  const cmPart = Math.floor(measuredLength);
  const mmPart = Math.round((measuredLength - cmPart) * 10);
  let lengthText = "";
  if (cmPart > 0 && mmPart > 0) {
    lengthText = `${cmPart} cm ${mmPart} mm`;
  } else if (cmPart > 0) {
    lengthText = `${cmPart} cm`;
  } else {
    lengthText = `${mmPart} mm`;
  }

  // グラデーションの一意なID用
  const gradId = `ruler-grad-${measuredLength}-${maxLength}`;
  const gridId = `ruler-grid-${measuredLength}-${maxLength}`;

  return (
    <div className="math-illustration" style={{ textAlign: "center", margin: "0" }}> {/* 外側余白を完全にゼロ化 */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        shapeRendering="geometricPrecision"
        style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.16))" }}
      >
        <defs>
          {/* クリアで高品質なアクリルプラスチックの質感を再現するグラデーション */}
          <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E0F7FA" stopOpacity={0.65} />
            <stop offset="20%" stopColor="#FFFFFF" stopOpacity={0.85} />
            <stop offset="50%" stopColor="#E0F2F1" stopOpacity={0.15} />
            <stop offset="80%" stopColor="#E1F5FE" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#B3E5FC" stopOpacity={0.55} />
          </linearGradient>

          {/* 1mm/5mm/1cm刻みの超リアルなアクリル方眼グリッドパターン */}
          <pattern
            id={gridId}
            width={pxPerCm}
            height={rulerHeight}
            patternUnits="userSpaceOnUse"
            patternTransform={`translate(${paddingLeft}, 0)`}
          >
            {/* 1mm (3px) 刻みの極薄縦線 */}
            <line x1={3} y1={0} x2={3} y2={rulerHeight} stroke="#78909C" strokeWidth={0.5} strokeOpacity={0.15} shapeRendering="crispEdges" />
            <line x1={6} y1={0} x2={6} y2={rulerHeight} stroke="#78909C" strokeWidth={0.5} strokeOpacity={0.15} shapeRendering="crispEdges" />
            <line x1={9} y1={0} x2={9} y2={rulerHeight} stroke="#78909C" strokeWidth={0.5} strokeOpacity={0.15} shapeRendering="crispEdges" />
            <line x1={12} y1={0} x2={12} y2={rulerHeight} stroke="#78909C" strokeWidth={0.5} strokeOpacity={0.15} shapeRendering="crispEdges" />
            
            {/* 5mm (15px) 刻みの薄い縦線 */}
            <line x1={15} y1={0} x2={15} y2={rulerHeight} stroke="#546E7A" strokeWidth={0.6} strokeOpacity={0.3} shapeRendering="crispEdges" />
            
            <line x1={18} y1={0} x2={18} y2={rulerHeight} stroke="#78909C" strokeWidth={0.5} strokeOpacity={0.15} shapeRendering="crispEdges" />
            <line x1={21} y1={0} x2={21} y2={rulerHeight} stroke="#78909C" strokeWidth={0.5} strokeOpacity={0.15} shapeRendering="crispEdges" />
            <line x1={24} y1={0} x2={24} y2={rulerHeight} stroke="#78909C" strokeWidth={0.5} strokeOpacity={0.15} shapeRendering="crispEdges" />
            <line x1={27} y1={0} x2={27} y2={rulerHeight} stroke="#78909C" strokeWidth={0.5} strokeOpacity={0.15} shapeRendering="crispEdges" />
            
            {/* 1cm (30px) 刻みの縦線 */}
            <line x1={30} y1={0} x2={30} y2={rulerHeight} stroke="#37474F" strokeWidth={0.7} strokeOpacity={0.4} shapeRendering="crispEdges" />

            {/* 横方向のグリッド線 (5mm = 15px間隔) */}
            <line x1={0} y1={15} x2={pxPerCm} y2={15} stroke="#546E7A" strokeWidth={0.6} strokeOpacity={0.2} shapeRendering="crispEdges" />
            
            {/* 細かい横方向の補助線 (2mm = 6px間隔) */}
            <line x1={0} y1={6} x2={pxPerCm} y2={6} stroke="#78909C" strokeWidth={0.5} strokeOpacity={0.1} shapeRendering="crispEdges" />
            <line x1={0} y1={12} x2={pxPerCm} y2={12} stroke="#78909C" strokeWidth={0.5} strokeOpacity={0.1} shapeRendering="crispEdges" />
            <line x1={0} y1={18} x2={pxPerCm} y2={18} stroke="#78909C" strokeWidth={0.5} strokeOpacity={0.1} shapeRendering="crispEdges" />
            <line x1={0} y1={24} x2={pxPerCm} y2={24} stroke="#78909C" strokeWidth={0.5} strokeOpacity={0.1} shapeRendering="crispEdges" />
          </pattern>
        </defs>

        {/* 定規の本体背景（アクリル板のシャープな角丸で表現） */}
        <rect
          x={paddingLeft - 8}
          y={rulerTop}
          width={maxLength * pxPerCm + 16}
          height={rulerHeight}
          fill={`url(#${gradId})`}
          stroke="#455A64"
          strokeWidth={0.8}
          rx={4}
        />

        {/* アクリル定規の透明方眼グリッド重ね合わせ */}
        <rect
          x={paddingLeft - 8}
          y={rulerTop}
          width={maxLength * pxPerCm + 16}
          height={rulerHeight}
          fill={`url(#${gridId})`}
          rx={4}
          pointerEvents="none"
        />

        {/* 定規中央の赤い水平補助線（実物の学習用定規を忠実に再現） */}
        <line
          x1={paddingLeft - 8}
          y1={rulerTop + 15}
          x2={paddingLeft + maxLength * pxPerCm + 8}
          y2={rulerTop + 15}
          stroke="#E53935"
          strokeWidth={0.8}
          strokeOpacity={0.55}
          pointerEvents="none"
        />

        {/* 上部の光沢反射ライン */}
        <line
          x1={paddingLeft - 8}
          y1={rulerTop + 1.2}
          x2={paddingLeft + maxLength * pxPerCm + 8}
          y2={rulerTop + 1.2}
          stroke="#FFFFFF"
          strokeWidth={1.0}
          strokeOpacity={0.95}
        />

        {/* 下部の光沢反射ライン */}
        <line
          x1={paddingLeft - 8}
          y1={rulerTop + rulerHeight - 1.2}
          x2={paddingLeft + maxLength * pxPerCm + 8}
          y2={rulerTop + rulerHeight - 1.2}
          stroke="#FFFFFF"
          strokeWidth={0.7}
          strokeOpacity={0.65}
        />

        {/* 目盛りと数字ラベル */}
        {ticks}
        {labels}

        {/* cm 単位ラベル */}
        <text
          x={paddingLeft + maxLength * pxPerCm + 5}
          y={rulerTop + 14}
          fontSize="8px"
          fontWeight="bold"
          fontFamily="var(--font-number)"
          fill="#000000"
        >
          cm
        </text>

        {/* 0点合わせのガイド点線 */}
        <line
          x1={paddingLeft}
          y1={rulerTop}
          x2={paddingLeft}
          y2={objectY}
          stroke="#78909C"
          strokeWidth={0.8}
          strokeDasharray="2,2"
        />

        {/* 測定終点のガイド点線 */}
        <line
          x1={objectX2}
          y1={rulerTop}
          x2={objectX2}
          y2={objectY}
          stroke="#78909C"
          strokeWidth={0.8}
          strokeDasharray="2,2"
        />

        {/* 測定対象オブジェクト */}
        {measurementObject}

        {/* 解答の赤いガイド */}
        {showAnswer && (
          <g>
            <polygon
              points={`${objectX2},${rulerTop - 2} ${objectX2 - 4},${rulerTop - 7} ${objectX2 + 4},${rulerTop - 7}`}
              fill="#E53935"
            />
            <text
              x={objectX2}
              y={rulerTop - 14}
              textAnchor="middle"
              fontSize="12px"
              fontWeight="bold"
              fill="#E53935"
              fontFamily="var(--font-number)"
            >
              {lengthText}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

