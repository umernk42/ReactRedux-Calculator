import React from "react";
import { add } from "../redux/calculatorActions";
import { connect } from "react-redux";

function Display(props) {
  return (
    <div className="display" id="display">
      <div className="display-top">{props.accumulator}</div>
      <div className="display-bottom">{props.display}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
    return{
        update: () => dispatch(add())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Display);
