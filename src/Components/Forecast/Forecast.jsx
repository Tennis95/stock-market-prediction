import React from "react";
import plot from "../../images/forecast.png";

function Forecast() {
  return (
    <div className="container">
      <h2 className="text-center">Visualize our time series</h2>
      <p className="plot-content">
        To forecast using an ARIMA model, start by using the fitted model to
        predict future values based on the data. Once predictions are made, it's
        helpful to visualize them by plotting the predicted values alongside the
        actual values. This is accomplished because we use a train/test
        workflow, where the data is split into training and testing sets
      </p>
      <div className="code-box">
        <code className="plot-code">
          <span style={{ color: "green" }}>
          # Forecast
          </span>
          <br></br>
          forecast = model_fit.forecast(steps=len(test))<br></br>
          <br></br>
          <span style={{ color: "green" }}>
            # Plot the results with specified colors
          </span>
          plt.figure(figsize=(14,7))<br></br>
          plt.plot(train.index, train["Close"], label='Train', color='#203147')
          <br></br>
          plt.plot(test.index, test["Close"], label='Test', color='#01ef63')
          <br></br>
          plt.plot(test.index, forecast, label='Forecast', color='orange')
          <br></br>
          plt.title('Close Price Forecast')<br></br>
          plt.xlabel('Year')<br></br>
          plt.ylabel('Close Price')<br></br>
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

export default Forecast;
