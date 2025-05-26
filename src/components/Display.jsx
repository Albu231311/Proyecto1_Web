export default function Display({ valor }) {
  return (
    <div
      style={{
        backgroundColor: "#222",
        color: "white",
        fontSize: "2rem",
        textAlign: "right",
        padding: "1rem",
        borderRadius: "8px",
        minHeight: "3rem",
        marginBottom: "1rem",
        fontFamily: "monospace",
      }}
    >
      {valor}
    </div>
  );
}
