import React, { useState, useEffect } from "react";
import Split from "react-split";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownPreviewer from "./MarkdownPreviewer";

function Workspace() {
  const [markDown, setMarkDown] = useState("# Hello World");
  const [orientation, setOrientation] = useState("horizontal");

  useEffect(() => {
    let changeOrientation = () => {
      setOrientation(window.innerWidth < 600 ? "vertical" : "horizontal");
    };
    changeOrientation();
    window.onresize = changeOrientation;
  }, []);

  return (
    <div className="work-area">
      <Split
        className="wrapper-card"
        sizes={[50, 50]}
        minSize={100}
        expandToMin={false}
        gutterAlign="center"
        direction={orientation}>
        <MarkdownEditor content={markDown} changeContent={setMarkDown} />
        <MarkdownPreviewer content={markDown} />
      </Split>
    </div>
  );
}

export default Workspace;
