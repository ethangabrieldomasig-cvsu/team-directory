
import { useEffect } from "react"
import { Link } from "react-router-dom"

function NotFound() {
  useEffect(() => {
    document.title = "404 Not Found | Team Directory"
  }, [])

  return (
    <section className="py-16 text-center">
      <h1 className="text-6xl font-bold text-blue-600">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold text-gray-900">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Return Home
      </Link>
    </section>
  )
}

export default NotFound
