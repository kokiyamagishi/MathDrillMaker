/**
 * スウロボSVG - 解説ポーズ（指し棒を持って教える）
 * 使用箇所: 要点チェックページ（単元内P1）
 */
import React from 'react';

interface SuroboTeachingProps {
  width?: number;
  height?: number;
  className?: string;
}

export const SuroboTeaching: React.FC<SuroboTeachingProps> = ({
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
    aria-label="スウロボ - 解説ポーズ"
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

    {/* 目（優しい笑顔） */}
    <ellipse cx="88" cy="52" rx="5" ry="4" fill="#00E5FF" />
    <ellipse cx="112" cy="52" rx="5" ry="4" fill="#00E5FF" />

    {/* 口（にっこり） */}
    <path d="M92 64 Q100 70 108 64" stroke="#00E5FF" strokeWidth="2" fill="none" strokeLinecap="round" />

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

    {/* 左腕（少し下げた位置） */}
    <rect x="35" y="108" width="34" height="14" rx="7" fill="#4FC3F7" />
    <circle cx="33" cy="115" r="9" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />

    {/* 右腕（指し棒を持って上に） */}
    <g transform="rotate(-30, 135, 108)">
      <rect x="132" y="101" width="36" height="14" rx="7" fill="#4FC3F7" />
      <circle cx="170" cy="108" r="9" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />
    </g>

    {/* 指し棒 */}
    <g transform="rotate(-55, 168, 90)">
      <line x1="168" y1="90" x2="168" y2="30" stroke="#8D6E63" strokeWidth="3" strokeLinecap="round" />
      <circle cx="168" cy="28" r="4" fill="#FF6D00" />
    </g>

    {/* 左脚 */}
    <rect x="78" y="158" width="16" height="30" rx="6" fill="#4FC3F7" />
    <rect x="74" y="185" width="24" height="12" rx="6" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />

    {/* 右脚 */}
    <rect x="106" y="158" width="16" height="30" rx="6" fill="#4FC3F7" />
    <rect x="102" y="185" width="24" height="12" rx="6" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />
  </svg>
);

export default SuroboTeaching;
