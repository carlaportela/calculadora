//Función que representa el botón de la calculadora. Cuando se hace clic en el botón, toma el valor del botón y lo envía a la función.

export default function Button({ value, onClick }) {
  return (
    <button onClick={() => onClick(value)}>
      {value}
    </button>
  );
}