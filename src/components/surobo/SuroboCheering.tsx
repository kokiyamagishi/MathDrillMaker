/**
 * スウロボSVG - 応援ポーズ（ガッツポーズで応援）
 * 使用箇所: きほん問題ページ（単元内P2）
 */
import React from 'react';

interface SuroboCheeringProps {
  width?: number;
  height?: number;
  className?: string;
}

export const SuroboCheering: React.FC<SuroboCheeringProps> = ({
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
    aria-label="スウロボ - 応援ポーズ"
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

    {/* 目（キラキラ笑顔） */}
    <path d="M84 50 L88 46 L92 50 L88 54 Z" fill="#00E5FF" />
    <path d="M108 50 L112 46 L116 50 L112 54 Z" fill="#00E5FF" />

    {/* 口（大きな笑顔） */}
    <path d="M88 62 Q100 74 112 62" stroke="#00E5FF" strokeWidth="2.5" fill="none" strokeLinecap="round" />

    {/* 耳パーツ */}
    <rect x="52" y="48" width="10" height="18" rx="4" fill="#4FC3F7" />
    <rect x="138" y="48" width="10" height="18" rx="4" fill="#4FC3F7" />

    {/* 首 */}
    <rect x="90" y="88" width="20" height="10" rx="3" fill="#E0E0E0" />

    {/* ボディ */}
    <rect x="65" y="96" width="70" height="65" rx="14" ry="14" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="2" />

    {/* ハートSマーク（光っている） */}
    <g transform="translate(100, 128)">
      <path d="M0 -14 C-6 -20 -16 -16 -16 -8 C-16 0 0 12 0 12 C0 12 16 0 16 -8 C16 -16 6 -20 0 -14Z"
        fill="#FF6D00" opacity="0.9" />
      <text x="0" y="2" textAnchor="middle" fill="white" fontSize="12" fontWeight="700"
        fontFamily="Inter, sans-serif">S</text>
    </g>

    {/* 光エフェクト */}
    <circle cx="100" cy="128" r="20" fill="none" stroke="#FFB74D" strokeWidth="2" opacity="0.5">
      <animate attributeName="r" values="20;26;20" dur="1s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1s" repeatCount="indefinite" />
    </circle>

    {/* 右腕（ガッツポーズ - 拳を上に） */}
    <g transform="rotate(-60, 135, 108)">
      <rect x="132" y="101" width="36" height="14" rx="7" fill="#4FC3F7" />
    </g>
    {/* 拳 */}
    <circle cx="155" cy="70" r="11" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />

    {/* 左腕（腰に手を当てる） */}
    <rect x="36" y="115" width="32" height="14" rx="7" fill="#4FC3F7" />
    <circle cx="34" cy="122" r="9" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />

    {/* 左脚 */}
    <rect x="78" y="158" width="16" height="30" rx="6" fill="#4FC3F7" />
    <rect x="74" y="185" width="24" height="12" rx="6" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />

    {/* 右脚（少し開き気味） */}
    <rect x="108" y="158" width="16" height="30" rx="6" fill="#4FC3F7" />
    <rect x="104" y="185" width="24" height="12" rx="6" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />

    {/* エフェクト：元気マーク */}
    <g opacity="0.8">
      <line x1="165" y1="55" x2="175" y2="45" stroke="#FF6D00" strokeWidth="3" strokeLinecap="round" />
      <line x1="172" y1="62" x2="184" y2="58" stroke="#FF6D00" strokeWidth="3" strokeLinecap="round" />
      <line x1="170" y1="72" x2="182" y2="72" stroke="#FF6D00" strokeWidth="3" strokeLinecap="round" />
    </g>
  </svg>
);

export default SuroboCheering;
