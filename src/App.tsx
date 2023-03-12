import React from "react";
import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import Map from "./pages/Map"

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/map/:id" element={<Map/>} />
      </Routes>
  )
}

export default App
