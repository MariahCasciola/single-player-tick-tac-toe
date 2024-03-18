import React from "react";
import Yarn from "./Yarn";

function Cat({ status }) {
  return (
    <>
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
            <div className="knot"></div>
            <div className="loop"></div>
            <div className="loop mirror"> </div>
          </div>
          <Yarn />
        </div>
      ) : null}
    </>
  );
}

export default Cat;
