import React from "react";

function Homepage() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-evenly items-center h-48 w-96 bg-blue-600">
        <div className="flex justify-center items-center bg-green-600 w-32 h-32 rounded text-2xl">
          PROS
        </div>
        <div className="flex justify-center items-center bg-red-600 w-32 h-32 rounded text-2xl">
          CONS
        </div>
      </div>
    </div>
  );
}

export default Homepage;
