import React from "react";

function Cell({ value, clickHandler }) {
  //DONE: if the value is x css red
  //DONE: if the value is o css blue

  return value === "X" ? (
    <button id="cell" className="grid-buttons-red" onClick={clickHandler}>
      {value}
    </button>
  ) : (
    <button id="cell" className="grid-buttons-blue" onClick={clickHandler}>
      {value}
    </button>
  );
}

export default Cell;
