import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ViewGroup from "./pages/ViewGroup";
import ViewList from "./pages/ViewList";
import CreateGroup from "./pages/CreateGroup";
import CreateList from "./pages/CreateList";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ViewGroup" element={<ViewGroup />} />
        <Route path = "/ViewList" element = {<ViewList/>}/>
        <Route path = "/CreateGroup" element = {<CreateGroup/>}/>
        <Route path = "/CreateList" element = {<CreateList/>}/>
      </Routes>
    </>
  );
}

export default App;
