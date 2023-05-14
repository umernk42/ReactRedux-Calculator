import React from "react";
import { connect } from "react-redux";
import { update } from "../redux/calculatorActions";

function Operand(props) {

  return (
    <button onClick={() => props.update(props.num)} id={props.id} className="btn btn-operand">
        {props.num}
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (content) => dispatch(update(content))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Operand);
