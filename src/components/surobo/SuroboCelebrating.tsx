/**
 * スウロボSVG - お祝いポーズ（クラッカーを持って全力お祝い）
 * 使用箇所: 年間修了証（賞状）ページ
 */
import React from 'react';

interface SuroboCelebratingProps {
  width?: number;
  height?: number;
  className?: string;
}

export const SuroboCelebrating: React.FC<SuroboCelebratingProps> = ({
  width = 200,
  height = 240,
  className = '',
}) => (
  <svg
    viewBox="0 0 200 260"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="スウロボ - お祝いポーズ"
  >
    {/* 紙吹雪エフェクト */}
    <g opacity="0.8">
      <rect x="25" y="15" width="8" height="5" rx="1" fill="#FF6D00" transform="rotate(30, 29, 17)">
        <animateTransform attributeName="transform" type="rotate" values="30,29,17;60,29,17;30,29,17" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="45" y="8" width="6" height="4" rx="1" fill="#4FC3F7" transform="rotate(-20, 48, 10)">
        <animateTransform attributeName="transform" type="rotate" values="-20,48,10;20,48,10;-20,48,10" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <rect x="155" y="12" width="7" height="4" rx="1" fill="#FFB74D" transform="rotate(45, 158, 14)">
        <animateTransform attributeName="transform" type="rotate" values="45,158,14;-15,158,14;45,158,14" dur="2.8s" repeatCount="indefinite" />
      </rect>
      <rect x="170" y="25" width="5" height="6" rx="1" fill="#E91E63" transform="rotate(-10, 172, 28)">
        <animateTransform attributeName="transform" type="rotate" values="-10,172,28;30,172,28;-10,172,28" dur="3.2s" repeatCount="indefinite" />
      </rect>
      <circle cx="35" cy="35" r="3" fill="#4CAF50">
        <animate attributeName="cy" values="35;40;35" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="165" cy="40" r="2.5" fill="#FF6D00">
        <animate attributeName="cy" values="40;48;40" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <polygon points="55,20 57,16 59,20 63,21 59,23 57,27 55,23 51,21" fill="#FFC107" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.4;0.9" dur="1.5s" repeatCount="indefinite" />
      </polygon>
      <polygon points="145,18 147,14 149,18 153,19 149,21 147,25 145,21 141,19" fill="#00E5FF" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.8s" repeatCount="indefinite" />
      </polygon>
    </g>

    {/* 左アンテナ */}
    <line x1="72" y1="50" x2="60" y2="28" stroke="#4FC3F7" strokeWidth="4" strokeLinecap="round" />
    <circle cx="60" cy="26" r="5" fill="#4FC3F7" />

    {/* 右アンテナ */}
    <line x1="128" y1="50" x2="140" y2="28" stroke="#4FC3F7" strokeWidth="4" strokeLinecap="round" />
    <circle cx="140" cy="26" r="5" fill="#4FC3F7" />

    {/* 頭部 */}
    <rect x="60" y="48" width="80" height="60" rx="20" ry="20" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="2" />

    {/* バイザー */}
    <rect x="68" y="56" width="64" height="42" rx="14" ry="14" fill="#1A237E" />

    {/* 目（超ハッピー - ^_^） */}
    <path d="M82 70 Q88 62 94 70" stroke="#00E5FF" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M106 70 Q112 62 118 70" stroke="#00E5FF" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* 口（大きく笑う） */}
    <path d="M88 80 Q100 92 112 80" stroke="#00E5FF" strokeWidth="2.5" fill="none" strokeLinecap="round" />

    {/* 耳パーツ */}
    <rect x="52" y="68" width="10" height="18" rx="4" fill="#4FC3F7" />
    <rect x="138" y="68" width="10" height="18" rx="4" fill="#4FC3F7" />

    {/* 首 */}
    <rect x="90" y="108" width="20" height="10" rx="3" fill="#E0E0E0" />

    {/* ボディ */}
    <rect x="65" y="116" width="70" height="65" rx="14" ry="14" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="2" />

    {/* ハートSマーク（最大輝度） */}
    <g transform="translate(100, 148)">
      <path d="M0 -14 C-6 -20 -16 -16 -16 -8 C-16 0 0 12 0 12 C0 12 16 0 16 -8 C16 -16 6 -20 0 -14Z"
        fill="#FF6D00" />
      <text x="0" y="2" textAnchor="middle" fill="white" fontSize="12" fontWeight="700"
        fontFamily="Inter, sans-serif">S</text>
    </g>
    <circle cx="100" cy="148" r="20" fill="none" stroke="#FFB74D" strokeWidth="2" opacity="0.6">
      <animate attributeName="r" values="20;28;20" dur="0.8s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0;0.6" dur="0.8s" repeatCount="indefinite" />
    </circle>

    {/* 右腕（クラッカーを持って上に） */}
    <g transform="rotate(-50, 135, 128)">
      <rect x="132" y="121" width="36" height="14" rx="7" fill="#4FC3F7" />
    </g>
    <circle cx="162" cy="88" r="10" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />
    {/* クラッカー */}
    <g transform="translate(170, 72) rotate(30)">
      <rect x="-4" y="0" width="8" height="20" rx="3" fill="#E91E63" />
      <polygon points="-8,-6 0,-2 8,-6 6,0 -6,0" fill="#FFC107" />
      {/* クラッカーの飛び出し */}
      <line x1="-6" y1="-8" x2="-12" y2="-16" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" />
      <line x1="0" y1="-8" x2="0" y2="-18" stroke="#FF6D00" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="-8" x2="12" y2="-16" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* 左腕（大きく振っている） */}
    <g transform="rotate(40, 65, 128)">
      <rect x="30" y="121" width="38" height="14" rx="7" fill="#4FC3F7" />
      <circle cx="28" cy="128" r="10" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />
    </g>

    {/* 左脚（少しジャンプ気味） */}
    <rect x="76" y="178" width="16" height="28" rx="6" fill="#4FC3F7" />
    <rect x="72" y="203" width="24" height="12" rx="6" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />

    {/* 右脚 */}
    <rect x="108" y="178" width="16" height="28" rx="6" fill="#4FC3F7" />
    <rect x="104" y="203" width="24" height="12" rx="6" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1.5" />
  </svg>
);

export default SuroboCelebrating;
