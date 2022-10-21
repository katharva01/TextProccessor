import React from "react";

export default function Alert(props) {
    
  return (
    props.alert && <div className= {`alert alert-${props.alert.type} d-flex align-items-center rounded-0 p-1`} role="alert">
          <div>{props.alert.msg}</div>
        </div>
    
  );
}
