import React from "react";
import { useCalculadora } from "./hooks/useCalculadora";
import Display from "./components/Display";
import Teclado from "./components/Teclado";

export default function App() {
  const {
    display,
    agregarNumero,
    seleccionarOperacion,
    presionarIgual,
    limpiar,
    cambiarSigno,
    borrarUltimo,
  } = useCalculadora();

  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "2rem auto",
        padding: "1rem",
        border: "1px solid #fff",
        borderRadius: "10px",
      }}
    >
      <Display valor={display} />
      <Teclado
        onNumero={agregarNumero}
        onOperacion={seleccionarOperacion}
        onIgual={presionarIgual}
        onLimpiar={limpiar}
        onCambiarSigno={cambiarSigno}
        onBorrarUltimo={borrarUltimo}
      />
    </div>
  );
}
