import React from "react";
import logo from "../src/imgs/logo.png";
function Logo() {
  return (
    <a href="/">
      <div className="block h-24 w-24">
        <img src={logo} alt="logo" />
      </div>
    </a>
  );
}

export default Logo;
