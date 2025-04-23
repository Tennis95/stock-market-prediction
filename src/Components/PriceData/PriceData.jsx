import React from "react";
import plot from "../../images/yearly.png";

function PriceData() {
  return (
    <div className="container">
      <h2 className="text-center">
        🗓 Yearly Time Frame: Price & Trading Volume
      </h2>
      <p className="plot-content">
        The yearly chart for Nvidia Corporation presents a clear overview of the
        stock’s long-term performance by plotting adjusted closing prices
        alongside trading volume. From 2010 to 2016, Nvidia’s stock showed
        modest movement. However, a gradual increase began in 2016, coinciding
        with the rise of machine learning and demand for high-performance GPUs.
        Post-2020, the stock experienced a remarkable surge. This uptrend aligns
        closely with Nvidia’s expanding influence in artificial intelligence,
        gaming, data centers, and automotive industries. Notably, after 2023,
        the trading volume skyrocketed, reflecting heightened investor interest
        and increased institutional participation. This suggests strong market
        confidence in Nvidia’s role in shaping the future of AI and deep
        learning technologies. The chart effectively demonstrates how trading
        activity and stock price growth are interconnected, with volume spikes
        often preceding price rallies. Overall, the yearly chart is ideal for
        long-term investors evaluating Nvidia’s sustained growth and the broader
        trends driving its market valuation
      </p>
      <div className="code-box">
        <code className="plot-code">

            fig2 = make_subplots(specs=[[secondary_y True]])
          <span style={{ color: "green" }}># Use stock_data.index to access the dates which were previously set as index</span>
          <br></br>
          fig2.add_trace(go.Scatter(x=stock_data.index, y=stock_data['Adj Close'], name='Price', mode="lines", line=dict(color='rgb(100,120,180)', width=2)), secondary_y=False)<br></br>
          fig2.add_trace(go.Bar(x=stock_data.index, y=stock_data['Volume'], name='Volume', marker=dict(color='rgb(80,80,0)')), secondary_y=True)<br></br>
          <br></br>
          fig2.update_yaxes(range=[0, 30000000000], secondary_y=True, showgrid=False)<br></br>
          <span style={{ color: "green" }}>
            # fig2.update_yaxes(visible=True, secondary_y=True)
          </span><br></br>
          fig2.update_layout(height=600, width=1000,
            title_text="Time price chart in yearly time frame (price and trading volume)") <br></br>
            <span style={{ color: "green" }}>
            # General setting
          </span><br></br>
          fig2.update_layout(xaxis_title='Date', <br></br>
                 <div className="indent"> xaxis=dict( </div>
                      showline=True, showgrid=False, showticklabels=True,<br></br>
                      linecolor='rgb(204,204,204)',<br></br>
                      linewidth=2, ticks='outside', tickfont=dict(<br></br>
                          family="Arial", size=12, color='rgb(82,82,82)',<br></br>
                      ),<br></br>
                  ), yaxis_title='Price',<br></br>
                  <div className="indent">yaxis=dict(showline=True, showgrid=False, showticklabels=True,</div>
                             linecolor='rgb(204,204,204)',<br></br>
                             linewidth=2, ticks='outside', tickfont=dict(<br></br>
                                 family="Arial", size=12, color='rgb(82,82,82)',<br></br>
                             ),),<br></br>
                  autosize=False,<br></br>
                  <div className="indent">
                  margin=dict(
                  </div>
                  
                      autoexpand=False, l=100, r=20, t=110,),<br></br>
                  plot_bgcolor="white") <br></br>

fig2.update_yaxes(title_text="Volume", secondary_y=True)<br></br>

fig2.show()<br></br>
        </code>
      </div>
      <div className="text-center mt-3">
        <img src={plot} width={"80%"} height={"650px"} className="plot-img" />
      </div>
    </div>
  );
}

export default PriceData;
