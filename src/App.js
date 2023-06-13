import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./Navbar"
import Main from "./Main"
import About from "./About"
import Contact from "./Contact"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
