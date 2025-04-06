import React from 'react'
import plot from '../../images/plot.png'

function Plot() {
  return (
    <div className='container'>
        <h2 className='text-center'>Closing Price</h2>
        <p className='plot-content'>
        The closing price is the last price at which the stock is traded during the regular trading day. A stock’s closing price is the standard benchmark used by investors to track its performance over time.
        </p>
        <div className='code-box'>
        <code className='plot-code'>
        
<span style={{color:'green'}}># Parse dates</span><br></br>
stock_data['Date'] = pd.to_datetime(stock_data['Date'])<br></br>

<span style={{color:'green'}}># Set date as index</span><br></br>
stock_data.set_index('Date', inplace=True)<br></br>


plt.figure(figsize=(10, 6))<br></br>
plt.plot(stock_data['Close'])<br></br>
plt.title("Nvidia Corporation Closing Price")<br></br>
plt.xlabel("Year")<br></br>
plt.ylabel("Price")<br></br>
plt.show()<br></br>
        </code>
        </div>
        <div className='text-center'>
            <img src={plot} width={'80%'} height={'650px'} className='plot-img'/>
        </div>
    </div>
  )
}

export default Plot