# Tesla Stock Data App

This web application downloads stock data for Tesla and displays it as a line chart.

## Project Structure

- `app.py`: Main file to run the Flask app.
- `templates/index.html`: Template for the index page.
- `static/style.css`: Stylesheet for the app.
- `static/script.js`: JavaScript for fetching data and rendering the chart.
- `requirements.txt`: List of dependencies needed for the app.

## Setup

1. Clone the repository.

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Run the Flask app:

   ```bash
   python app.py
   ```

4. Access the application in your web browser at `http://0.0.0.0:5000/`.

## Features

- Fetches the latest Tesla stock data.
- Displays data in a line chart using Chart.js.

## Development

Set `debug=True` in `app.py` for development.

## Deployment

Use Gunicorn or another WSGI server for deployment.