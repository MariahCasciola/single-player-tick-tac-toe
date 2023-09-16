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
      const [cellOne, cellTwo, cellThree] = threeInARow[i];
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
  //cellsCopy.filter((cell, index) => { return cell === null;});
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

  // stop the player from winning when it is the program's turn, by blocking, and checks where the program can win
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
    // if any of these # are valid, that is a winning move
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
    cellsCopy[i] = player;
    setXIsNext(!xIsNext);
    return cellsCopy;
  }

  // FUTURE OF RANDOM CORNER:
  // we can improve this with time:
  // if cpu has a corner, pick the opposite corner, if cpu has 2 opposite corner, then the cpu can pick a random opposite corner
  // random Corner is only for the first move
  // DONE: check if player will win if the cpu does block the player
  // for program to pick a corner, if all corners are full pick center

  // potentially split into random corner, center, and randomCell functions
  const randomCorner = (cellsCopy) => {
    // if all 4 corners are valid, then we take a random corner
    // if any corner is invalid, we take the center if it is valid
    // if none of the above, return -1
    const fourCorners = [0, 2, 6, 8];
    const randomCnrIndx = Math.floor(Math.random() * fourCorners.length);
    const validMoves = nullIndices(cellsCopy);
    for (let i = 0; i < validMoves.length; i++) {
      for (let j = 0; j < fourCorners.length; j++) {
        if (validMoves.includes(fourCorners[randomCnrIndx])) {
          return fourCorners[randomCnrIndx];
        }
        if (
          !validMoves.includes(fourCorners[randomCnrIndx]) &&
          validMoves.includes(4)
        )
          return 4;
      }
    }
    // return -1;
  };

  // DONE: Write a function that will take cellsCopy
  // And it will return a random valid move.
  // This function will get called last in cpuTurn if cpuMove is still <0, fucntion called after random corner in cpuTurn
  function randomCell(cellsCopy) {
    // program cannot take a corner, cannot take the center, take a random valid space
    const validMoves = nullIndices(cellsCopy);
    const randomIndex = Math.floor(Math.random() * validMoves.length);
    console.log("randomIndex", randomIndex);
    console.log("validMoves[randomIndex]", validMoves[randomIndex]);
    // if (validMoves[randomIndex]) return validMoves[randomIndex];
    // if (validMoves[randomIndex] === undefined) return 1;
    return validMoves[randomIndex];
  }

  function cpuTurn(cellsCopy) {
    let cpuMove = programWins(cellsCopy, program);
    console.log("cpumove after check program", cpuMove);
    if (cpuMove < 0) cpuMove = programWins(cellsCopy, player);
    console.log("cpuMove after check player", cpuMove);
    if (cpuMove < 0) cpuMove = randomCorner(cellsCopy);
    console.log("cpuMove after random corner", cpuMove);
    if (cpuMove < 0) cpuMove = randomCell(cellsCopy);
    console.log("cpuMove after random cell", cpuMove);
    // once one round has passed, check if player will beat program
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
    // programs turn
    const cpuBoard = cpuTurn(playerBoard);
    setCells(cpuBoard);
  };

  // TODO: remake into a function that returns status
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
