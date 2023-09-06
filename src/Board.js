import React from "react";
import Cell from "./Cell";
import StartButton from "./StartButton";

function Board() {
  return (
    <div id="board">
      <div class="row center">
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div class="row center">
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div class="row center">
        <Cell />
        <Cell />
        <Cell />
      </div>
      <StartButton />
    </div>
  );
}

export default Board;
