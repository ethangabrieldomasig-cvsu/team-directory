
import { NavLink } from "react-router-dom"
import Button from "./Button"

function Navbar({
  favoriteCount,
  darkMode,
  onToggleDarkMode,
}) {
  const linkStyle = ({ isActive }) =>
    `rounded-md px-3 py-2 ${
      isActive
        ? "bg-blue-600 font-bold text-white"
        : "text-gray-600 hover:bg-gray-200"
    }`

  return (
    <nav className="border-b border-gray-200 bg-white px-4 py-4">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <NavLink
          to="/"
          className="text-xl font-bold text-blue-600"
        >
          TeamDirectory
        </NavLink>

        <div className="flex flex-wrap items-center gap-2">
          <NavLink to="/" end className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/users" className={linkStyle}>
            Users
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

          <span className="px-2 text-sm font-semibold text-blue-600">
            Favorites: {favoriteCount}
          </span>

          <Button
            label="Toggle color theme"
            variant="secondary"
            onClick={onToggleDarkMode}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
