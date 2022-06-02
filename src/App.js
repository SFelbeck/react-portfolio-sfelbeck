import React from "react";
import MainPage from "./components/Display";
import Project from "./components/Project";
import Contact from "./components/Contact"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


//header and footer?
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App;