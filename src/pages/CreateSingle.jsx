import React from "react";
import Logo from "../Logo";
function CreateSingle() {
  return (
    <div className="w-screen h-screen bg-purple-500">
      <Logo/>
      <div className="flex items-center justify-center">
        <div className="bg-gray-100 h-56 w-96 rounded">
          <h1 className="flex justify-center text-3xl">Pros Cons Generator</h1>
          <div className="flex justify-evenly p-4">
            <div className="flex justify-center items-center bg-green-500 h-40 w-20 rounded text-white text-2xl">
              Pros
            </div>

            <div className="flex justify-center items-center bg-red-500 h-40 w-20 rounded text-white text-2xl">
              Cons
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateSingle;
