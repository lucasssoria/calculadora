import "./styles.css";

let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let operacion = document.getElementById("operacion");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
  let calculo: number = Number(operacion.value);
  let suma: number = Number(valor1.value) + Number(valor2.value);
  let resta: number = Number(valor1.value) - Number(valor2.value);

  function dibujarGuionesN(n: number) {
    let guion: string = "-";
    for (let i: number = 0; i <= n; i++) {
      guion = guion + "-";
    }
    console.log(guion);
  }

  switch (calculo) {
    case 1:
      dibujarGuionesN(40);
      console.log("  El resultado de la operación es: " + suma);
      dibujarGuionesN(40);
      break;

    case 2:
      dibujarGuionesN(40);
      console.log(" El resultado de la operación es: " + resta);
      dibujarGuionesN(40);
      break;

    default:
      dibujarGuionesN(40);
      console.log("        *  El programa finalizó  *");
      dibujarGuionesN(40);
  }
});
