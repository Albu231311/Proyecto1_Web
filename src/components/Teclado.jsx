import React from "react"
export default function Teclado({ onNumero, onOperacion, onIgual, onLimpiar, onCambiarSigno, onBorrarUltimo }) {
  const botones = [
    ["C", onLimpiar], ["÷", () => onOperacion("/")], ["×", () => onOperacion("*")], ["⌫", onBorrarUltimo],
    ["7", () => onNumero("7")], ["8", () => onNumero("8")], ["9", () => onNumero("9")], ["-", () => onOperacion("-")],
    ["4", () => onNumero("4")], ["5", () => onNumero("5")], ["6", () => onNumero("6")], ["+", () => onOperacion("+")],
    ["1", () => onNumero("1")], ["2", () => onNumero("2")], ["3", () => onNumero("3")], ["+/-", onCambiarSigno],
    ["%", () => onOperacion("%")], ["0", () => onNumero("0")], [".", () => onNumero(".")], ["=", onIgual]
  ]

  const style = v => ({
    padding: "1rem", fontSize: "1.2rem", background: "#1f1f1f", border: "none", borderRadius: 8,
    color: /^[0-9]$/.test(v) ? "#fff" : "#3c7ef7"
  })
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(5, 60px)", gap: "0.5rem" }}>
      {botones.map(([v, fn], i) => <button key={v+i} style={style(v)} onClick={fn}>{v}</button>)}
    </div>
  )
}
