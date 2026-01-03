interface LionIconProps {
  className?: string;
  size?: number;
}

// Minimal lion silhouette - a subtle easter egg
export const LionIcon = ({ className = "", size = 16 }: LionIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Simplified lion head silhouette */}
      <path d="M12 2C9.5 2 7.5 3 6 4.5C4.5 3.5 3 4 2 5C3 6.5 3.5 8 3 10C2.5 12 3 14 4.5 15.5C4 17 4.5 18.5 5.5 19.5C7 21 9 22 12 22C15 22 17 21 18.5 19.5C19.5 18.5 20 17 19.5 15.5C21 14 21.5 12 21 10C20.5 8 21 6.5 22 5C21 4 19.5 3.5 18 4.5C16.5 3 14.5 2 12 2ZM9 10C9.55 10 10 10.45 10 11C10 11.55 9.55 12 9 12C8.45 12 8 11.55 8 11C8 10.45 8.45 10 9 10ZM15 10C15.55 10 16 10.45 16 11C16 11.55 15.55 12 15 12C14.45 12 14 11.55 14 11C14 10.45 14.45 10 15 10ZM12 18C10 18 8.5 17 8 15.5H16C15.5 17 14 18 12 18Z" />
    </svg>
  );
};
