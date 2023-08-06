import { RouterProvider } from "react-router-dom"
import { Router } from "../routes/routes"

function App() {
  return (
    <main>
      <RouterProvider router={Router} />
    </main>
  )
}

export default App
