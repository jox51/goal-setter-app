import Landing from "./pages/Landing"
import Navbar from "./components/Navbar"
import CreateGoal from "./pages/CreateGoal"
import { Routes, Route } from "react-router-dom"
import SavedGoals from "./pages/SavedGoals"
import Footer from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<PrivateRoute />}>
          <Route path="/creategoal" element={<CreateGoal />} />
          <Route path="/savedgoals" element={<SavedGoals />} />
        </Route>
      </Routes>
      <Footer />
    </main>
  )
}

export default App
