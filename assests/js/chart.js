$(document).ready(function() {
  $("a").remove(".canvasjs-chart-credit");
});

window.onload = function () {
  var chart1 = new CanvasJS.Chart("chartContainer1",
  {
    data: [
    {
     type: "doughnut",
     dataPoints: [
     {  y: 15, indexLabel: "Present (57%)" },
     {  y: 4, indexLabel: "Holiday (15%)" },
     {  y: 2, indexLabel: "Leave (7%)" },
     {  y: 5, indexLabel: "Absent (19%)" },
     ]
   }
   ]
 });
  var chart2 = new CanvasJS.Chart("chartContainer2",
  {
    data: [
    {
     type: "doughnut",
     dataPoints: [
     {  y: 15, indexLabel: "Present (57%)" },
     {  y: 4, indexLabel: "Holiday (15%)" },
     {  y: 2, indexLabel: "Leave (7%)" },
     {  y: 5, indexLabel: "Absent (19%)" },
     ]
   }
   ]
 });
  var chart3 = new CanvasJS.Chart("chartContainer3",
  {
    data: [
    {
     type: "doughnut",
     dataPoints: [
     {  y: 13, indexLabel: "Present (50%)" },
     {  y: 4, indexLabel: "Holiday (15%)" },
     {  y: 5, indexLabel: "Leave (19%)" },
     {  y: 4, indexLabel: "Absent (15%)" },
     ]
   }
   ]
 });
  var chart4 = new CanvasJS.Chart("chartContainer4",
  {
    data: [
    {
     type: "doughnut",
     dataPoints: [
     {  y: 17, indexLabel: "Present (65%)" },
     {  y: 4, indexLabel: "Holiday (15%)" },
     {  y: 1, indexLabel: "Leave (3%)" },
     {  y: 4, indexLabel: "Absent (15%)" },
     ]
   }
   ]
 });
  var chart5 = new CanvasJS.Chart("chartContainer5",
  {
    data: [
    {
     type: "doughnut",
     dataPoints: [
     {  y: 19, indexLabel: "Present (73%)" },
     {  y: 4, indexLabel: "Holiday (15%)" },
     {  y: 1, indexLabel: "Leave (3%)" },
     {  y: 2, indexLabel: "Absent (7%)" },
     ]
   }
   ]
 });

  chart1.render();
  chart2.render();
  chart3.render();
  chart4.render();
  chart5.render();
}
