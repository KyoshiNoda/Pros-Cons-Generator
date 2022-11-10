import React from "react";

function ConSingle() {
  return (
    <div className="flex flex-col bg-red-500 h-full w-1/2 rounded">
      <div className="text-center bg-slate-700">
        <h1 className="text-4xl text-white items-start">Pros</h1>
      </div>
      <button
        type="button"
        class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Add
      </button>
    </div>
  );
}

export default ConSingle;
