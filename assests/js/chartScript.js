// Any of the following formats may be used
var ctx1 = document.getElementById("myChart1");
var ctx = document.getElementById("myChart");

(function() {
  var myChart1 = new Chart(ctx1, {
      type: 'line',
      data: {
          labels: [
            "1-JAN 2018", "2-JAN 2018", "3-JAN 2018", "4-JAN 2018", "5-JAN 2018", "6-JAN 2018", "7-JAN 2018" ,
            "8-JAN 2018", "9-JAN 2018","10-JAN 2018", "11-JAN 2018", "12-JAN 2018", "13-JAN 2018"
          ],
          datasets: [{
              label: 'Transations',
              data: [6, 15, 3, 5, 13, 3, 11, 7, 13, 6, 5, 14, 9],
              backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1,
              maxBarThickness: "10px"
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["dataX-1", "dataX-2", "dataX-3", "dataX-4", "dataX-5", "dataX-6", "dataX-7" , "dataX-8", "dataX-9"],
          datasets: [{
              label: 'Fee Collection',
              data: [12, 19, 3, 5, 2, 3, 11, 7, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 109, 64, 0.2)',
                  'rgba(255, 129, 64, 0.2)',
                  'rgba(75, 151, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255,99,132,1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(54, 159, 64, 1)',
              ],
              borderWidth: 1,
              maxBarThickness: "10px"
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
})();
