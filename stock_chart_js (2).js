// stockChart.js - Chart.js setup with price + volume

function renderStockChart(ctx, labels, prices, volumes, symbol) {
  if (window.chartInstance) window.chartInstance.destroy();

  window.chartInstance = new Chart(ctx, {
    data: {
      labels: labels,
      datasets: [
        {
          type: 'line',
          label: `${symbol} Close Price`,
          data: prices,
          borderColor: 'blue',
          backgroundColor: 'rgba(0,123,255,0.2)',
          yAxisID: 'y',
          tension: 0.3,
          fill: true,
        },
        {
          type: 'bar',
          label: 'Volume',
          data: volumes,
          backgroundColor: 'rgba(0,0,0,0.1)',
          yAxisID: 'y1',
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: { mode: 'index', intersect: false },
        legend: { position: 'top' }
      },
      scales: {
        y: {
          beginAtZero: false,
          position: 'left',
          title: { display: true, text: 'Price' }
        },
        y1: {
          beginAtZero: true,
          position: 'right',
          title: { display: true, text: 'Volume' },
          grid: { drawOnChartArea: false }
        }
      }
    }
  });
}
