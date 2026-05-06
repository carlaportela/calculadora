//Función que representa el componente de pantalla de la calculadora. Recibe un valor como argumento y lo muestra en pantalla.
//Si el valor es vacío, muestra "0" por defecto.

export default function Display({ value }) {
  return (
    <div className="display">
      {value || "0"} 
    </div>
  );
}