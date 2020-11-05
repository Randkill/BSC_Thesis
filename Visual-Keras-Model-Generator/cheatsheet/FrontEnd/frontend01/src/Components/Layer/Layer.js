import React from "react";

import "./Layer.css";

const Layer = (props) => {

  const selectHandler = (event) => {
    return event.target.value;
  }

  return (
    <div className="Layer">
      <p className="LayerTitle">Layer {props.layerNumber+1}</p>
      <p>Number of Neurons</p>
      <input onChange={props.neuronChange}/>
      <p>Activation Function</p>
      <select onChange={props.activationFunctionChange}>
        <option value="relu">relu</option>
        <option value="sigmoid">sigmoid</option>
        <option value="softmax">softmax</option>
        <option value="softplus">softplus</option>
      </select>
      <button onClick={props.delete}>-</button>
    </div>
  );
};

export default Layer;
