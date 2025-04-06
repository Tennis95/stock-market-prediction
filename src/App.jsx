import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Plot from "./Components/Plot/Plot";
import Predict from "./Components/Predict/Predict";
import Forecast from "./Components/Forecast/Forecast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/closing/price" element={<Plot />} />
          <Route path="/model/performance" element={<Predict />} />
          <Route path="/forecast" element={<Forecast />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
