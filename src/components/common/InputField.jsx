
export default function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  icon: Icon,
  required = false,
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-[#45445A]">
          {label}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <Icon
            size={19}
            className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#8957FF]"
          />
        )}

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`h-[54px] w-full rounded-xl border border-[#D5D5E5] bg-white text-sm text-[#17182B] outline-none transition focus:border-[#8957FF] focus:ring-2 focus:ring-[#8957FF]/10 ${
            Icon ? "pl-11 pr-4" : "px-4"
          }`}
        />
      </div>
    </div>
  );
}
