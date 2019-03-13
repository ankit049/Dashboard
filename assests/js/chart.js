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
     {  y: 75, indexLabel: "Present (75%)" },
     {  y: 5, indexLabel: "Holiday (5%)" },
     {  y: 5, indexLabel: "Leave (5%)" },
     {  y: 15, indexLabel: "Absent (15%)" },
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
     {  y: 60, indexLabel: "Present (65%)" },
     {  y: 5, indexLabel: "Holiday (5%)" },
     {  y: 15, indexLabel: "Leave (15%)" },
     {  y: 20, indexLabel: "Absent (20%)" },
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
     {  y: 65, indexLabel: "Present (65%)" },
     {  y: 5, indexLabel: "Holiday (5%)" },
     {  y: 18, indexLabel: "Leave (18%)" },
     {  y: 12, indexLabel: "Absent (12%)" },
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
     {  y: 18, indexLabel: "Present" },
     {  y: 4, indexLabel: "Holiday" },
     {  y: 6, indexLabel: "Leave" },
     {  y: 2, indexLabel: "Absent" },
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
     {  y: 18, indexLabel: "Present" },
     {  y: 4, indexLabel: "Holiday" },
     {  y: 6, indexLabel: "Leave" },
     {  y: 2, indexLabel: "Absent" },
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
