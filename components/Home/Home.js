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
import bus from "../../image/bus-location-icon.svg";
import copy from "../../image/clipboard-copy-icon.svg";
import dance from "../../image/playlist-icon.svg";
import faceLogo from "../../image/FacebookLogo-icon.svg";
import flowerRegalo from "../../image/hojamarron.png";
import flowerSingle from "../../image/Flower-small.png";
import flowerTop from "../../image/flower-top-left.png";
import instaLogo from "../../image/InstagramLogo-icon.svg";
import invitacionLogo from "../../image/location_map-icon.svg";
import locationFlower from "../../image/location-flowers.png";
import mapa from "../../image/location-icon.svg";
import photoUs from "../../image/lucas-y-yo.jpeg";
import regaloicon from "../../image/gift-icon.svg";
import shoe from "../../image/dress-code-icon.svg";
import tikLogo from "../../image/TiktokLogo-icon.svg";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  colors: ["#ffffff", "#8EAECF"],
  top: 0,
  left: 0,
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
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  const [state, setState] = useState({
    value: "0140101703402451997789",
    copied: false,
  });
  const [state2, setState2] = useState({
    value: "SHESYLU",
    copied: false,
  });
  const [state3, setState3] = useState({
    value: "SHESYLU23",
    copied: false,
  });

  const [onCopyClass, setOnCopyClass] = useState("");
  const [mesaggeCopy, setMessageCopy] = useState("copied");

  const [onCopyClass2, setOnCopyClass2] = useState("");
  const [mesaggeCopy2, setMessageCopy2] = useState("copied");

  const [onCopyClass3, setOnCopyClass3] = useState("");
  const [mesaggeCopy3, setMessageCopy3] = useState("copied");

  const onCopy = () => {
    setState({ copied: true });
    setOnCopyClass("copied");
    setMessageCopy("message-copied");
    setTimeout(() => {
      setOnCopyClass("");
      setMessageCopy("copied");
    }, 3000);
  };
  const onCopy2 = () => {
    setState2({ copied: true });
    setOnCopyClass2("copied");
    setMessageCopy2("message-copied");
    setTimeout(() => {
      setOnCopyClass2("");
      setMessageCopy2("copied");
    }, 3000);
  };
  const onCopy3 = () => {
    setState3({ copied: true });
    setOnCopyClass3("copied");
    setMessageCopy3("message-copied");
    setTimeout(() => {
      setOnCopyClass3("");
      setMessageCopy3("copied");
    }, 3000);
  };

  useEffect(() => {
    let ignore = false;

    if (!ignore) fire();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main>
      <ParallaxProvider>
        <header>
          <div className="section-simple">
            <div id="main-section">
              <img className="img-flower" src={flowerTop} alt="flower" />

              <div className="home">
                <div>
                  <h1>
                    Jesica <br /> & <br /> Lucas
                  </h1>
                </div>
              </div>

              <div className="mountain"></div>

              <div className="background-counter">
                <h6 className="nos-casamos">
                  ??Siiii, Nos <br /> Casamooos!
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
              <h2>Ceremonia desde 11:00hs.</h2>
              <div className="container-title">
                <img className="flower-small" src={flowerSingle} alt="flower" />
                <h3>
                  Quinta <br /> "Selva Madre"
                </h3>
              </div>
              <p>
                ??Estamos super felices! Nos sentimos en las nubes y queremos
                compartir con vos todo nuestro amor. Por eso estamos preparando
                con mucho cari??o y esfuerzo un casamiento en el que te lo
                pasar??s genial. <br /> <br /> Algo super importante,{" "}
                <strong>evento +18</strong> confirmanos lo antes posible por
                favor, que as?? organizarlo todo nos ser?? mucho m??s f??cil. <br />{" "}
                <br /> ??Esperamos que disfruten tanto como nosotros, un abrazo
                muuuy grande! <br /> <br /> El d??a de la fiesta compartinos tus{" "}
                <br /> fotos del evento con
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
              <h1>Ubicaci??n</h1>
              <p>
                Realizaremos la ceremonia aleg??rica para los que no pudieron
                acompa??arnos en el civil a las 11:00hs. Luego empezamos con la
                fiesta en el mismo lugar! Te dejamos la ubicaci??n y algunos
                medios de transporte para guiarte.
              </p>
              <div className="adress-lines">
                <img src={mapa} alt="img" />
                <p>
                  <b>Mar??a A. de Lescano 221, Ministro Rivadavia.</b> <br /> E/
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
                  <b>510 - 2</b> <br /> Rep??blica Y <br /> Espora (X E. De{" "}
                  <br /> Rosas)
                </p>
              </div>
              <div>
                <p>
                  <b>506</b> <br /> Gendarmer??a X <br /> Hospital X <br />{" "}
                  Rep??blica
                </p>
              </div>
            </div>
            <div className="row-bus">
              <div>
                <p>
                  <b>510 - 3</b> <br /> B?? Libertad X 25 <br /> De Mayo <br />{" "}
                  <b>
                    ??Te deja en la <br /> esquina!
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

          <div className="location-flowers">
            {/* <img src={locationFlower}></img> */}
            <h2 id="asistencia" className="title-regalo">
              Nos acompa??as o <br /> te lo perd??s?
            </h2>
          </div>

          <div className="container-btn-confirmar">
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
          </div>

          {/* <div className="invitation-title">
            <h2>
              ??Nos acompa??as <br /> o te lo perd??s?
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
        {/* <h2 id="asistencia" className="title-regalo">
          Nos acompa??as o <br /> te lo perd??s?
        </h2> */}
        <div className="img-plane">
          <img src={regaloicon} alt="img" />
        </div>
        <div className="detail-gift">
          <h3 className="gift_title">Regalo</h3>
          <h4>
            Para nosotros lo m??s importante es poder compartir con vos nuestro
            gran d??a. Y como sabr??s no necesitamos nada m??s para casa, pero si
            nos queremos ir de Luna de Miel???. <br /> <br /> Y si deseas nos
            pod??s ayudar a cumplir nuestro pr??ximo sue??o ?????? por los siguiente
            medios:
          </h4>
          <p className="alias">CBU:</p>
          <div className="copy-clipboard">
            <p className={onCopyClass}>0140101703402451997789</p>
            <CopyToClipboard onCopy={onCopy} text={state.value}>
              <button className={onCopyClass || "btn-copy"}>
                {/* <img src={copy} width={30} alt="copy-to-clipboard"></img> */}
                <i className="fa-solid fa-copy"></i>
              </button>
            </CopyToClipboard>
            <span className={mesaggeCopy}>copiado!</span>
          </div>
          <div className="alias-container">
            <p className={onCopyClass || "alias"}>
              Alias: <br />
            </p>
          </div>
          <div className="copy-clipboard">
            <p className={onCopyClass2}>SHESYLU</p>
            <CopyToClipboard onCopy={onCopy2} text={state2.value}>
              <button className={onCopyClass2 || "btn-copy"}>
                {/* <img src={copy} width={30} alt="copy-to-clipboard"></img> */}
                <i className="fa-solid fa-copy"></i>
              </button>
            </CopyToClipboard>
            <span className={mesaggeCopy2}>copiado!</span>
          </div>
          <div className="alias-container">
            <p className={onCopyClass2 || "alias"}>
              Alias Mercado Pago: <br />
            </p>
          </div>
          <div className="copy-clipboard">
            <p className={onCopyClass3}>SHESYLU23</p>
            <CopyToClipboard onCopy={onCopy3} text={state3.value}>
              <button className={onCopyClass3 || "btn-copy"}>
                {/* <img src={copy} width={30} alt="copy-to-clipboard"></img> */}
                <i className="fa-solid fa-copy"></i>
              </button>
            </CopyToClipboard>
            <span className={mesaggeCopy3}>copiado!</span>
          </div>
          <p className="gift_message">
            Tambi??n dejaremos un cofre <br /> para recibir en la fiesta, <br />{" "}
            como prefieras???
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
            Peeeroooo te recomendamos que lleves otra muda de ropa c??moda y/o
            traje de ba??o ya que haremos juegos (si el clima lo permite) y
            tenemos pile para disfrutar al m??ximo.
          </p>
        </div>
      </div>

      <div id="playlist" className="playlist-section">
        <div className="playlist-title">
          <div className="img-playlist">
            <img src={dance} alt="img" />
          </div>
          <div>
            <h4>Los infaltables!</h4>
            <p>
              Queremos divertirnos junto a vos, por eso esperamos tus temaikenes
              favs que no pueden faltar.
            </p>
          </div>
          <div className="button-playlist">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://open.spotify.com/playlist/2jEEcEd1CbVOwop3vD593c?si=K-Vtmr4GSwigHb0VVythXw&utm_source=whatsapp&pt=effa4b92b23ea916197fdf1d6bca4e14";
              }}
            >
              <i className="fa-brands fa-spotify"></i> Sugerir
            </button>
          </div>
        </div>
        <video
          loop
          preload=""
          playsInline
          autoPlay 
          muted
          poster="https://withjoy.com/assets/public/marcom-prod/sitewide/block_abc/abc-static.jpg?opt=aggressive&amp;ver=2"
          src="https://player.vimeo.com/external/463869972.hd.mp4?s=cfd0881f42f82de80cb880d13a406be3aa35999a&amp;profile_id=175"
        ></video>
      </div>

      <div className="footer">
        <img
          src={backgFooter}
          className="background-footer"
          alt="background-footer"
        ></img>
        <h4>??Te esperamos!</h4>
        <div>
          <span className="brand-letter">J</span>{" "}
          <span className="brand-letter-1">&</span>
          <span className="brand-letter">L</span>
        </div>
      </div>
      <div className="credits">
          <h6>Designed by Shesi</h6>
          <h6>Developed by Lucas</h6>
      </div>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </main>
  );
}
