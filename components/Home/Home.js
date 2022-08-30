import "./Home.scss";

import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import { Counter } from "../Counter/Counter";
import React from "react";
import bg1 from "../../image/bg-1.jpg";
import bg2 from "../../image/bg-2.png";
import bg3 from "../../image/bg-3.png";
import bg4 from "../../image/bg-4.png";
import bg5 from "../../image/bg-5.png";
import bg6 from "../../image/lucas-y-yo.jpeg";
import flowerTop from "../../image/flower-top-left.png";

export default function Home() {
  return (
    <main>
      <ParallaxProvider>
        <header>
          <div className="section-simple">
            <div id="main-section">
              <img
                className="img-flower"
                src={flowerTop}
                alt="flower"
                width={20}
              />

              <div className="home">
                <div>
                  <h1>
                    Jesica <br /> & <br /> Lucas
                  </h1>
                </div>
              </div>

              <div className="background-counter">
                <h6>
                  ¡Siiii, Nos <br /> Casamooos!
                </h6>
              </div>
              <div className="counter2">
                <Counter />
                {/* <button onClick={notify}>Inscreva-se</button> */}
              </div>
            </div>
          </div>
          <ParallaxBanner
            className="banner"
            layers={[
              {
                image: bg4,
                translateY: [0, 50],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg2,
                translateY: [5, 45],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg3,
                translateY: [10, 30],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg4,
                translateY: [15, 25],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg5,
                translateY: [20, 20],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
            ]}
          />
        </header>
      </ParallaxProvider>
    </main>
  );
}
