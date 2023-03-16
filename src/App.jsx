import Landing from "./pages/Landing"
import Navbar from "./components/Navbar"
import CreateGoal from "./pages/CreateGoal"
import { Routes, Route } from "react-router-dom"
import SavedGoals from "./pages/SavedGoals"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/creategoal" element={<CreateGoal />} />
        <Route path="/savedgoals" element={<SavedGoals />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
