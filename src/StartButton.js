import React from "react";

function StartButton() {
  // TODO: add click handler to start the game, and return zero or one
  const getRandomInt = (num) => {
    return Math.floor(Math.random() * num);
  };

  const startGame = () => {
    //number calculated for the player
    // If the player gets 0, they are "X", if the player gets 1 they are "O"
    return getRandomInt(2);
  };

  //  TOD0: lift state to Board.js, so the value of 0 or 1 can decide whether the player or the AI play first
  // Reasoning to place in Board.js: If the player gets 0, they are "X", if the player gets 1 they are "O"

  return (
    <div className="center">
      <button
        id="start-button"
        className="center start-button"
        onClick={startGame}
      >
        START
      </button>
    </div>
  );
}

export default StartButton;
