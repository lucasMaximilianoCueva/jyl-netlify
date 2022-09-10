import "./Home.scss";

import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { useCallback, useEffect, useRef, useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Counter } from "../Counter/Counter";
import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import backgFooter from "../../image/backg-footer.png";
import bg1 from "../../image/bg-1.jpg";
import bg2 from "../../image/bg-2.png";
import bg3 from "../../image/bg-3.png";
import bg4 from "../../image/bg-4.png";
import bg5 from "../../image/bg-5.png";
import bg6 from "../../image/lucas-y-yo.jpeg";
import branch from "../../image/FLOWER.png";
import bus from "../../image/bus.png";
import copy from "../../image/cop.png";
import dance from "../../image/dance.png";
import faceLogo from "../../image/FacebookLogo.png";
import flowerRegalo from "../../image/hojamarron.png";
import flowerSingle from "../../image/Flower-small.png";
import flowerTop from "../../image/flower-top-left.png";
import instaLogo from "../../image/InstagramLogo.png";
import invitacionLogo from "../../image/ubicacion.png";
import mapa from "../../image/mapa_pin.png";
import photoUs from "../../image/lucas-y-yo.jpeg";
import regaloicon from "../../image/regalo.png";
import shoe from "../../image/shoe.png";
import tikLogo from "../../image/TiktokLogo.png";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  colors: ['#ffffff', '#8EAECF'],
  top: 0,
  left: 0
};

