
export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variant === "primary" ? "primary-button" : "outline-button"} ${className}`}
    >
      {children}
    </button>
  );
}
