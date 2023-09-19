import React, { useState } from "react";
import Cell from "./Cell";
import Restart from "./Restart";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [player, setPlayer] = useState("X");
  const [program, setProgram] = useState("O");
  const [cells, setCells] = useState(Array(9).fill(null));

  // returns "X", "O", or "null", if it returns null, there is not a winner
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
      const [cellOne, cellTwo, cellThree] = threeInARow[i];
      // check if any cell data matches threeInARow array
      if (
        cells[cellOne] &&
        cells[cellOne] === cells[cellTwo] &&
        cells[cellOne] === cells[cellThree]
      ) {
        // there is a winner
        return cells[cellOne];
      }
    }
    // cat game
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

  // returns indices of moves made by the player or the program
  const grabAllMoves = (cells, who) => {
    return cells
      .map((__cell, index) => {
        return index;
      })
      .filter((index) => {
        return cells[index] === who;
      });
  };

  // returns winning moves for either the player or the program, or returns negative one for no winning moves
  const programWins = (cells, who) => {
    const validMoves = nullIndices(cells);
    const moves = grabAllMoves(cells, who);
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
    // if any of these #s are valid, that is a winning move
    const playWinCon = threeInARow
      // map the rows of win conditions into the index that program needs to block
      .map((row) => {
        // find a winning move we need to block
        const [first, second, third] = row;
        if (moves.includes(first) && moves.includes(second)) return third;

        if (moves.includes(first) && moves.includes(third)) return second;

        if (moves.includes(second) && moves.includes(third)) return first;

        // no winning moves
        return -1;
      })
      .filter((blockingIndex) => {
        if (blockingIndex < 0) return false;
        if (!validMoves.includes(blockingIndex)) return false;
        //else return true
        return true;
      });

    // nothing to block
    if (playWinCon.length < 1) return -1;

    // block the first match
    return playWinCon[0];
  };

  function playerTurn(i) {
    const cellsCopy = cells.slice();
    // assigns the cell value to player, which is "X"
    cellsCopy[i] = player;
    setXIsNext(!xIsNext);
    return cellsCopy;
  }

  // will return random corner values, and check if they are available in the grid, or return -1
  const randomCorner = (cellsCopy) => {
    const fourCorners = [0, 2, 6, 8];
    const randomCnrIndx = Math.floor(Math.random() * fourCorners.length);
    const validMoves = nullIndices(cellsCopy);

    if (validMoves.includes(fourCorners[randomCnrIndx])) {
      return fourCorners[randomCnrIndx];
    }
    // no valid corners
    return -1;
  };

  // will return a random indice that is available on the grid
  function randomCell(cellsCopy) {
    const validMoves = nullIndices(cellsCopy);
    const randomIndex = Math.floor(Math.random() * validMoves.length);
    return validMoves[randomIndex];
  }

  function cpuTurn(cellsCopy) {
    let cpuMove = -1;

    cpuMove = programWins(cellsCopy, program);

    if (cpuMove < 0) cpuMove = programWins(cellsCopy, player);

    // take the middle
    const validMoves = nullIndices(cellsCopy);
    if (validMoves.includes(4)) cpuMove = 4;

    if (cpuMove < 0) cpuMove = randomCorner(cellsCopy);

    if (cpuMove < 0) cpuMove = randomCell(cellsCopy);

    // assigns the cell value to program, which is "O"
    cellsCopy[cpuMove] = program;
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

    // if the player wins, the cpu will not place "O" on the grid
    if (whoWins(playerBoard) === "X") {
      setCells(playerBoard);
      return;
    }
    // programs turn
    const cpuBoard = cpuTurn(playerBoard);
    setCells(cpuBoard);
  };

  // returns status of that displays below board
  const status = () => {
    const winner = whoWins(cells);
    let status;
    if (winner) {
      status = "Hoho, three in a row! " + winner + " Wins!";
    } else {
      status = "You are: " + (xIsNext ? "X" : "O");
    }
    if (!cells.includes(null) && !whoWins(cells)) {
      status = "Meow! It's a cat game";
    }
    return status;
  };

  return (
    <div id="board">
      <div className="row center">
        <Cell
          className="right-border bottom-border"
          value={cells[0]}
          clickHandler={() => clickHandler(0)}
        />
        <Cell
          className="right-border bottom-border"
          value={cells[1]}
          clickHandler={() => clickHandler(1)}
        />
        <Cell
          className="bottom-border"
          value={cells[2]}
          clickHandler={() => clickHandler(2)}
        />
      </div>
      <div className="row center">
        <Cell
          className="right-border bottom-border"
          value={cells[3]}
          clickHandler={() => clickHandler(3)}
        />
        <Cell
          className="right-border bottom-border"
          value={cells[4]}
          clickHandler={() => clickHandler(4)}
        />
        <Cell
          className="bottom-border"
          value={cells[5]}
          clickHandler={() => clickHandler(5)}
        />
      </div>
      <div className="row center">
        <Cell
          className="right-border"
          value={cells[6]}
          clickHandler={() => clickHandler(6)}
        />
        <Cell
          className="right-border"
          value={cells[7]}
          clickHandler={() => clickHandler(7)}
        />
        <Cell value={cells[8]} clickHandler={() => clickHandler(8)} />
      </div>
      <div id="status" className="center">
        {status()}
      </div>
      <Restart
        newGame={() => {
          newGame();
        }}
        status={status()}
      />
    </div>
  );
}

export default Board;
