import React from 'react';
import { connect } from "react-redux";
import { update,equal } from "../redux/calculatorActions";


function Operation(props) {



  return (
    <button onClick={() => props.opr === '='? props.equal(props.opr) : props.update(props.opr)} id={props.id} className="btn btn-operation">
        {props.opr}
    </button>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (content) => dispatch(update(content)),
    equal: (content) => dispatch(equal(content))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Operation);