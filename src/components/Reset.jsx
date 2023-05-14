import React from "react";
import { reset } from "../redux/calculatorActions";
import { connect } from "react-redux";

function Reset(props) {
  return (
    <button onClick={props.reset} id="clear" className="btn btn-clear">
      Clear
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
