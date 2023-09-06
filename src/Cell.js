import React from "react";

function Cell({ value, clickHandler }) {
  return (
    <button id="cell" className="grid-buttons" onClick={clickHandler}>
      {value}
    </button>
  );
}

export default Cell;
