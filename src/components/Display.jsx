import React from "react";
import {connect} from 'react-redux';

function Display(props) {
  return (
    <div className="display" id="display">
      <div className="expression">{props.expression}</div>
      <div className="result">{props.result}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  expression: state.expression,
  result: state.result
});


export default connect(mapStateToProps, null)(Display);
