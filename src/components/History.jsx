//Función que representa el componente de historial de la calculadora. Recibe un array de strings como argumento y muestra cada string en una nueva línea.

export default function History({ history }) {
  return (
    <div className="history">
      <h3>Historial</h3>
      {history.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
}