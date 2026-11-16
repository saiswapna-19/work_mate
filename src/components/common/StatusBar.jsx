function StatusBar({ className = "text-[#171827]" }) {
  return (
    <div
      className={`flex h-[38px] w-full shrink-0 items-center justify-between bg-transparent px-[20px] ${className}`}
    >
      {/* Time */}
      <span className="text-[11px] font-bold leading-none tracking-[-0.2px] text-current">
        08:15
      </span>

      {/* Network, WiFi and Battery */}
      <div className="flex items-center gap-[4px] text-current">

        {/* Cellular Signal */}
        <svg
          width="15"
          height="12"
          viewBox="0 0 15 12"
          fill="currentColor"
          className="text-current"
        >
          <rect x="1" y="7" width="2.5" height="4" rx="0.5" />
          <rect x="4.5" y="5" width="2.5" height="6" rx="0.5" />
          <rect x="8" y="3" width="2.5" height="8" rx="0.5" />
          <rect x="11.5" y="1" width="2.5" height="10" rx="0.5" />
        </svg>

        {/* WiFi */}
        <svg
          width="17"
          height="13"
          viewBox="0 0 17 13"
          fill="none"
          className="text-current"
        >
          <path
            d="M1 4C5.3 0.4 11.7 0.4 16 4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M3.8 6.8C6.5 4.5 10.5 4.5 13.2 6.8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M6.5 9.5C7.7 8.5 9.3 8.5 10.5 9.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="8.5" cy="11.5" r="1" fill="currentColor" />
        </svg>

        {/* Battery */}
        <svg
          width="21"
          height="12"
          viewBox="0 0 21 12"
          fill="none"
          className="text-current"
        >
          <rect
            x="1"
            y="1"
            width="16"
            height="10"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="3"
            y="3"
            width="12"
            height="6"
            rx="1"
            fill="currentColor"
          />
          <path
            d="M18.5 4V8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

      </div>
    </div>
  );
}

export default StatusBar;
