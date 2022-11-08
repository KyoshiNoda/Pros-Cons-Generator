import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Group from "./pages/Group";
import List from "./pages/List";
import CreateGroup from "./pages/CreateGroup";
import CreateList from "./pages/CreateList";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Group" element={<Group />} />
        <Route path = "/List" element = {<List/>}/>
        <Route path = "/CreateGroup" element = {<CreateGroup/>}/>
        <Route path = "/CreateList" element = {<CreateList/>}/>
      </Routes>
    </>
  );
}

export default App;
