 // Air Quality Donut Chart
 const airCtx = document.getElementById('airDonut').getContext('2d');
 new Chart(airCtx, {
   type: 'doughnut',
   data: {
     datasets: [{
       data: [87, 13],
       backgroundColor: ['#0d6efd', '#dee2e6'],
       borderWidth: 0
     }]
   },
   options: {
     cutout: '70%',
     plugins: {
       legend: { display: false },
       tooltip: { enabled: false }
     }
   }
 });

 // Noise Pollution Line Chart
 const noiseCtx = document.getElementById('noiseChart').getContext('2d');
 new Chart(noiseCtx, {
   type: 'line',
   data: {
     labels: ['6AM', '8AM', '10AM', '12PM', '2PM'],
     datasets: [{
       label: 'dB Level',
       data: [60, 65, 68, 66, 64],
       borderColor: '#6f42c1',
       backgroundColor: 'rgba(111,66,193,0.1)',
       tension: 0.4,
       fill: true
     }]
   },
   options: {
     scales: { y: { beginAtZero: true, max: 100 } },
     plugins: { legend: { display: false } }
   }
 });

 // Traffic Line Chart
 const trafficCtx = document.getElementById('trafficChart').getContext('2d');
 new Chart(trafficCtx, {
   type: 'line',
   data: {
     labels: ['6AM', '8AM', '10AM', '12PM', '2PM'],
     datasets: [{
       label: 'Traffic',
       data: [20, 23, 25, 22, 19],
       borderColor: '#fd7e14',
       backgroundColor: 'rgba(253,126,20,0.1)',
       tension: 0.4,
       fill: true
     }]
   },
   options: {
     scales: { y: { beginAtZero: true, max: 30 } },
     plugins: { legend: { display: false } }
   }
 });