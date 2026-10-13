
import { useState } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Users from "./pages/Users"
import UserDetails from "./pages/UserDetails"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

function AppContent() {
  const [favorites, setFavorites] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  function toggleFavorite(id) {
    setFavorites((previousFavorites) => {
      if (previousFavorites.includes(id)) {
        return previousFavorites.filter(
          (favoriteId) => favoriteId !== id
        )
      }

      return [...previousFavorites, id]
    })
  }

  function toggleDarkMode() {
    setDarkMode((previousMode) => !previousMode)
  }

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark-theme" : "light-theme"
      }`}
    >
      <Navbar
        favoriteCount={favorites.length}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/users"
            element={
              <Users
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/users/:id"
            element={<UserDetails />}
          />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="border-t border-gray-200 py-5 text-center text-sm text-gray-500">
        Team Directory App | React Laboratory Activity
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
