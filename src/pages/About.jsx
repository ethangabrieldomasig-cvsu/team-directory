
import { useEffect } from "react"

function About() {
  useEffect(() => {
    document.title = "About | Team Directory"
  }, [])

  return (
    <section className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900">
        About Team Directory
      </h1>

      <p className="mt-4 leading-7 text-gray-600">
        Team Directory is a simple React application
        designed to organize and display team member
        information in one place.
      </p>

      <p className="mt-4 leading-7 text-gray-600">
        Users can browse team members, search by name,
        view individual profiles, manage favorites,
        and switch between light and dark themes.
      </p>

      <div className="mt-8 rounded-xl bg-blue-50 p-6">
        <h2 className="text-xl font-bold text-blue-800">
          Technologies Used
        </h2>

        <ul className="mt-3 list-inside list-disc space-y-2 text-gray-700">
          <li>React and Vite</li>
          <li>Tailwind CSS</li>
          <li>React Router DOM</li>
          <li>React useState and useEffect</li>
          <li>Local JavaScript data</li>
        </ul>
      </div>
    </section>
  )
}

export default About
