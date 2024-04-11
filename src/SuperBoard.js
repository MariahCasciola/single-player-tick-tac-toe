import React from "react";
import Cell from "./Cell";

function SuperBoard() {
  return (
    <div id="board">
      <div className="row center">
        <Cell className="right-border bottom-border" />
        <Cell className="right-border bottom-border" />
        <Cell className="bottom-border" />
      </div>
      <div className="row center">
        <Cell className="right-border bottom-border" />
        <Cell className="right-border bottom-border" />
        <Cell className="bottom-border" />
      </div>
      <div className="row center">
        <Cell className="right-border" />
        <Cell className="right-border" />
        <Cell className={""} />
      </div>
    </div>
  );
}

export default SuperBoard;
