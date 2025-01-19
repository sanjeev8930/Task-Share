const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['15%', '21%', '32%'],
    datasets: [{
      label: '',
      data: [5, 10, 20],
      backgroundColor: [
        
        'rgba(54, 162, 235, 0.2)',
        'rgba(227, 226, 244, 1)',
        'rgba(254, 154, 61, 1)',        
    ],
      borderWidth: 1,
      borderRadius: 10,   
         
    }]
  },
  options: {
    plugins: { legend: { display: false, }, },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


var ctxs = document.getElementById('myChartline');

const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yValues = [6, 8, 8, 9, 6, 9, 10, 7, 14, 10, 15];
new Chart("myChartline", {
    
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "#97e5e5",
        borderRadius: 15,
        borderColor: "#97e5e5",
        data: yValues,
       
      }]
    },
    options: {
        
        plugins: { legend: { display: false, }, },
      legend: { display: false },
      scales: {
       
        x: {
          grid: {
            display: false,
          },
        },
        y: {
            beginAtZero:true,
          grid: {
            display: false,
          },
        },
      },
    }
  });


