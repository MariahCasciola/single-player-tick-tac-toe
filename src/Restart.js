import React from "react";

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
      {status === "Meow! It's a cat game!" ? (
        <div className="center direction-col">
          <div className="cat">
            <div className="ear ear--left"></div>
            <div className="ear ear--right"></div>
            <div className="face">
              <div className="eye eye--left">
                <div className="eye-pupil"></div>
              </div>
              <div className="eye eye--right">
                <div className="eye-pupil"></div>
              </div>
              <div className="muzzle"></div>
            </div>
          </div>
          <footer id="author" className="center">
            Pure CSS cat animation by Johan Mochet
          </footer>
        </div>
      ) : null}
    </>
  );
}

export default Restart;
