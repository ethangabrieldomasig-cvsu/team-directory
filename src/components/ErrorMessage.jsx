
function ErrorMessage({ message }) {
  return (
    <div
      className="rounded-lg border border-red-300 bg-red-50 p-4 text-center text-red-700"
      role="alert"
    >
      {message}
    </div>
  )
}

export default ErrorMessage
