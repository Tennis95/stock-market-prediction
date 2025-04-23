import React, { useEffect, useState } from "react";
import "./main.css";
import { useNavigate } from "react-router-dom";
import bg from "./../../images/6256878.jpg";
import Select from "react-select";
import Layout from "../Layout/Layout";

const selectOption = [
  {
    label: "Closing Price",
    value: "/closing/price",
  },
  {
    label: "Visualizing Model Performance",
    value: "/model/performance",
  },
  {
    label: "Visualize our time series",
    value: "/forecast",
  },
  {
    label: "Daily Data Frame",
    value: "/daily/monthly/frame",
  },
  {
    label: "Monthly Data Frame",
    value: "/monthly/data/frame",
  },
  {
    label: "Yearly Time Frame",
    value: "/price/data/frame",
  },
];

function Main() {
  const navigate = useNavigate(); //navigate purpose
  const [route, setRoute] = useState(""); //writing purpose

  const handleSubmit = (e) => {
    navigate(`${e.value}`);
  };

  return (
    <Layout>
      <div class="container pt-5 stock-container">
        <h1 class="text-center stock-head">
          Nvidia Corporation Stock Analysis
        </h1>

        <div className="w-75 m-auto stock-content">
          <p class="mt-4">
            Nvidia Corporation Stock Analysis, where we explore the historical
            performance of one of the world’s most influential technology
            companies. Nvidia, best known for its cutting-edge graphics
            processing units (GPUs), has grown to become a powerhouse in
            artificial intelligence (AI), gaming, data centers, and autonomous
            vehicles. This page highlights the key trends in Nvidia's stock
            price and trading volume over time using detailed visualizations
            across yearly, monthly, and daily time frames.
          </p>
          <p class=" mt-2">
            Over the past decade, Nvidia’s stock has experienced remarkable
            growth. The yearly analysis reveals a relatively stable performance
            up until 2016, followed by a significant uptrend driven by the rise
            in gaming demand, cryptocurrency mining, and the AI revolution. The
            most noticeable jump occurred after 2022, where Nvidia's price and
            trading volume surged, reflecting investor confidence and increasing
            market dominance in the AI sector.
          </p>
          <p class="mt-2">
            Our monthly and daily charts offer a closer look at these trends,
            showcasing both the long-term momentum and short-term fluctuations.
            These insights are crucial for investors, analysts, and traders
            looking to understand Nvidia’s market behavior, price cycles, and
            reaction to global tech trends.Explore the charts, understand the
            trends, and stay ahead in your investment decisions with our Nvidia
            stock visual report
          </p>
          {/* <p class="mt-2">
        With its strong financials, innovation pipeline, and leadership in high-performance computing, Nvidia continues to attract global attention. This analysis serves as a gateway for both beginners and experienced investors to dive deeper into the company’s market journey.
        </p> */}
          <p class="mt-2"></p>
        </div>
        <div class="py-5 text-center">
          <div className="w-25 m-auto">
            <Select options={selectOption} onChange={(e) => handleSubmit(e)} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Main;
