import React from "react";

function Cell({ value, clickHandler }) {
  return value === "X" ? (
    <button id="cell" className="grid-buttons red" onClick={clickHandler}>
      {value}
    </button>
  ) : (
    <button id="cell" className="grid-buttons blue" onClick={clickHandler}>
      {value}
    </button>
  );
}

export default Cell;
