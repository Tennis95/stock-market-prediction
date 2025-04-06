import React from "react";
import plot from "../../images/predict.png";

function Predict() {
  return (
    <div className="container">
      <h2 className="text-center">Visualizing Model Performance</h2>
      <p className="plot-content">
        In this step, we visualize the actual vs predicted price. A plot is
        generated to compare the actual stock price against the predicted price,
        allowing us to evaluate how well the model performs over time.
      </p>
      <div className="code-box">
        <code className="plot-code">
          <span style={{ color: "green" }}>
            # # Assuming your stock_data DataFrame has a 'Date' column as index
          </span>
          <br></br>
          dates_test = stock_data.index[train_size + sequence_length:]<br></br>
          <br></br>
          plt.figure(figsize=(10, 6))<br></br>
          plt.plot(dates_test, y_test, label='Actual Production', color='blue')
          <br></br>
          plt.plot(dates_test, predictions, label='Predicted Production',
          color='orange')<br></br>
          plt.title('Actual vs Predicted Nvidia Stock Prediction')<br></br>
          plt.xlabel('Year')<br></br>
          plt.ylabel('MidPrice')<br></br>
          plt.legend()<br></br>
          plt.show()<br></br>
        </code>
      </div>
      <div className="text-center mt-3">
        <img src={plot} width={"80%"} height={"650px"} className="plot-img" />
      </div>
    </div>
  );
}

export default Predict;
