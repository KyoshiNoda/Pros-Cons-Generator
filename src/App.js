import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Group from "./pages/Group";
import List from "./pages/List";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Group" element={<Group />} />
        <Route path = "/List" element = {<List/>}/>
      </Routes>
    </>
  );
}

export default App;
