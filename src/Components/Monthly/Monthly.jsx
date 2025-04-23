import React from "react";
import plot from "../../images/monthly.png";

function Monthly() {
  return (
    <div className="container">
      <h2 className="text-center">📅 Monthly Closing Price Trend</h2>
      <p className="plot-content">
        The monthly adjusted closing price chart provides a mid-range view of
        Nvidia’s performance, capturing trends and shifts more granular than the
        yearly view. Until 2016, Nvidia’s stock price exhibited minimal
        movement, reflecting its stable but modest market presence. From 2016
        onward, the chart illustrates a steady upward trend, fueled by the
        company's leadership in GPU technologies and its strategic pivot towards
        artificial intelligence and cloud computing. The most dramatic changes
        occur post-2022, when Nvidia’s stock enters a steep growth phase. This
        period coincides with an explosion in AI applications and increased
        global demand for powerful computing hardware. Peaks and dips in 2024
        indicate heightened volatility, often driven by earnings reports,
        economic news, or developments in the tech industry. The monthly view
        helps medium-term investors identify growth phases, market corrections,
        and consolidation periods, offering a balanced perspective between
        long-term trends and short-term fluctuations.
      </p>
      <div className="code-box">
        <code className="plot-code">
            Month_frame = stock_data.resample('M').last()<br></br><br></br>
          <span style={{ color: "green" }}># Price–Date Chart (Monthly time frame)</span>
          <br></br>
          plt.figure(figsize=(14, 7))<br></br>
          sns.lineplot(data=Month_frame, x=Month_frame.index, y="Adj Close", sort=True)<br></br>

plt.title('Nvidia Corporation Monthly Closing Price', fontsize=16)<br></br>
plt.xlabel('Year', fontsize=12)<br></br>
plt.ylabel('Adjusted Close Price', fontsize=12)<br></br>

plt.grid(color="blue", linestyle='--', linewidth=0.15)<br></br>
plt.tight_layout()<br></br>
plt.show()<br></br>
        </code>
      </div>
      <div className="text-center mt-3">
        <img src={plot} width={"80%"} height={"650px"} className="plot-img" />
      </div>
    </div>
  );
}

export default Monthly;
