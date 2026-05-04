import { useState } from "react";

function Batching() {
  const [count, setCount] = useState(0)

  //ejcutamos una tarea en el callstack para probar el batching

  //esto es una funcion cara de 120ms en el callstack perdiendo 8 frames de rendimiento
  const loop = () => {
    console.log("--- Inicio del Click (Stack) ---");
    for (let i = 0; i < 1000; i++) {
      setCount((c) => c + 1);
    }
    console.log("--- Fin del Click (Stack) ---");
  };

  return (
    <>
      <p>{count}</p>
      <button
        onClick={loop}
      >click</button>
    </>
  );
}

export default Batching;
