from flask import Flask, send_file,jsonify
from flask_ngrok import run_with_ngrok
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('Agg')  
import pandas as pd
import numpy as np
import io
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dropout, Dense
from pyngrok import ngrok
from statsmodels.tsa.stattools import adfuller
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_squared_error




app = Flask(__name__)
run_with_ngrok(app)  # Automatically starts ngrok
ngrok.set_auth_token("2vJ5CrEVUBY6AXaZDwpkeLYtyhG_5iV5FjyNtpX4Yb8wpbNcm")


stock_data = pd.read_csv('StockMarket.csv')
# print(tf.__version__)

def create_sequences(data, sequence_length):
    sequences, targets = [], []
    for i in range(len(data) - sequence_length):
        sequences.append(data[i:i + sequence_length])
        targets.append(data[i + sequence_length])
    return np.array(sequences), np.array(targets)

@app.route('/')
def index():
    return 'Flask API is running on Colab!'

@app.route('/plot')
def plot():
    # Generate a simple plot
    
    stock_data['Date'] = pd.to_datetime(stock_data['Date'])

# Set date as index
    stock_data.set_index('Date', inplace=True)

# Plot
    plt.figure(figsize=(10, 6))
    plt.plot(stock_data['Close'])
    plt.title("Nvidia Corporation Closing Price")
    plt.xlabel("Year")
    plt.ylabel("Price")
    # Save plot to a BytesIO object
    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    plt.close()

    return send_file(img, mimetype='image/png')

@app.route('/predict')
def predict():
    scaler = MinMaxScaler(feature_range=(0, 1))
    scaled_data = scaler.fit_transform(stock_data['Close'].values.reshape(-1, 1))

    sequence_length = 60
    X, y = create_sequences(scaled_data, sequence_length)

    train_size = int(len(X) * 0.8)
    X_train, X_test = X[:train_size], X[train_size:]
    y_train, y_test = y[:train_size], y[train_size:]

    # Reshape input for LSTM
    X_train = X_train.reshape((X_train.shape[0], X_train.shape[1], 1))
    X_test = X_test.reshape((X_test.shape[0], X_test.shape[1], 1))

    model = Sequential()
    model.add(LSTM(units=50, return_sequences=True, input_shape=(X_train.shape[1], 1)))
    model.add(Dropout(0.2))
    model.add(LSTM(units=50))
    model.add(Dropout(0.2))
    model.add(Dense(units=1))

    model.compile(optimizer='adam', loss='mean_squared_error')
    model.fit(X_train, y_train, epochs=5, batch_size=32, validation_data=(X_test, y_test), verbose=0)

    predictions = model.predict(X_test)
    predictions = scaler.inverse_transform(predictions).flatten()
    y_test = scaler.inverse_transform(y_test.reshape(-1, 1)).flatten()

    # Dates for plotting
    dates_test = stock_data.index[train_size + sequence_length:]

    plt.figure(figsize=(10, 6))
    plt.plot(dates_test, y_test, label='Actual', color='blue')
    plt.plot(dates_test, predictions, label='Predicted', color='orange')
    plt.title('Actual vs Predicted Stock Price')
    plt.xlabel('Date')
    plt.ylabel('Price')
    plt.legend()

    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    plt.close()

    # Split data into train and test
    train_size = int(len(data) * 0.8)
    train, test = data.iloc[:train_size], data.iloc[train_size:]

    # Fit ARIMA model
    model = ARIMA(train["Close"], order=(1,1,1))
    model_fit = model.fit()

    forecast = model_fit.forecast(steps=len(test))
    # Plot the results with specified colors
    plt.figure(figsize=(14,7))
    plt.plot(train.index, train["Close"], label='Train', color='#203147')
    plt.plot(test.index, test["Close"], label='Test', color='#01ef63')
    plt.plot(test.index, forecast, label='Forecast', color='orange')
    plt.title('Close Price Forecast')
    plt.xlabel('Year')
    plt.ylabel('Close Price')
    plt.legend()

    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    plt.close()

    return send_file(img, mimetype='image/png')

if __name__ == '__main__':
    from pyngrok import ngrok
    ngrok.set_auth_token("2vJ5CrEVUBY6AXaZDwpkeLYtyhG_5iV5FjyNtpX4Yb8wpbNcm")  # set your token
    public_url = ngrok.connect(5000)
    print(" * Ngrok tunnel:", public_url)
    app.run()
