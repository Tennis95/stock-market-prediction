import React, { useEffect, useState } from "react";
import "./main.css";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();//navigate purpose
  const [route, setRoute] = useState(""); //writing purpose

  const handleSubmit = () => {
    let page = route?.toLocaleLowerCase();
    if(page==='closing price'){
        navigate(`/closing/price`);
    }
    if(page==='model performance'){
        navigate(`/model/performance`);
    }
    if(page==='forecast'){
        navigate(`/forecast`);
    }
  };

  return (
    <div class="container-fluid stock-bg">
      <div class="container pt-5">
        <h1 class="text-center stock-head">Stock Market Prediction</h1>

        <div className="w-75 m-auto text-center stock-content">
        <p class="mt-4">
          Accurately predicting stock prices can help investors and brokers make
          better decisions and increase their profits. While stock prices often
          move in complex and unpredictable ways, analyzing historical data can
          reveal patterns that may help forecast future movements. Machine
          learning especially regression models and Long Short-Term Memory
          (LSTM) networks is well-suited for identifying these patterns.
        </p>
        <p class=" mt-2">
          LSTM models are particularly powerful because they can remember
          information from past data over time, making them effective for
          capturing trends. The typical process involves training these models
          using historical stock data, testing them on new data, and evaluating
          their performance using metrics like Mean Squared Error (MSE) and the
          R² score.
        </p>
        <p class="mt-2">
          Over time, these models are refined to improve their accuracy. By
          comparing the model's predictions to actual stock prices using visual
          graphs, investors can get a clearer picture of potential future
          movements. This makes complex financial data more understandable and
          easier to use, ultimately supporting smarter investment decisions.
        </p>
        </div>
        <div class="py-5 text-center">
          <div>
            <input
              class="stock-input"
              onChange={(e) => setRoute(e.target.value)}
            />
          </div>
          <div class="mt-4">
            <button
              class="btn btn-md btn-outline-dark"
              onClick={() => handleSubmit()}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
