import React from 'react';

interface HookFramesLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  textClassName?: string;
}

export const HookFramesLogo: React.FC<HookFramesLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textClassName = '',
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Dark Squircle Logo Icon matching uploaded brand mark */}
      <div
        className={`${iconDimensions} shrink-0 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center p-1.5 shadow-sm group-hover:border-neutral-700 transition-all`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-white"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Rounded Frame */}
          <rect
            x="12"
            y="12"
            width="76"
            height="76"
            rx="18"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner Play Triangle */}
          <polygon
            points="38,34 38,66 66,50"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />
          {/* Stylized 'S' Hook curve over the play frame */}
          <path
            d="M 44,24 C 36,24 30,30 30,38 C 30,46 38,50 48,53 C 60,57 68,63 68,72 C 68,81 60,86 50,86"
            stroke="currentColor"
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className={`flex flex-col select-none ${textClassName}`}>
          <span className="text-white text-base sm:text-lg font-extrabold tracking-[0.12em] uppercase leading-none font-['Plus_Jakarta_Sans',sans-serif]">
            Hook Frames
          </span>
          <span className="text-neutral-400 text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase leading-tight mt-0.5 font-['Plus_Jakarta_Sans',sans-serif]">
            Studio
          </span>
        </div>
      )}
    </div>
  );
};
