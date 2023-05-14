import { ADD, EQUAL, UPDATE, RESET } from "./calculatorTypes";

const initialState = {
  display: "0",
  accumulator: "",
  operands: [],
  operations: [],
  pointer: 0,
};

const isOperation = (value) => {
  const OPERATION = ["+", "-", "/", "*"];
  if (OPERATION.includes(value)) return true;
  return false;
};

const operationResult = (arrOfOperands, arrOfOperations) => {
  let result = arrOfOperands[0];
  for (let i = 0; i < arrOfOperations.length; i++) {
    if (arrOfOperations[i] === "+") {
      result = result + arrOfOperands[i + 1];
    } else if (arrOfOperations[i] === "-") {
      result = result - arrOfOperands[i + 1];
    } else if (arrOfOperations[i] === "*") {
      result = result * arrOfOperands[i + 1];
    } else if (arrOfOperations[i] === "/") {
      result = result / arrOfOperands[i + 1];
    }
  }
  return result;
};

const calReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      const content = action.payload;
      let current = state.pointer;
      let opr = "";

      if (state.accumulator === "") {
        return {
          ...state,
          display: content,
          accumulator: state.accumulator + content,
        };
      }


      if (state.accumulator.includes("=") && !isOperation(action.payload)) {
        return {
          ...state,
        };
      }

      if (isOperation(content)) {
        if (state.accumulator.includes("=")) {
          opr = state.display;
          return {
            display: content,
            accumulator: opr + content,
            operands: [Number(opr)],
            operations: [content],
            pointer: opr.length + 1,
          };
        }
        opr = state.accumulator.slice(current, state.accumulator.length);
        current = state.accumulator.length + 1;
        const newOperands = state.operands;
        const newOperations = state.operations;
        newOperands.push(Number(opr));
        newOperations.push(content);
        return {
          display: content,
          accumulator: state.accumulator + content,
          operands: newOperands,
          operations: newOperations,
          pointer: current,
        };
      }

      if (
        content === "." &&
        state.accumulator[state.accumulator.length - 1] === "."
      ) {
        return {
          ...state,
        };
      }

      if (isOperation(state.display)) {
        return {
          ...state,
          display: content,
          accumulator: state.accumulator + content,
        };
      }

      let currDisplay = state.display + content;
      return {
        ...state,
        display: currDisplay,
        accumulator: state.accumulator + action.payload,
      };

    case EQUAL:
      const operands = state.operands;
      const operations = state.operations;
      let oprnd = state.accumulator.slice(
        state.pointer,
        state.accumulator.length
      );
      operands.push(Number(oprnd));
      const answer = operationResult(operands, operations).toString();
      return {
        ...state,
        display: answer,
        accumulator: state.accumulator + action.payload + answer,
        operands: [Number(answer)],
        operations: [],
      };

    case RESET:
      return {
        display: "0",
        accumulator: "",
        operands: [],
        operations: [],
        pointer: 0,
      };

    default:
      return {
        ...state,
      };
  }
};

export default calReducer;
