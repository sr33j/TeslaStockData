from flask import Flask, render_template, jsonify
import yfinance as yf

app = Flask(__name__)

@app.route('/')
def index():
    try:
        return render_template('index.html')
    except Exception as e:
        return f"An error occurred: {e}", 500

@app.route('/api/tesla-stock-data')
def tesla_stock_data():
    try:
        stock = yf.Ticker("TSLA")
        data = stock.history(period="1y")['Close']
        return jsonify(data.to_dict())
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.errorhandler(404)
def not_found_error(error):
    return "404 Not Found", 404

@app.errorhandler(500)
def internal_error(error):
    return "500 Internal Server Error", 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)