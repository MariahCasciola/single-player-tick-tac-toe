import React, { useState, useEffect } from "react";
import Cell from "./Cell";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  // const [xFirst, setXFirst] = useState(true);
  const [player, setPlayer] = useState("");
  const [program, setProgram] = useState("");
  const [cells, setCells] = useState(Array(9).fill(null));

  // all possible winning conditions
  function whoWins(cells) {
    const threeInARow = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < threeInARow.length; i++) {
      let [cellOne, cellTwo, cellThree] = threeInARow[i];
      // check if any cell data matches threeInARow array
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
  function nullIndices(cellsCopy) {
    const emptySpaces = [];
    for (let i = 0; i < cellsCopy.length; i++) {
      if (cellsCopy[i] === null) {
        emptySpaces.push(i);
      }
    }
    return emptySpaces;
  }

  const assignPlayer = () => {
    // if the player gets 0, they are "X", if the player gets 1 they are "O", the program will be the other player
    let number = Math.floor(Math.random() * 2);
    if (number === 0) {
      setPlayer("X");
      setProgram("O");
      setXIsNext(true);
    } else {
      setPlayer("O");
      setProgram("X");
      setXIsNext(false);
    }
    return player;
  };

  // assigns the player randomly to "X" or "O" when the web page loads/is mounted
  useEffect(() => {
    assignPlayer();
  }, []);

  function playerTurn(i) {
    const cellsCopy = cells.slice();
    cellsCopy[i] = player;
    setXIsNext(!xIsNext);
    return cellsCopy;
  }

  const checkIfPlayerWins = () => {
    //stop the player from winning when it is the program's turn
    // make a copy of cells
    // check threeInARow
    // check if x indices match 2 of each threeInARow sub array
  };

  // TODO: check if x will win if the cpu
  // for program to pick a corner, if all corners are full pick center
  const randomCorner = (cellsCopy) => {
    const fourCorners = [0, 2, 6, 8];
    const validMoves = nullIndices(cellsCopy);
    for (let i = 0; i < validMoves.length; i++) {
      for (let j = i + 1; j < fourCorners.length; j++) {
        if (validMoves.includes(fourCorners[j])) {
          return fourCorners[j];
        } else if (
          !validMoves.includes(fourCorners[j]) &&
          validMoves.includes(4)
        )
          return 4;
      }
    }
    const randomIndex = Math.floor(Math.random() * validMoves.length);
    if (validMoves.includes(randomIndex)) return randomIndex;
  };

  function cpuTurn(cellsCopy) {
    const corner = randomCorner(cellsCopy);
    cellsCopy[corner] = program;
    setXIsNext(xIsNext);
    return cellsCopy;
  }

  // clears board
  const newGame = () => {
    setCells(Array(9).fill(null));
  };

  // click handler for each cell on board
  const clickHandler = (i) => {
    // stops a player from overiding the value of an occupied cell
    if (whoWins(cells) || cells[i]) {
      return;
    }
    // players turn
    const playerBoard = playerTurn(i);
    // programs turn
    const cpuBoard = cpuTurn(playerBoard);
    setCells(cpuBoard);
  };

  // TODO: remake into a function that returns status?
  const winner = whoWins(cells);
  let status;
  if (winner) {
    status = "Hoho, three in a row! " + winner + " Wins!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  if (!cells.includes(null) && !whoWins(cells)) {
    status = "Meow! It's a cat game";
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
          onClick={() => newGame()}
        >
          RESTART
        </button>
      </div>
    </div>
  );
}

export default Board;
