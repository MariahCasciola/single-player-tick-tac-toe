import React, { useState } from "react";
import Cell from "./Cell";
import StartButton from "./StartButton";

function Board() {
  // DONE: create a state for who is next
  const [xIsNext, setXIsNext] = useState(true);
  const [cells, setCells] = useState(Array(9).fill(null));

  function winningConditions(cells) {
    const threeInArow = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // for loop
    for (let i = 0; i < threeInArow.length; i++) {
      let [alpha, beta, gamma] = threeInArow[i];
      //   check if any cell data matches threeInARow array
      if (
        cells[alpha] &&
        cells[alpha] === cells[beta] &&
        cells[alpha] === cells[gamma]
      ) {
        return cells[alpha];
      }
    }
    //
    return null;
  }

  //   DONE: create a click handler for each cell
  const clickHandler = (i) => {
    if (winningConditions(cells) || cells[i]) {
      return;
    }
    // DONE: make a shallow copy of the array in order not to mutate state
    const nextCells = cells.slice();

    // DONE: check whose turn it is
    if (xIsNext) {
      nextCells[i] = "X";
    } else {
      nextCells[i] = "O";
    }
    setCells(nextCells);
    // DONE: update next turn after X click
    setXIsNext(!xIsNext);
  };

  // TODO: create a message and reasoning for a cat game
  const winner = winningConditions(cells);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

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
      <div className="center">{status}</div>
      <StartButton />
    </div>
  );
}

export default Board;
