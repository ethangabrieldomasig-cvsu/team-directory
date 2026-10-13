
import { Link } from "react-router-dom"
import Button from "./Button"

function UserCard({
  user,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            {user.name}
          </h2>

          <p className="mt-1 text-sm text-blue-600">
            {user.role}
          </p>
        </div>

        <Button
          label={isFavorite ? "Remove favorite" : "Add favorite"}
          variant="secondary"
          onClick={() => onToggleFavorite(user.id)}
        >
          {isFavorite ? "★ Favorited" : "☆ Favorite"}
        </Button>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Company:</strong> {user.company}
        </p>
      </div>

      <Link
        to={`/users/${user.id}`}
        className="mt-5 inline-block font-semibold text-blue-600 hover:underline"
      >
        View Details →
      </Link>
    </div>
  )
}

export default UserCard
