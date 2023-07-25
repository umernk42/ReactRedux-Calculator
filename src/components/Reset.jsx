import React from "react";
import { connect } from "react-redux";

function Reset(props) {
  return (
    <button id="clear" className="btn btn-clear" 
    onClick={props.reset}>
      AC
    </button>
  );
}

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch({ type: "RESET" }),
});

export default connect(null,mapDispatchToProps)(Reset);
