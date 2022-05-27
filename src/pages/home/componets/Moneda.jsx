import Audio from "./../../../public/audio/Sonido Lanzar una moneda al aire.wav";
function Moneda({ setContador, contador }) {
  const moneda = {
    contador: 0,
    ban: true,
    active: true,
    resto: 0,
    bandera: 0,
  };
  const mover = () => {
    const cara = document.querySelector(".moneda__cara");
    const cruz = document.querySelector(".moneda__cruz");
    const audio = document.querySelector("#audio");
    let limite = Math.floor(Math.random() * (8 - 1)) + 1,
      iterador = 0;
    moneda.active = false;
    moneda.bandera = limite * 180 + moneda.resto;
    audio.play();
    let inter = setInterval(
      () => {
        moneda.contador++;
        iterador++;
        if (moneda.contador === 90 || moneda.contador === 270) {
          cruz.style.display = moneda.ban ? "none" : "block";
          cara.style.display = moneda.ban ? "block" : "none";
          moneda.ban = !moneda.ban;
        }
        if (moneda.ban) {
          cruz.style.transform = " rotateY(" + moneda.contador + "deg)";
        } else {
          cara.style.transform = " rotateY(" + moneda.contador + "deg)";
        }
        if (iterador === moneda.bandera) {
          clearInterval(inter);
          moneda.resto = moneda.contador;
          moneda.active = true;
          if (moneda.resto + 180 > 360) {
            moneda.resto = moneda.resto - 360;
          }
          audio.pause();
          audio.currentTime = 0;
          if (limite % 2 === 0) {
            setContador({ ...contador, cara: contador.cara + 1 });
          } else {
            setContador({ ...contador, cruz: contador.cruz + 1 });
          }
        }
        moneda.contador = moneda.contador === 360 ? 0 : moneda.contador;
      },
      0.5,
      [audio]
    );
  };
  const giro = () => {
    if (moneda.active) mover();
  };
  return (
    <>
      <div className="container-moneda">
        <div className="moneda">
          <div className="moneda__cara"></div>
          <div className="moneda__cruz"></div>
        </div>
        <audio src={Audio} id="audio"></audio>
      </div>
      <div className="container-item">
        <button
          className="button-moneda"
          id="giro"
          onClick={() => {
            giro();
          }}
        >
          Lanzamiento de moneda
        </button>
      </div>
    </>
  );
}

export default Moneda;
