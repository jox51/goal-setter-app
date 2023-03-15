import Landing from "./pages/Landing"
import Navbar from "./components/Navbar"
import CreateGoal from "./pages/CreateGoal"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/creategoal" element={<CreateGoal />} />
      </Routes>
    </main>
  )
}

export default App
