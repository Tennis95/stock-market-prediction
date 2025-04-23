import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Plot from "./Components/Plot/Plot";
import Predict from "./Components/Predict/Predict";
import Forecast from "./Components/Forecast/Forecast";
import Daily from "./Components/Daily/Daily";
import Monthly from "./Components/Monthly/Monthly";
import PriceData from "./Components/PriceData/PriceData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/closing/price" element={<Plot />} />
          <Route path="/model/performance" element={<Predict />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/daily/monthly/frame" element={<Daily />} />
          <Route path="/monthly/data/frame" element={<Monthly />} />
          <Route path="/price/data/frame" element={<PriceData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
