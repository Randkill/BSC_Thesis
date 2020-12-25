import React from "react";
import "./Model.css";
const Model = (props) => {
  const outputHandler = () => {
    var finalString = props.data
    finalString = finalString.split('model').join('\nmodel')
   return(finalString)
};

  return (
    <div className="model">
      <p>Model:</p>
  <p>{outputHandler()}</p>
    </div>
  );
};

export default Model;
