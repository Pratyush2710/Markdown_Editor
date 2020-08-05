import React, { useState } from "react";
import Split from "react-split";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownPreviewer from "./MarkdownPreviewer";

function Workspace() {
  const [markDown, setMarkDown] = useState("# Hello World");

  return (
    <div className="work-area">
      <Split
        className="wrapper-card"
        sizes={[50, 50]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize">
        <MarkdownEditor content={markDown} changeContent={setMarkDown} />
        <MarkdownPreviewer content={markDown} />
      </Split>
    </div>
  );
}

export default Workspace;
