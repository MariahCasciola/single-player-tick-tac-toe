import React from "react";
import Board from "./Board";

function SuperBoard() {
  return (
    <div id="super-board">
      <h2 className="o">Super-Tic-Tac-Toe</h2>
      <div className="row center">
        <div className="right-border bottom-border super-grid-buttons">
          <Board />
        </div>
        <div className="right-border bottom-border super-grid-buttons">
          <Board />
        </div>
        <div className="bottom-border super-grid-buttons">
          <Board />
        </div>
      </div>
      <div className="row center">
        <div className="right-border bottom-border super-grid-buttons">
          <Board />
        </div>
        <div className="right-border bottom-border super-grid-buttons">
          <Board />
        </div>
        <div className="bottom-border">
          <Board />
        </div>
      </div>
      <div className="row center">
        <div className="right-border super-grid-buttons">
          <Board />
        </div>
        <div className="right-border super-grid-buttons">
          <Board />
        </div>
        <div className="">
          <Board />
        </div>
      </div>
    </div>
  );
}

export default SuperBoard;
