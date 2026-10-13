
function Button({
  label,
  onClick,
  variant = "primary",
  children,
}) {
  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",
    danger:
      "bg-red-600 text-white hover:bg-red-700",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300",
  }

  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`rounded-lg px-4 py-2 transition ${styles[variant] || styles.primary}`}
    >
      {children || label}
    </button>
  )
}

export default Button
