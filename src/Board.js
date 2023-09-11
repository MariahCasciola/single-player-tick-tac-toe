import React, { useState } from "react";
import Cell from "./Cell";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [player, setPlayer] = useState("");
  const [program, setProgram] = useState("");
  const [cells, setCells] = useState(Array(9).fill(null));

  // helper function that decides if the player or the program plays first
  const getRandomInt = (num) => {
    return Math.floor(Math.random() * num);
  };

  // all possible winning conditions
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

    for (let i = 0; i < threeInArow.length; i++) {
      let [cellOne, cellTwo, cellThree] = threeInArow[i];
      //   check if any cell data matches threeInARow array
      if (
        cells[cellOne] &&
        cells[cellOne] === cells[cellTwo] &&
        cells[cellOne] === cells[cellThree]
      ) {
        return cells[cellOne];
      }
    }
    return null;
  }

  // returns array of indices that have null values, so the program can check the game state every time it plays
  function nullIndices(cells) {
    let emptySpaces = [];
    for (let i = 0; i < cells.length; i++) {
      if (cells[i] === null) {
        emptySpaces.push(i);
      }
    }
    return emptySpaces;
  }

  const randomIndex = Math.floor(Math.random() * nullIndices(cells).length - 1);

  const assignPlayer = () => {
    // if the player gets 0, they are "X", if the player gets 1 they are "O", the program will be the other player
    let number = getRandomInt(2);
    if (number === 0) {
      setPlayer("X");
      setProgram("O");
    } else {
      setPlayer("O");
      setProgram("X");
    }
    return player;
  };

  const startGame = () => {
    assignPlayer();
    // make x go first
    if (player === "X") {
      setXIsNext(true);
    }
    if (program === "O") {
      setXIsNext(false);
    }
  };

  //   create a click handler for each cell
  const clickHandler = (i) => {
    if (winningConditions(cells) || cells[i]) {
      return;
    }
    //shallow copy of the array
    const cellsCopy = cells.slice();
    cellsCopy[i] = player;
    setCells(cellsCopy);
    setXIsNext(!xIsNext);
  };

  // TODO: create a message and reasoning for a cat game
  const winner = winningConditions(cells);
  let status;
  if (winner) {
    status = winner + " Wins!";
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
      <div className="center">
        <button
          id="start-button"
          className="center start-button"
          onClick={() => startGame()}
        >
          START
        </button>
      </div>
    </div>
  );
}

export default Board;
