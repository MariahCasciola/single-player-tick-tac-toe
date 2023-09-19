import React from "react";

function Cell({ value, clickHandler, className }) {
  return value === "X" ? (
    <div
      id="cell"
      className={`grid-buttons x center ${className}`}
      onClick={clickHandler}
    >
      {value}
    </div>
  ) : (
    <div
      id="cell"
      className={`grid-buttons o center ${className}`}
      onClick={clickHandler}
    >
      {value}
    </div>
  );
}

export default Cell;
