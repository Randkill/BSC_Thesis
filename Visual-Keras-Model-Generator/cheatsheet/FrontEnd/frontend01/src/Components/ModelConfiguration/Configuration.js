import React from "react";

import "./Configuration.css";

const Configuration = () => {
  return (
    <div className="SuperComponent">
    <p className="ComponentTitle">Model Configuration</p>
      <p>Optimizer</p>
      <select className="selectModelConfiguration">
          <option value="SGD">SGD</option>
          <option value="RMSprop">RMSprop</option>
          <option value="Adam">Adam</option>
          <option value="Adadelta">Adadelta</option>
          <option value="Adagrad">Adagrad</option>
          <option value="Adamax">Adamax</option>
          <option value="Nadam">Nadam</option>
          <option value="Ftrl">Ftrl</option>
      </select>
      <p>Loss Function</p>
      <select className="selectModelConfiguration">
          <option value="mean_squared_error">Mean Squared Error</option>
          <option value="mean_absolute_error">Mean Absolute Error</option>
          <option value="mean_absolute_percentage_error">Mean Absolute Perccentage Error</option>
          <option value="mean_squared_logarithmic_error">Mean Squared Logarithmic Error</option>
          <option value="cosine_similarity">Cosine Similarity</option>
      </select>
      <p>Metrics</p>
      <select className="selectModelConfiguration">
          <option value="accuracy">Accuracy</option>
          <option value="binary_accuracy">Binary Accuracy</option>
          <option value="categorical_accuracy">Categorical Accuracy</option>
          <option value="top_k_categorical_accuracy">Top K Categorical Accuracy</option>
          <option value="sparse_top_k_categorical_accuracy">Sparse Top K Categorical Accuracy</option>
      </select>
    </div>
  );
};

export default Configuration;
