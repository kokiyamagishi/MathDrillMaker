/**
 * スウロボSVG - 思考ポーズ（顎に手を当てて考え中）
 * 使用箇所: 応用問題ヒントボックス内（単元内P3）
 */
import React from 'react';

interface SuroboThinkingProps {
  width?: number;
  height?: number;
  className?: string;
}

export const SuroboThinking: React.FC<SuroboThinkingProps> = ({
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
    aria-label="スウロボ - 思考ポーズ"
  >
    {/* 左アンテナ */}
    <line x1="72" y1="30" x2="62" y2="10" stroke="#4FC3F7" strokeWidth="4" strokeLinecap="round" />
    <circle cx="62" cy="8" r="5" fill="#4FC3F7" />
    {/* アンテナ上の電球 */}
    <g transform="translate(58, -2)">
      <circle cx="0" cy="0" r="8" fill="#FFF9C4" stroke="#FFC107" strokeWidth="1.5" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="0" y="4" textAnchor="middle" fontSize="10" fill="#FFC107">💡</text>
    </g>

    {/* 右アンテナ */}
    <line x1="128" y1="30" x2="138" y2="10" stroke="#4FC3F7" strokeWidth="4" strokeLinecap="round" />
    <circle cx="138" cy="8" r="5" fill="#4FC3F7" />

    {/* 頭部 */}
    <rect x="60" y="28" width="80" height="60" rx="20" ry="20" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="2" />

    {/* バイザー */}
    <rect x="68" y="36" width="64" height="42" rx="14" ry="14" fill="#1A237E" />

    {/* 目（考え中 - 左を見ている） */}
    <ellipse cx="85" cy="52" rx="5" ry="5" fill="#00E5FF" />
    <ellipse cx="82" cy="51" rx="2" ry="2" fill="#1A237E" />
    <ellipse cx="109" cy="52" rx="5" ry="5" fill="#00E5FF" />
    <ellipse cx="106" cy="51" rx="2" ry="2" fill="#1A237E" />

    {/* 口（「うーん」） */}
    <path d="M92 66 Q100 62 108 66" stroke="#00E5FF" strokeWidth="2" fill="none" strokeLinecap="round" />

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

    {/* 右腕（顎に手を当てる） */}
    <g transform="rotate(-10, 135, 108)">
      <rect x="130" y="101" width="30" height="14" rx="7" fill="#4FC3F7" />
    </g>
    {/* 手（顎の位置に） */}
    <circle cx="124" cy="74" r="9" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />

    {/* 右腕上部分（肘を曲げる表現） */}
    <g transform="rotate(70, 135, 100)">
      <rect x="125" y="80" width="24" height="12" rx="6" fill="#4FC3F7" />
    </g>

    {/* 左腕（軽く下ろしている） */}
    <rect x="38" y="112" width="30" height="14" rx="7" fill="#4FC3F7" />
    <circle cx="36" cy="119" r="9" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />

    {/* 左脚 */}
    <rect x="78" y="158" width="16" height="30" rx="6" fill="#4FC3F7" />
    <rect x="74" y="185" width="24" height="12" rx="6" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />

    {/* 右脚 */}
    <rect x="106" y="158" width="16" height="30" rx="6" fill="#4FC3F7" />
    <rect x="102" y="185" width="24" height="12" rx="6" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />

    {/* 思考エフェクト（...） */}
    <circle cx="150" cy="38" r="4" fill="#B0BEC5" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="162" cy="28" r="5" fill="#B0BEC5" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
    </circle>
    <circle cx="176" cy="20" r="6" fill="#B0BEC5" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.2;0.4" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default SuroboThinking;
