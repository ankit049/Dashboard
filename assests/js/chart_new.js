$(document).ready(function() {
  $(document).on('click', '#a_demo1', function(){
    console.log("click");
    $("#up_down_icon").toggleClass("fa-angle-double-up");
  })
});

window.onload = function () {
  google.charts.load("current", {packages:["corechart"]});
  google.charts.load('current', {'packages':['bar']});
  google.charts.setOnLoadCallback(drawChart1);
  google.charts.setOnLoadCallback(drawChart2);
  google.charts.setOnLoadCallback(drawChart3);
  google.charts.setOnLoadCallback(drawChart4);
  google.charts.setOnLoadCallback(drawChart5);
  google.charts.setOnLoadCallback(drawChart6);
  google.charts.setOnLoadCallback(drawChart7);
  function drawChart1() {
    var data1 = google.visualization.arrayToDataTable([
      ['title1', 'Hours per Day'],
      ['Present', 138],
      ['Leave',     19],
      ['Absent',      10],
      ['Holiday',  18],
    ]);

    var options1 = {
      pieHole: 0.5,
      legend: 'none',
      width: 450,
      height: 300,
    };

    var chart1 = new google.visualization.PieChart(document.getElementById('donutchart1'));
    chart1.draw(data1, options1);
  }
  function drawChart2() {
    var data1 = google.visualization.arrayToDataTable([
      ['title1', 'Hours per Day'],
      ['Present', 12],
      ['Leave',     3],
      ['Absent',     6],
      ['Holiday',  5],
    ]);

    var options1 = {
      pieHole: 0.5,
      title: "Math",
      width: 450,
      height: 300,
      // legend: 'none',
    };

    var chart1 = new google.visualization.PieChart(document.getElementById('donutchart2'));
    chart1.draw(data1, options1);
  }
  function drawChart3() {
    var data1 = google.visualization.arrayToDataTable([
      ['title1', 'Hours per Day'],
      ['Present', 16],
      ['Leave',     2],
      ['Absent',     3],
      ['Holiday',  4],
    ]);

    var options1 = {
      pieHole: 0.5,
      title: "Biology",
      width: 450,
      height: 300,
      // legend: 'none',
    };

    var chart1 = new google.visualization.PieChart(document.getElementById('donutchart3'));
    chart1.draw(data1, options1);
  }
  function drawChart4() {
    var data1 = google.visualization.arrayToDataTable([
      ['title1', 'Hours per Day'],
      ['Present', 16],
      ['Leave',   1],
      ['Absent',  4],
      ['Holiday', 4],
    ]);

    var options1 = {
      pieHole: 0.5,
      title: "Physics",
      width: 450,
      height: 300,
      // legend: 'none',
    };

    var chart1 = new google.visualization.PieChart(document.getElementById('donutchart4'));
    chart1.draw(data1, options1);
  }
  function drawChart5() {
    var data1 = google.visualization.arrayToDataTable([
      ['title1', 'Hours per Day'],
      ['Present', 14],
      ['Leave',   3],
      ['Absent',  3],
      ['Holiday', 6],
    ]);

    var options1 = {
      pieHole: 0.5,
      title: "Chemistry",
      width: 450,
      height: 300,
      // legend: 'none',
    };

    var chart1 = new google.visualization.PieChart(document.getElementById('donutchart5'));
    chart1.draw(data1, options1);
  }


  function drawChart6() {
    var data = google.visualization.arrayToDataTable([
      ['Weeks', 'Present', 'Absent', 'Leave', 'Holiday'],
      ['week1', 3, 1, 0, 2],
      ['week2', 5, 0, 0, 1],
      ['week3', 0, 0, 0, 0],
      ['week4', 0, 0, 0, 0],
      ['week5', 0, 0, 0, 0],
    ]);

    var options = {
      chart: {
        title: 'Student Weekly Attendance Analysis',
        subtitle: 'Present, Leave, Absent and Holiday: March 2019',
      },
      bars: 'vertical',
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material1'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
  }
  function drawChart7() {
    var data = google.visualization.arrayToDataTable([
      ['Months', 'Present', 'Absent', 'Leave', 'Holiday'],
      ['Dec', 15, 4, 3, 2],
      ['Jan', 16, 3, 2, 2],
      ['Feb', 19, 2, 1, 4],
      ['Mar', 8, 1, 1, 2],
    ]);

    var options = {
      chart: {
        title: 'Student Monthly Attendance Analysis',
        subtitle: 'Present, Leave, Absent and Holiday: Year 2018-2019',
      },
      bars: 'vertical',
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material2'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
  }
}
