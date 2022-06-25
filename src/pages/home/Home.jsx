import { useState } from "react";
import Moneda from "./componets/Moneda";
import InitImg from "./../../public/img/Jugar Cara o Cruz Volado Online.png";
import InitImgWebp from "./../../public/img/Jugar-Cara-o-Cruz-Volado-Online.webp";
import EndImg from "./../../public/img/Jugar Cara o Cruz Volado Online Footer.png";
import EndImgWebp from "./../../public/img/Jugar-Cara-o-Cruz-Volado-Online-Footer.webp";
import Image from "react-image-webp";

function Home() {
  const [contador, setContador] = useState({ cara: 0, cruz: 0 });
  let total = contador.cara + contador.cruz;
  if (!total) {
    total = 1;
  }
  const recarga = () => {
    setContador({ cara: 0, cruz: 0 });
  };

  return (
    <div className="container-home">
      <div className="container-home__grid">
        <div className="container-home--none">
          <div className="banner-cube banner-cube--margin"></div>
          <div className="banner-cube banner-cube--margin"></div>
        </div>
        <div>
          <div className="container-center">
            <Image
              className="logo logo--header"
              src={InitImg}
              webp={InitImgWebp}
            />
          </div>
          <div className="banner-large banner-large--margen"></div>
          <div className="container-text">
            <h1 className="container-text__title ">¿Cara o Cruz?</h1>
            <p className="container-text__p    text--center">
              ¿Quieres <b>jugar cara o cruz</b> para probar tu suerte o para
              ayudarte a tomar una decisión? ¡Genial! Has llegado al sitio
              indicado.
            </p>
            <p className="container-text__p    text--center">
              ¡Genial! Has llegado al sitio indicado.
            </p>
            <p className="container-text__p    text--center">
              Aquí podrás hacer el <b>lanzamiento de moneda virtual</b> de forma
              sencilla y divertida.¡Prueba tu suerte!
            </p>
          </div>
          <Moneda setContador={setContador} contador={contador} />
          <div className="container-home--block">
            <div className="static-box">
              <div className="banner-cube__width">
                <h3 className="banner-cube__h3">Resultados:</h3>
                <div className="banner-cube__process">
                  <h3>Cara</h3>
                  <h3>Cruz</h3>
                </div>
                <div className="banner-cube__process">
                  <span>(Sol)</span>
                  <span>(Aguila)</span>
                </div>
                <div className="banner-cube__process">
                  <h3>{contador.cara}</h3>
                  <h3>{contador.cruz}</h3>
                </div>
                <progress
                  className="banner-cube__progress"
                  id="file"
                  max={
                    contador.cara + contador.cruz === 0
                      ? 2
                      : contador.cara === 0
                      ? contador.cruz
                      : contador.cruz + contador.cara
                  }
                  value={
                    contador.cara === 0
                      ? contador.cruz === 0
                        ? 1
                        : 0
                      : contador.cara
                  }
                >
                  {" "}
                  70%{" "}
                </progress>
                <div className="banner-cube__process">
                  <span>
                    {Number((100 / total) * contador.cara).toFixed(1)}%
                  </span>
                  <span>
                    {Number((100 / total) * contador.cruz).toFixed(1)}%
                  </span>
                </div>
                <div className="banner-cube__buttonR">
                  <button
                    className="buttonR"
                    onClick={() => {
                      recarga();
                    }}
                  >
                    Reiniciar
                  </button>
                </div>
              </div>
            </div>
            <div className="banner-cube banner-cube--margin"></div>
          </div>
          <div className="container-text">
            <h2 className="container-text__h2">
              ¿Qué es el juego de Cara o Cruz?
            </h2>
            <p className="container-text__p">
              Se trata de un juego de azar en el cual dos jugadores{" "}
              <b>lanzan una moneda de metal al aire</b> e intentan adivinar de
              qué lado caerá ésta, si en el lado de la cara o de la cruz.
              <b>
                La persona que predice el resultado correcto es la que gana el
                juego
              </b>
              .
            </p>
            <p className="container-text__p">
              En algunos países éste juego se conoce como:{" "}
              <b>un volado, echar la suerte, o jugar al águila o sol</b> (por
              las características de la moneda oficial del país). El juego de
              Cara o cruz es muy divertido y apto para personas de todas las
              edades, y lo mejor de todo es que se puede jugar con cualquier
              tipo de moneda.
            </p>
          </div>
          <div className="banner-large"></div>
          <div className="container-text">
            <h2 className="container-text__h2">
              ¿Cómo jugar Cara o Cruz Online?
            </h2>
            <p className="container-text__p">
              Es muy probable que en algún momento quieras apostar algo con un
              amigo o tengas que tomar una decisión y quieras echar un volado
              para saber qué hacer, pero no tengas una moneda a la mano.
            </p>
            <p className="container-text__p">
              ¡No te preocupes! En nuestro sitio podrás{" "}
              <b>lanzar una moneda virtual al aire</b> para así tomar la mejor
              decisión. ¡Es muy fácil!, sólo tendrás que hacer lo siguiente:
            </p>
            <ol>
              <li className="container-text__li">
                Solo necesitas ponerte de acuerdo con la persona contra quien
                estés jugando para elegir quien escoge cara y quien escoge cruz.
              </li>
              <li className="container-text__li">
                Da click al botón de "<b>Lanzar Moneda</b>". En ese momento
                nuestro simulador procederá a lanzar una moneda virtual al aire.
                Mientras ves y escuchas como ésta gira, como una moneda de metal
                de verdad, tu suerte estará literalmente en el aire.
              </li>
              <li className="container-text__li">
                Una vez que la moneda virtual deje de girar y "caiga", podrás
                observar si elegiste la opción correcta: <b>cara o cruz</b>.
              </li>
              <li className="container-text__li">
                Puedes volver a lanzar la moneda al aire cuantas veces quieras
                en caso de que hayas acordado jugar 2 de 3, o 3 de 5.
              </li>
            </ol>
          </div>
          <div className="banner-large"></div>
          <div className="container-text">
            <h2 className="container-text__h2">
              ¿Cuáles son las probabilidades de ganar al lanzar una moneda?
            </h2>
            <p className="container-text__p">
              Las probabilidades de{" "}
              <b>ganar un volado con una moneda son del 50%</b>. Esto significa
              que por cada dos veces que lances la moneda, deberías esperar
              ganar una vez y perder otra. Por supuesto, esto depende
              completamente del azar por lo que pueden haber ocasiones en las
              que tengas una buena racha y puedas ganar (o perder) de forma
              continua.
            </p>
            <p className="container-text__p">
              Es importante recordar que{" "}
              <b>el lanzar una moneda al aire es un juego de azar</b>, por lo
              que nadie puede predecir con exactitud el resultado en todos los
              lanzamientos. El objetivo del juego es intentar{" "}
              <b>
                superar las probabilidades y ganar la mayor cantidad de veces
              </b>
              .
            </p>
            <div
              style={{
                width: "100%",
                height: "60px",
                display: "grid",
                paddingBottom: "56%",
                position: "relative",
              }}
            >
              <iframe
                src="https://giphy.com/embed/JQG2I0rQejbRQiDMQZ"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="banner-large"></div>
          <div className="container-text">
            <h2 className="container-text__h2">
              ¿Para qué sirve echar un volado online?
            </h2>
            <p className="container-text__p">
              Existen ocasiones en las que debes tomar una decisión y elegir
              entre dos posibilidades sin que ninguna de ellas te resulte
              particularmente atractiva. En ese momento dejar esa decisión a la
              suerte y <b>echar un volado con una moneda</b>, y si no la tienes,
              puedes echar un <b>volado online</b> aquí en nuestro sitio.
            </p>
            <p className="container-text__p">
              Los volados son muy comunes y divertidos cuando quieres apostar
              con tus amigos o cuando vas a jugar un partido de soccer,
              voleibol, béisbol, o fútbol americano y necesitas decidir qué
              equipo empieza con la posición de la pelota.
            </p>
          </div>
        </div>
        <div className="container-home--none">
          <div className="banner-cube banner-cube--margin"></div>
          <div className="static-box">
            <div className="banner-cube__width">
              <h3 className="banner-cube__h3">Resultados:</h3>
              <div className="banner-cube__process">
                <h3>Cara</h3>
                <h3>Cruz</h3>
              </div>
              <div className="banner-cube__process">
                <span>(Sol)</span>
                <span>(Aguila)</span>
              </div>
              <div className="banner-cube__process">
                <h3>{contador.cara}</h3>
                <h3>{contador.cruz}</h3>
              </div>
              <progress
                className="banner-cube__progress"
                id="file"
                max={
                  contador.cara + contador.cruz === 0
                    ? 2
                    : contador.cara === 0
                    ? contador.cruz
                    : contador.cruz + contador.cara
                }
                value={
                  contador.cara === 0
                    ? contador.cruz === 0
                      ? 1
                      : 0
                    : contador.cara
                }
              >
                {" "}
                70%{" "}
              </progress>
              <div className="banner-cube__process">
                <span>{Number((100 / total) * contador.cara).toFixed(1)}%</span>
                <span>{Number((100 / total) * contador.cruz).toFixed(1)}%</span>
              </div>
              <div className="banner-cube__buttonR">
                <button
                  className="buttonR"
                  onClick={() => {
                    recarga();
                  }}
                >
                  Reiniciar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Image
          className="logo logo--margin-footer logo--footer"
          src={EndImg}
          webp={EndImgWebp}
        />
        <hr />
        Volado Online es un sitio de entretenimiento exclusivamente. A través de
        nuestros simulador de cara o cruz podrás lanzar una moneda virtual al
        aire para intentar adivinar el resultado. Este juego de azar es
        completamente gratis y no se juega con dinero real.
      </div>
    </div>
  );
}

export default Home;
