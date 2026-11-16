
import { useRef } from "react";

export default function OtpInput({ value, onChange }) {
  const refs = useRef([]);

  const handleChange = (index, digit) => {
    if (digit.length > 1 || (digit !== "" && !"0123456789".includes(digit))) return;

    const updated = value.split("");
    updated[index] = digit;
    onChange(updated.join(""));

    if (digit && index < 5) refs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-between gap-2">
      {Array.from({ length: 6 }, (_, index) => (
        <input
          key={index}
          ref={(el) => (refs.current[index] = el)}
          value={value[index] || ""}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          maxLength={1}
          inputMode="numeric"
          className="h-12 min-w-0 flex-1 rounded-lg border border-gray-200 bg-white text-center text-xl font-semibold focus:border-primary focus:outline-none"
        />
      ))}
    </div>
  );
}
