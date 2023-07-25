import React from "react";
import {connect} from 'react-redux';
import {equal} from '../redux/calculatorActions';

function Equals(props) {
  return (
    <button id="equal" className="btn btn-equal" 
    onClick={props.equal}>
      =
    </button>
  );
}

const mapDispatchToProps = (dispatch) => ({
  equal: () => dispatch(equal()),
});

export default connect(null,mapDispatchToProps)(Equals);
