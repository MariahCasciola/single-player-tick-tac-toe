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
      {status === "Meow! It's a cat game" ? (
        <>
          <div class="cat">
            <div class="ear ear--left"></div>
            <div class="ear ear--right"></div>
            <div class="face">
              <div class="eye eye--left">
                <div class="eye-pupil"></div>
              </div>
              <div class="eye eye--right">
                <div class="eye-pupil"></div>
              </div>
              <div class="muzzle"></div>
            </div>
          </div>
          <footer id="author" className="center">
            Pure CSS cat animation by Johan Mochet
          </footer>
        </>
      ) : null}
    </>
  );
}

export default Restart;
