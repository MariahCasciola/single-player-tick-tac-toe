import React, { useState } from "react";
import Cell from "./Cell";
import StartButton from "./StartButton";

function Board() {
  const [cells, setCells] = useState(Array(9).fill(null));

//   DONE: create a click handler for each cell
  const clickHandler = (i) => {
    // DONE: make a shallow copy of the array in order not to mutate state
    const nextCells = cells.slice();
    nextCells[i] = "X";
    setCells(nextCells);
  };

  return (
    <div id="board">
      <div className="row center">
        <Cell value={cells[0]} clickHandler={() => clickHandler(0)} />
        <Cell value={cells[1]} clickHandler={() => clickHandler(1)} />
        <Cell value={cells[2]} clickHandler={() => clickHandler(2)} />
      </div>
      <div className="row center">
        <Cell value={cells[3]} clickHandler={() => clickHandler(3)} />
        <Cell value={cells[4]} clickHandler={() => clickHandler(4)} />
        <Cell value={cells[5]} clickHandler={() => clickHandler(5)} />
      </div>
      <div className="row center">
        <Cell value={cells[6]} clickHandler={() => clickHandler(6)} />
        <Cell value={cells[7]} clickHandler={() => clickHandler(7)} />
        <Cell value={cells[8]} clickHandler={() => clickHandler(8)} />
      </div>
      <StartButton />
    </div>
  );
}

export default Board;
