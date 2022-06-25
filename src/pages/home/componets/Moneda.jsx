import Audio from "./../../../public/audio/Sonido Lanzar una moneda al aire.wav";
import EndSol from "./../../../public/img/Juego-Cara-o-Cruz-Online-Sol-Front-v001.webp";
import EndAgila from "./../../../public/img/Juego-Cara-o-Cruz-Online-Aguila-Back-v001.webp";

function Moneda({ setContador, contador }) {
  const moneda = {
    contador: 0,
    ban: true,
    active: true,
    resto: 0,
    bandera: 0,
    sumador: 6,
    vueltas: 0,
    funcL: [1, 3, 3, 6, 6, 6],
  };
  const mover = () => {
    const cara = document.querySelector(".moneda__cara");
    const cruz = document.querySelector(".moneda__cruz");
    const audio = document.querySelector("#audio");
    let limite = Math.floor(Math.random() * (12 - 1)) + 1,
      limite1 = Math.floor(Math.random() * (12 - 1)) + 1,
      iterador = 0;

    limite = limite + limite1;
    moneda.vueltas = limite;
    moneda.active = false;
    moneda.bandera = limite * 180 + moneda.resto;
    audio.play();
    let inter = setInterval(
      () => {
        moneda.contador += moneda.sumador;
        iterador += moneda.sumador;
        if (moneda.contador === 90 || moneda.contador === 270) {
          cruz.style.display = moneda.ban ? "none" : "block";
          cara.style.display = moneda.ban ? "block" : "none";
          moneda.ban = !moneda.ban;
          moneda.vueltas--;
          //console.log(moneda.sumador, limite, moneda.vueltas);
          if (moneda.funcL[moneda.vueltas]) {
            moneda.sumador = moneda.funcL[moneda.vueltas];
            iterador += moneda.funcL[moneda.vueltas];
          }
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
      6,
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
          <img src={EndAgila} className="moneda__cara" alt="aguila" />
          <img src={EndSol} className="moneda__cruz" alt="sol" />
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
          Lanzar moneda
        </button>
      </div>
    </>
  );
}

export default Moneda;
