
import { useEffect, useState } from "react"
import usersData from "../data/users"
import UserCard from "../components/UserCard"
import Loader from "../components/Loader"
import ErrorMessage from "../components/ErrorMessage"

function Users({
  favorites,
  onToggleFavorite,
}) {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = "Users | Team Directory"

    const timer = setTimeout(() => {
      setUsers(usersData)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  
useEffect(() => {
  document.title =
    `Users (${filteredUsers.length}) | Team Directory`
}, [filteredUsers.length])


  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Our Team
        </h1>

        <p className="mt-2 text-gray-600">
          Browse our team members and discover their roles.
        </p>
      </div>

      <div className="mb-6">
        <label
          htmlFor="search"
          className="mb-2 block font-semibold text-gray-700"
        >
          Search by name
        </label>

        <input
          id="search"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Type a user's name..."
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {loading ? (
        <Loader />
      ) : filteredUsers.length === 0 ? (
        <ErrorMessage message="No users found." />
      ) : (
        <>
          <p className="mb-4 text-sm text-gray-600">
            Showing {filteredUsers.length} user(s)
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                isFavorite={favorites.includes(user.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default Users
