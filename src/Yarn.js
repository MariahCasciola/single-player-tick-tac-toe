import { useState, useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

function Yarn() {
  const animation = useRef(null);

  useEffect(() => {
    animation.current = anime({
      targets: ".yarn-ball",
      translateX: {
        value: -100,
        duration: 800,
      },
      rotate: {
        value: 360,
        duration: 1800,
        easing: "easeInOutSine",
      },
      delay: 250, // All properties except 'scale' inherit 250ms delay
    });
  }, []);

  return (
    <div className="center">
      <div className="yarn-container">
        <div className="yarn-ball">
          <div className="yarn-strand">
            <div className="yarn-strand middle">
              <div className="yarn-strand">
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yarn;
