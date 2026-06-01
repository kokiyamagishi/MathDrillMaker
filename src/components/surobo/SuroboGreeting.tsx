/**
 * スウロボSVG - 挨拶ポーズ（両手を広げて元気に挨拶）
 * 使用箇所: 総合表紙 (P1)
 */
import React from 'react';

interface SuroboGreetingProps {
  width?: number;
  height?: number;
  className?: string;
}

export const SuroboGreeting: React.FC<SuroboGreetingProps> = ({
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
    aria-label="スウロボ - 挨拶ポーズ"
  >
    {/* 左アンテナ */}
    <line x1="72" y1="30" x2="60" y2="8" stroke="#4FC3F7" strokeWidth="4" strokeLinecap="round" />
    <circle cx="60" cy="6" r="5" fill="#4FC3F7" />

    {/* 右アンテナ */}
    <line x1="128" y1="30" x2="140" y2="8" stroke="#4FC3F7" strokeWidth="4" strokeLinecap="round" />
    <circle cx="140" cy="6" r="5" fill="#4FC3F7" />

    {/* 頭部 */}
    <rect x="60" y="28" width="80" height="60" rx="20" ry="20" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="2" />

    {/* バイザー（顔面） */}
    <rect x="68" y="36" width="64" height="42" rx="14" ry="14" fill="#1A237E" />

    {/* 目（笑顔） */}
    <path d="M84 52 Q88 46 92 52" stroke="#00E5FF" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M108 52 Q112 46 116 52" stroke="#00E5FF" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* 口（笑顔） */}
    <path d="M90 64 Q100 72 110 64" stroke="#00E5FF" strokeWidth="2.5" fill="none" strokeLinecap="round" />

    {/* 耳パーツ（左右） */}
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

    {/* ハートの光エフェクト */}
    <circle cx="100" cy="128" r="18" fill="none" stroke="#FFB74D" strokeWidth="1.5" opacity="0.4">
      <animate attributeName="r" values="18;22;18" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0.15;0.4" dur="2s" repeatCount="indefinite" />
    </circle>

    {/* 左腕（大きく広げて） */}
    <g transform="rotate(-45, 65, 110)">
      <rect x="30" y="104" width="38" height="14" rx="7" fill="#4FC3F7" />
      {/* 手 */}
      <circle cx="28" cy="111" r="10" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />
    </g>

    {/* 右腕（大きく広げて） */}
    <g transform="rotate(45, 135, 110)">
      <rect x="132" y="104" width="38" height="14" rx="7" fill="#4FC3F7" />
      {/* 手 */}
      <circle cx="172" cy="111" r="10" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />
    </g>

    {/* 左脚 */}
    <rect x="78" y="158" width="16" height="30" rx="6" fill="#4FC3F7" />
    <rect x="74" y="185" width="24" height="12" rx="6" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />

    {/* 右脚 */}
    <rect x="106" y="158" width="16" height="30" rx="6" fill="#4FC3F7" />
    <rect x="102" y="185" width="24" height="12" rx="6" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />

    {/* キラキラエフェクト */}
    <g opacity="0.7">
      <polygon points="38,30 40,24 42,30 48,32 42,34 40,40 38,34 32,32" fill="#FFB74D">
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.5s" repeatCount="indefinite" />
      </polygon>
      <polygon points="158,26 160,20 162,26 168,28 162,30 160,36 158,30 152,28" fill="#4FC3F7">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
      </polygon>
      <polygon points="172,75 174,71 176,75 180,76 176,78 174,82 172,78 168,76" fill="#FFB74D">
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.8s" repeatCount="indefinite" />
      </polygon>
    </g>
  </svg>
);

export default SuroboGreeting;
