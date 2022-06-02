import React from "react";
import MainPage from "./components/Display";
import Project from "./components/Project";
import Contact from "./components/Contact"

//imports the routes
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    // these are my front end routes providing navigation to various pages of the app to be called from the navtabs with the mainpage set as default by a route of "/"
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