import React from 'react'
import plot from "../../images/Daily.png";
import Layout from '../Layout/Layout';

function Daily() {
  return (
     <div className="container ">
      <h2 className="text-center">📊 Daily Closing Price Trend</h2>
      <p className="plot-content">
        The daily closing price chart offers the most detailed look into
        Nvidia’s stock, highlighting short-term volatility and micro-trends that
        are often missed in broader views. This level of granularity is
        especially valuable for day traders and short-term investors who need to
        make quick, informed decisions. Post-2022, the chart shows an aggressive
        uptrend in Nvidia’s stock, interspersed with minor pullbacks and
        consolidation periods. These fluctuations reflect market responses to
        news releases, product launches, AI advancements, and macroeconomic
        factors such as interest rate changes or global events. The chart
        captures intraday movements, enabling precise analysis of support and
        resistance levels, momentum indicators, and volume shifts. Daily data
        can also reveal investor sentiment and behavioral patterns, such as
        panic selling or speculative buying. For those actively trading Nvidia’s
        stock, this view is crucial in spotting entry and exit opportunities,
        confirming trend reversals, and managing risk in volatile market
        conditions.
      </p>
      <div className="code-box">
        <code className="plot-code">
          <span style={{ color: "green" }}>#  Ensure 'Date' is in datetime format</span>
          <br></br>
          if 'Date' in stock_data.columns:<br></br>
    stock_data['Date'] = pd.to_datetime(stock_data['Date'])<br></br>
          <br></br>
          <span style={{ color: "green" }}>
          # Plotting: Price-Date Chart (daily time frame)
          </span><br></br>
          plt.figure(figsize=(14, 7))<br></br>
          sns.lineplot(data=stock_data, x='Date', y='Adj Close', color='blue')<br></br>

          plt.title('Nvidia Corporation Daily Closing Price', fontsize=16)<br></br>
          plt.xlabel('Year', fontsize=12)<br></br>
          plt.ylabel('Price', fontsize=12)<br></br>
          plt.grid(True)<br></br>
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

export default Daily