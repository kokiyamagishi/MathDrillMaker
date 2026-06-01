/**
 * スウロボSVG - 博士ポーズ（丸メガネをかけた博士風）
 * 使用箇所: 巻末解答シート
 */
import React from 'react';

interface SuroboProfessorProps {
  width?: number;
  height?: number;
  className?: string;
}

export const SuroboProfessor: React.FC<SuroboProfessorProps> = ({
  width = 200,
  height = 240,
  className = '',
}) => (
  <svg
    viewBox="0 0 200 240"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="スウロボ - 博士ポーズ"
  >
    {/* 左アンテナ */}
    <line x1="72" y1="30" x2="62" y2="10" stroke="#4FC3F7" strokeWidth="4" strokeLinecap="round" />
    <circle cx="62" cy="8" r="5" fill="#4FC3F7" />

    {/* 右アンテナ */}
    <line x1="128" y1="30" x2="138" y2="10" stroke="#4FC3F7" strokeWidth="4" strokeLinecap="round" />
    <circle cx="138" cy="8" r="5" fill="#4FC3F7" />

    {/* 頭部 */}
    <rect x="60" y="28" width="80" height="60" rx="20" ry="20" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="2" />

    {/* バイザー */}
    <rect x="68" y="36" width="64" height="42" rx="14" ry="14" fill="#1A237E" />

    {/* 丸メガネ（左） */}
    <circle cx="88" cy="52" r="10" fill="none" stroke="#FFB74D" strokeWidth="2.5" />
    {/* 丸メガネ（右） */}
    <circle cx="112" cy="52" r="10" fill="none" stroke="#FFB74D" strokeWidth="2.5" />
    {/* メガネブリッジ */}
    <line x1="98" y1="52" x2="102" y2="52" stroke="#FFB74D" strokeWidth="2" />
    {/* メガネテンプル（左） */}
    <line x1="78" y1="50" x2="68" y2="48" stroke="#FFB74D" strokeWidth="2" strokeLinecap="round" />
    {/* メガネテンプル（右） */}
    <line x1="122" y1="50" x2="132" y2="48" stroke="#FFB74D" strokeWidth="2" strokeLinecap="round" />

    {/* 目（メガネ越しの賢い目） */}
    <ellipse cx="88" cy="52" rx="4" ry="3" fill="#00E5FF" />
    <ellipse cx="112" cy="52" rx="4" ry="3" fill="#00E5FF" />

    {/* 口（にこっ） */}
    <path d="M94 66 Q100 71 106 66" stroke="#00E5FF" strokeWidth="2" fill="none" strokeLinecap="round" />

    {/* 耳パーツ */}
    <rect x="52" y="48" width="10" height="18" rx="4" fill="#4FC3F7" />
    <rect x="138" y="48" width="10" height="18" rx="4" fill="#4FC3F7" />

    {/* 首 */}
    <rect x="90" y="88" width="20" height="10" rx="3" fill="#E0E0E0" />

    {/* ボディ */}
    <rect x="65" y="96" width="70" height="65" rx="14" ry="14" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="2" />

    {/* ハートSマーク */}
    <g transform="translate(100, 128)">
      <path d="M0 -14 C-6 -20 -16 -16 -16 -8 C-16 0 0 12 0 12 C0 12 16 0 16 -8 C16 -16 6 -20 0 -14Z"
        fill="#FF6D00" opacity="0.9" />
      <text x="0" y="2" textAnchor="middle" fill="white" fontSize="12" fontWeight="700"
        fontFamily="Inter, sans-serif">S</text>
    </g>

    {/* 左腕（赤ペンを持つ） */}
    <g transform="rotate(15, 65, 110)">
      <rect x="32" y="104" width="36" height="14" rx="7" fill="#4FC3F7" />
      <circle cx="30" cy="111" r="9" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />
    </g>
    {/* 赤ペン */}
    <g transform="rotate(20, 28, 120)">
      <rect x="14" y="116" width="30" height="5" rx="2" fill="#D32F2F" />
      <polygon points="14,116 10,118.5 14,121" fill="#D32F2F" />
    </g>

    {/* 右腕（手を上げて指を立てる） */}
    <g transform="rotate(-30, 135, 108)">
      <rect x="132" y="101" width="34" height="14" rx="7" fill="#4FC3F7" />
    </g>
    <circle cx="160" cy="82" r="9" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />
    {/* 人差し指 */}
    <line x1="160" y1="73" x2="160" y2="62" stroke="#F5F5F5" strokeWidth="5" strokeLinecap="round" />
    <line x1="160" y1="73" x2="160" y2="62" stroke="#E0E0E0" strokeWidth="1.5" strokeLinecap="round" />

    {/* 左脚 */}
    <rect x="78" y="158" width="16" height="30" rx="6" fill="#4FC3F7" />
    <rect x="74" y="185" width="24" height="12" rx="6" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />

    {/* 右脚 */}
    <rect x="106" y="158" width="16" height="30" rx="6" fill="#4FC3F7" />
    <rect x="102" y="185" width="24" height="12" rx="6" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />

    {/* ✓マークエフェクト */}
    <g transform="translate(168, 55)" opacity="0.8">
      <circle cx="0" cy="0" r="10" fill="#4CAF50" />
      <polyline points="-5,0 -2,4 6,-4" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default SuroboProfessor;
