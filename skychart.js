const ctx = document.getElementById('skyChart').getContext('2d');

// More star data points for the chart
const starData = {
  datasets: [{
    label: 'Stars in the Sky',
    data: [
      { x: 5, y: 20, r: 10 },   // star 1
      { x: 15, y: 10, r: 8 },   // star 2
      { x: 25, y: 35, r: 5 },   // star 3
      { x: 35, y: 25, r: 7 },   // star 4
      { x: 50, y: 45, r: 12 },  // star 5
      { x: 10, y: 40, r: 6 },   // star 6
      { x: 40, y: 10, r: 9 },   // star 7
      { x: 30, y: 15, r: 11 },  // star 8
      { x: 20, y: 30, r: 5 },   // star 9
      { x: 45, y: 20, r: 7 },   // star 10
      { x: 10, y: 25, r: 4 },   // star 11
      { x: 5, y: 5, r: 3 },     // star 12
      { x: 35, y: 40, r: 6 },   // star 13
      { x: 25, y: 5, r: 10 },   // star 14
      { x: 15, y: 45, r: 5 },   // star 15
      { x: 40, y: 35, r: 8 },   // star 16
    ],
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  }]
};

// Create bubble chart to represent stars as data points
const skyChart = new Chart(ctx, {
  type: 'bubble',
  data: starData,
  options: {
    scales: {
      x: {
        min: 0,
        max: 50,
        ticks: {
          color: '#fff'
        },
        grid: {
          color: '#333'
        }
      },
      y: {
        min: 0,
        max: 50,
        ticks: {
          color: '#fff'
        },
        grid: {
          color: '#333'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    backgroundColor: '#000'
  }
});