export default function Home() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });
  }, [makeShot]);

  const [state, setState] = useState({
    value: "000000000000000000001",
    copied: false,
  });
  const [state2, setState2] = useState({
    value: "000000000000000000002",
    copied: false,
  });
  const [state3, setState3] = useState({
    value: "000000000000000000003",
    copied: false,
  });

  const onCopy = () => {
    setState({ copied: true });
  };
  const onCopy2 = () => {
    setState2({ copied: true });
  };
  const onCopy3 = () => {
    setState3({ copied: true });
  };

  useEffect(() => {
    let ignore = false;
    
    if (!ignore)  fire()
    return () => { ignore = true; }
    },[]);

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

          <div id="Bienvenidos!" className="info-section">
            <div>
              <h1>14&nbsp; Enero 2023</h1>
              <h2>Ceremonia desde 11:30hs.</h2>
              <div className="container-title">
                <img className="flower-small" src={flowerSingle} alt="flower" />
                <h3>
                  Quinta <br /> "Selva Madre"
                </h3>
              </div>
              <p>
                ¡Estamos super felices! Nos sentimos en las nubes y queremos
                compartir con vos todo nuestro amor. Por eso estamos preparando
                con mucho cariño y esfuerzo un casamiento en el que te lo
                pasarás genial. <br /> <br /> Algo super importante, confirmanos
                lo antes posible por favor, que así organizarlo todo nos será
                mucho más fácil. <br /> <br /> ¡Esperamos que disfruten tanto
                como nosotros, un abrazo muuuy grande! <br /> <br /> El día de
                la fiesta compartinos tus <br /> fotos del evento con
              </p>
            </div>
            <div className="redes-icon">
              <img src={instaLogo} alt="" width={50} />
              <img src={faceLogo} alt="" width={50} />
              <img src={tikLogo} alt="" width={50} />
            </div>
            <div className="hashtag-p">
              <p>#shesylu23</p>
            </div>
          </div>

          <div id="ubicacion" className="info-location">
            <div className="info-location-container">
              <img
                className="location-branch"
                src={branch}
                alt="decoration branch"
              />
              <img className="map" src={invitacionLogo} alt="img"></img>
              <h1>Ubicación</h1>
              <p>
                Realizaremos la ceremonia alegórica para los que no pudieron
                acompañarnos en el civil a las 11:30hs. Luego empezamos con la
                fiesta en el mismo lugar! Te dejamos la ubicación y algunos
                medios de transporte para guiarte.
              </p>
              <div className="adress-lines">
                <img src={mapa} alt="img" />
                <p>
                  <b>María A. de Lescano 221, Ministro Rivadavia.</b> <br /> E/
                  25 de mayo y Mariano Acosta.
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104898.24840217024!2d-58.467208442805884!3d-34.75382283654006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32b3b749a3cd7%3A0x3a59437373aab63b!2sQuinta%20Selva%20Madre!5e0!3m2!1ses!2sar!4v1655488011237!5m2!1ses!2sar"
                width="100%"
                height="300"
                style={{ border: 0 }}
                title="madre selva"
              ></iframe>
            </div>
          </div>

          <div className="info-bus">
            <div className="img-bus">
              <img src={bus} alt="img" />
            </div>
            <div className="row-bus">
              <div>
                <p>
                  <b>510 - 2</b> <br /> República Y <br /> Espora (X E. De{" "}
                  <br /> Rosas)
                </p>
              </div>
              <div>
                <p>
                  <b>506</b> <br /> Gendarmería X <br /> Hospital X <br />{" "}
                  República
                </p>
              </div>
            </div>
            <div className="row-bus">
              <div>
                <p>
                  <b>510 - 3</b> <br /> B° Libertad X 25 <br /> De Mayo <br />{" "}
                  <b>
                    ¡Te deja en la <br /> esquina!
                  </b>
                </p>
              </div>
              <div>
                <p>
                  <b>501</b> <br /> Longchamps <br /> 266 - 4 <br /> Mtro.
                  Rivadavia
                </p>
              </div>
            </div>
          </div>

          {/* <div className="invitation-title">
            <h2>
              ¿Nos acompañas <br /> o te lo perdés?
            </h2>
          </div> */}

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

      <div id="regalo" className="gift-section">
        <img className="flower-regalo" src={flowerRegalo} alt="flower"></img>
        <h2 id="asistencia" className="title-regalo">
          Nos acompañas o <br /> te lo perdés?
        </h2>
        <button
          type="button"
          className="btn_confirmar"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://wa.me/message/Z4RYHFSMEJB2C1";
          }}
        >
          <i className="fa-brands fa-whatsapp"></i> Confirmar
        </button>
        <div className="img-plane">
          <img src={regaloicon} alt="img" />
        </div>
        <div>
          <h3 className="gift_title">Regalo</h3>
          <h4>
            Para nosotros lo más importante es poder compartir con vos nuestro
            gran día. Y como sabrás no necesitamos nada más para casa, pero si
            nos queremos ir de Luna de Miel♥. <br /> <br /> Y si deseas nos
            podés ayudar a cumplir nuestro próximo sueño ✈️ por los siguiente
            medios:
          </h4>
          <p className="alias">CBU:</p>
          <div className="copy-clipboard">
            <p>000000000000000000001</p>
            <CopyToClipboard onCopy={onCopy} text={state.value}>
              <img src={copy} width={30} alt="copy-to-clipboard"></img>
            </CopyToClipboard>
          </div>
          <p className="alias">
            Alias: <br />
          </p>
          <div className="copy-clipboard">
            <p>000000000000000000002</p>
            <CopyToClipboard onCopy={onCopy2} text={state2.value}>
              <img src={copy} width={30} alt="copy-to-clipboard"></img>
            </CopyToClipboard>
          </div>
          <p className="alias">Alias Mercado pago:</p>
          <div className="copy-clipboard">
            <p>000000000000000000003</p>
            <CopyToClipboard onCopy={onCopy3} text={state3.value}>
              <img src={copy} width={30} alt="copy-to-clipboard"></img>
            </CopyToClipboard>
          </div>
          <p className="gift_message">
            También dejaremos un cofre <br /> para recibir en la fiesta, <br />{" "}
            como prefieras♥
          </p>
        </div>
      </div>

      <div id="dress-code" className="dress-code-section">
        <div className="img-dress-code">
          <img src={shoe} alt="img" />
        </div>
        <div>
          <h4>Dress Code</h4>
          <h5>Elegante Sport</h5>
          <p>
            Peeeroooo te recomendamos que lleves otra muda de ropa cómoda y/o
            traje de baño ya que haremos juegos (si el clima lo permite) y
            tenemos pile para disfrutar al máximo.
          </p>
        </div>
      </div>

      <div id="playlist" className="playlist-section">
        <div className="img-playlist">
          <img src={dance} alt="img" />
        </div>
        <div>
          <h4>Los infaltables!</h4>
          <p>
            Queremos divertirnos junto a vos, <br /> por eso esperamos tus
            tenaikenes <br />
            favs que no pueden faltar.
          </p>
        </div>
        <div className="button-playlist">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://wa.me/message/Z4RYHFSMEJB2C1";
            }}
          >
            <i className="fa-brands fa-spotify"></i> Sugerir
          </button>
          <img
            src={backgFooter}
            className="background-footer"
            alt="background-footer"
          ></img>
        </div>
        <div className="footer">
          <h4>¡Te esperamos!</h4>
          <div>
            <span className="brand-letter">J</span>{" "}
            <span className="brand-letter-1">&</span>
            <span className="brand-letter">L</span>
          </div>
          <div className="credits">
            <h6>Designed by Jesica Tofaletti</h6>
            <h6>Developed by Lucas M. Cueva</h6>
          </div>
        </div>
      </div>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </main>
  );
}
