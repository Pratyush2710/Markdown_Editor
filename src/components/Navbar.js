import React from "react";
import MarkDownLogo from "./markdown.svg";
import GitHub from "./github.svg";
function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="title">
        <img src={MarkDownLogo} alt="" />
        &nbsp;Markdown Editor
      </h3>
      <img
        onClick={() => window.open("https://github.com/Pratyush2710")}
        className="github"
        src={GitHub}
        alt=""
      />
    </nav>
  );
}

export default Navbar;
