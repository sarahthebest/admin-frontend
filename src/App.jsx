import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Login from "./pages/Dashboard";


function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
