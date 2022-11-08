import React from "react";
import CreateModal from "../components/CreateModal";
import ViewModal from "../components/ViewModal";
function Homepage() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-evenly items-center h-48 w-96 bg-gradient-to-r from-cyan-500 to-blue-500">
          <CreateModal/>
          <ViewModal/>
      </div>
    </div>
  );
}

export default Homepage;
