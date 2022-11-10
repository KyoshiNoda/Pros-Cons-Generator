import React from "react";
import Logo from "../Logo";
import ProSingle from "../components/CreateSingle/ProSingle";
import ConSingle from "../components/CreateSingle/ConSingle";
function CreateSingle() {
  return (
    <>
      <Logo />
      <div className="flex justify-center bg-blue-100 w-screen h-screen">
        <div className="flex flex-col h-1/2 w-1/2 bg-slate-400 rounded items-center gap-y-5">
          <h1 className="text-4xl text-white ">Create Single</h1>

          <div className="flex h-3/4 w-3/4">
            <ProSingle />
            <ConSingle />
          </div>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateSingle;
