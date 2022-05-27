const giro = document.querySelector("#giro");
let contador = 0,
  ban = true,
  active = true,
  resto = 0,
  bandera;

function mover() {
  const cara = document.querySelector(".moneda__cara");
  const cruz = document.querySelector(".moneda__cruz");
  const audio = document.querySelector("#audio");
  let limite = Math.floor(Math.random() * (8 - 1)) + 1,
    iterador = 0;
  active = false;
  bandera = limite * 180 + resto;
  audio.play();
  let inter = setInterval(
    () => {
      contador++;
      iterador++;
      if (contador === 90 || contador === 270) {
        cruz.style.display = ban ? "none" : "block";
        cara.style.display = ban ? "block" : "none";
        ban = !ban;
      }
      if (ban) {
        cruz.style.transform = " rotateY(" + contador + "deg)";
      } else {
        cara.style.transform = " rotateY(" + contador + "deg)";
      }
      if (iterador === bandera) {
        clearInterval(inter);
        resto = contador;
        active = true;
        if (resto + 180 > 360) {
          resto = resto - 360;
        }
        audio.pause();
        audio.currentTime = 0;
      }
      contador = contador === 360 ? 0 : contador;
    },
    5,
    [audio]
  );
}

giro.addEventListener("click", () => {
  if (active) mover();
});
