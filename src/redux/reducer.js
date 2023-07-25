import { EQUAL, UPDATE, RESET } from "./calculatorTypes";

const initialState = {
  result: 0,
  expression: '',
};

const calReducer = (state = initialState, action) => {
  switch (action.type) {
    case EQUAL:
      let ans = Number(eval(state.expression));
      let dotPosition = ans.toString().indexOf(".");
      let len = ans.toString().length;
      let decimals = dotPosition !== -1 ? len - dotPosition - 1 : 0;
      if (decimals > 7) {
        ans = Number(ans.toFixed(7));
      }
      return {
        ...state,
        result: ans,
        expression: ans.toString()
      };
    
    case UPDATE:
      const val = action.payload !== 'X' ? action.payload : '*';
      const newExp = state.expression + val;
      console.log(action.payload);
      return {
        ...state,
        expression: newExp
      }

    case RESET:
      return {
        ...state,
        result: 0,
        expression: "",
      };

    default:
      return {
        ...state,
      };
  }
};

export default calReducer;

