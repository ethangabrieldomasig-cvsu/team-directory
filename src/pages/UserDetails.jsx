
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import usersData from "../data/users"
import Loader from "../components/Loader"
import ErrorMessage from "../components/ErrorMessage"

function UserDetails() {
  const { id } = useParams()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const selectedUser = usersData.find(
      (item) => item.id === Number(id)
    )

    setUser(selectedUser || null)
    setLoading(false)

    if (selectedUser) {
      document.title = `${selectedUser.name} | Team Directory`
    } else {
      document.title = "User Not Found | Team Directory"
    }
  }, [id])

  if (loading) {
    return <Loader />
  }

  if (!user) {
    return (
      <div className="space-y-5">
        <ErrorMessage message="User not found." />

        <Link
          to="/users"
          className="inline-block font-semibold text-blue-600 hover:underline"
        >
          ← Back to Users
        </Link>
      </div>
    )
  }

  return (
    <section className="mx-auto max-w-2xl">
      <Link
        to="/users"
        className="mb-6 inline-block font-semibold text-blue-600 hover:underline"
      >
        ← Back to Users
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700">
          {user.name.charAt(0)}
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          {user.name}
        </h1>

        <p className="mt-2 text-lg text-blue-600">
          {user.role}
        </p>

        <div className="mt-8 space-y-4 text-gray-700">
          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Company:</strong> {user.company}
          </p>

          <p>
            <strong>User ID:</strong> {user.id}
          </p>
        </div>
      </div>
    </section>
  )
}

export default UserDetails
