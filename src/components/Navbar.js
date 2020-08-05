import React from "react";
import MarkDownLogo from "./markdown.svg";
function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="title">
        <img src={MarkDownLogo} alt="" />
        &nbsp;Markdown Editor
      </h3>
    </nav>
  );
}

export default Navbar;
