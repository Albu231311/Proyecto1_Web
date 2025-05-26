import { useState } from "react";

export function useCalculadora() {
  const [display, setDisplay] = useState("0");
  const [operacion, setOperacion] = useState(null);
  const [valorAnterior, setValorAnterior] = useState(null);
  const [esperandoValorNuevo, setEsperandoValorNuevo] = useState(false);

  function agregarNumero(num) {
    if (esperandoValorNuevo) {
      setDisplay(num === "." ? "0." : num);
      setEsperandoValorNuevo(false);
      return;
    }

    if (display.length >= 9) return; // Limite 9 caracteres

    if (num === "." && display.includes(".")) return; 

    if (display === "0" && num !== ".") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  }

  function borrarUltimo() {
    if (esperandoValorNuevo) return;

    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  }

  function seleccionarOperacion(op) {
    if (operacion && !esperandoValorNuevo) {
      const res = calcularResultado(operacion, parseFloat(valorAnterior), parseFloat(display));
      setDisplay(res);
      setValorAnterior(res === "ERROR" ? null : res);
    } else {
      setValorAnterior(display);
    }
    setOperacion(op);
    setEsperandoValorNuevo(true);
  }

  function presionarIgual() {
    if (!operacion || esperandoValorNuevo) return;

    const res = calcularResultado(operacion, parseFloat(valorAnterior), parseFloat(display));
    setDisplay(res);
    setOperacion(null);
    setValorAnterior(null);
    setEsperandoValorNuevo(true);
  }

  function limpiar() {
    setDisplay("0");
    setOperacion(null);
    setValorAnterior(null);
    setEsperandoValorNuevo(false);
  }

  function cambiarSigno() {
    if (display === "0") return;

    if (display.startsWith("-")) {
      setDisplay(display.substring(1));
    } else {
      if (display.length < 9) {
        setDisplay("-" + display);
      }
    }
  }

  function calcularResultado(operacion, num1, num2) {
    let resultado;

    switch (operacion) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "*":
        resultado = num1 * num2;
        break;
      case "/":
        if (num2 === 0) return "ERROR";
        resultado = num1 / num2;
        break;
      case "%":
        if (num2 === 0) return "ERROR";
        resultado = num1 % num2;
        break;
      default:
        return "ERROR";
    }

    // Validaciones: no negativos, no mayor que 999999999
    if (resultado < 0 || resultado > 999999999) return "ERROR";

    let resStr = resultado.toString();

    if (resStr.length <= 9) {
      return resStr;
    }

    if (resStr.includes(".")) {
      const partes = resStr.split(".");
      const enteros = partes[0];
      let decimalesPermitidos = 9 - enteros.length - 1;

      if (decimalesPermitidos < 0) return "ERROR";

      resultado = resultado.toFixed(decimalesPermitidos);

      if (resultado.length > 9) return "ERROR";

      // Quitar ceros innecesarios al final
      resultado = resultado.replace(/\.?0+$/, "");

      return resultado;
    }

    return "ERROR";
  }

  return {
    display,
    agregarNumero,
    seleccionarOperacion,
    presionarIgual,
    limpiar,
    cambiarSigno,
    borrarUltimo,
  };
}
