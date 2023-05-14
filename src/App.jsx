import { useState } from "react";
import "./App.css";
import Operand from "./components/Operand";
import Operation from "./components/Operation";
import { Provider } from "react-redux";
import store from "./redux/store";
import Display from "./components/Display";
import Reset from "./components/Reset";

function App() {
  const operandArray = [
    { id: "seven", value: "7" },
    { id: "eigth", value: "8" },
    { id: "nine", value: "9" },
    { id: "four", value: "4" },
    { id: "six", value: "6" },
    { id: "five", value: "5" },
    { id: "three", value: "3" },
    { id: "two", value: "2" },
    { id: "one", value: "1" },
    { id: "zero", value: "0" },
    { id: "decimal", value: "." },
  ];

  const operationArray = [
    { id: "add", value: "+" },
    { id: "subtract", value: "-" },
    { id: "multiply", value: "*" },
    { id: "divide", value: "/" },
    { id: "equals", value: "=" },
  ];

  return (
    <>
      <Provider store={store}>
        <div className="calculator">
          <Display />
          {operandArray.map((item) => {
            return <Operand key={item.id} id={item.id} num={item.value} />;
          })}
          {operationArray.map((item) => {
            return <Operation key={item.id} id={item.id} opr={item.value} />;
          })}
          <Reset />
        </div>
      </Provider>
    </>
  );
}



export default App;
