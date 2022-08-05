import React from "react";
import { useState } from "react";

function Main(){
  const [count, setCount] = useState(0);
  const handleClickPlus = () => setCount(count+1);
  const handleClickMinus = () => setCount(count-1);
  const handleClickPlus10 = () => setCount(count+10);
  const handleClickMinus10 = () => setCount(count-10);
  const handleReset = () => {setCount(0)}

  if (count < 0) {
    setCount(0);
  } ;

  return(
    <main>
      <h3>People counter: {count}</h3>


      <div>
      <button onClick={handleClickMinus10}>
        - 10
      </button>
      <button onClick={handleClickMinus}>
        -
      </button>
      <button onClick = {handleReset}>
        Reset
      </button>
      <button onClick={handleClickPlus}>
        +
      </button>
      <button onClick={handleClickPlus10}>
        + 10
      </button>
      </div>
    </main>
  );
}

export default Main;