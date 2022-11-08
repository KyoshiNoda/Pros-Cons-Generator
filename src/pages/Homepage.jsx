import React from "react";
import MakeModal from "../components/CreateModal";
function Homepage() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-evenly items-center h-48 w-96 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex justify-center items-center bg-green-600 w-32 h-32 rounded text-2xl">
          <MakeModal/>
        </div>

        <a href="/List">
          <div className="flex justify-center items-center bg-red-600 w-32 h-32 rounded text-2xl">
            View
          </div>
        </a>
      </div>
    </div>
  );
}

export default Homepage;
