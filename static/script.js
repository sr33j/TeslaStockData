document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/tesla-stock-data')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('stockChart').getContext('2d');
            const labels = Object.keys(data);
            const values = Object.values(data);
            
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Tesla Stock Price',
                        data: values,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Date'
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Price (USD)'
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching stock data:', error));
});