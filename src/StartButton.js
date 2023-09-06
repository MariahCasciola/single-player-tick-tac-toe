import React from "react";

function StartButton() {

// TODO: add event handler to start the game
// let player pick x or o, o goes first
// OR
// Math.random

  return (
    <div className="center">
      <button id="start-button" className="center start-button">
        START
      </button>
    </div>
  );
}

export default StartButton;
