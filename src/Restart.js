import React from "react";
import Cat from "./Cat";

function Restart({ newGame, status }) {
  return (
    <>
      <div className="center">
        <button
          id="restart"
          className="center restart-button"
          onClick={() => newGame()}
        >
          RESTART
        </button>
      </div>
   <Cat status={status}/>
    </>
  );
}

export default Restart;
