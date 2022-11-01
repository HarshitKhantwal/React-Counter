import React from "react";
export default function Main() {
  const [count, setCount] = React.useState(0);
  function add() {
    setCount((prevCount) => prevCount + 1);
  }
  function sub() {
    setCount((prevCount) => prevCount - 1);
  }
  function reset(){
    setCount(prevCount=>0);
  }
  return (
    <main>
      
      <button className="counter--btn sub bold" onClick={sub}>
        -
      </button>
      <div className="count">{count}
      <button className="count--reset bold" onClick={reset}>Reset</button>
      </div>
      <button className="counter--btn add bold" onClick={add}>+</button>
    </main>
  );
}
