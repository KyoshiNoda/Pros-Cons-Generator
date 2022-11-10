import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ViewGroup from "./pages/ViewGroup";
import ViewList from "./pages/ViewList";
import CreateGroup from "./pages/CreateGroup";
import CreateSingle from "./pages/CreateSingle";
import ViewSingle from "./pages/ViewSingle";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ViewGroup" element={<ViewGroup />} />
        <Route path = "/ViewList" element = {<ViewList/>}/>
        <Route path = "/CreateGroup" element = {<CreateGroup/>}/>
        <Route path = "/CreateSingle" element = {<CreateSingle/>}/>
        <Route path = "/ViewSingle" element = {<ViewSingle/>}/>
      </Routes>
    </>
  );
}

export default App;
