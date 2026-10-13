
import { Link } from "react-router-dom"
import { useEffect } from "react"

function Home() {
  useEffect(() => {
    document.title = "Home | Team Directory"
  }, [])

  return (
    <section className="py-16 text-center">
      <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
        Meet the team
      </p>

      <h1 className="text-4xl font-bold text-gray-900">
        Welcome to Team Directory
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-gray-600">
        Discover our team members, explore their roles,
        and save your favorite people in one place.
      </p>

      <Link
        to="/users"
        className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Explore Users
      </Link>
    </section>
  )
}

export default Home
