// show/hide sidebar
document.getElementById("toggle_menu").onclick = function(){
  document.getElementById("sidebar").classList.toggle("hide-sidebar");
};

// student name array
const studentName = [
  {name: 'Ankit Verma', class: 'ClassXA'},
  {name: 'Ranvijay', class: 'ClassXA'},
  {name: 'Vishal Anand', class: 'ClassXB'},
  {name: 'Shubham Mishra', class: 'ClassXA'},
  {name: 'Shritansh', class: 'ClassXA'},
  {name: 'Ashish Jain', class: 'ClassXB'},
  {name: 'Amit Sharma', class: 'ClassXA'},
  {name: 'Virat Jain', class: 'ClassXA'},
  {name: 'Pankaj Tirpathi', class: 'ClassXB'},
  {name: 'Nimal Chaturvedi', class: 'ClassXA'},
  {name: 'Akash', class: 'ClassXB'},
  {name: 'Sachin Dube', class: 'ClassXA'},
  {name: 'Anish Shrivastav', class: 'ClassXB'}
];

const generateAttendanceList = (name, key) => (
  `<tr>
    <td colspan="2" class="btn-td"><button><i class="fas fa-file-alt"></i></button> <a href="#"> ${name}</a> </td>
    <td><button type="button" class="td-btn btn btn-default btn-sm present key${key}" onclick="changBtnColor(event, 'present', 'key${key}')">Present</button></td>
    <td><button type="button" class="td-btn btn btn-default btn-sm absent key${key}" onclick="changBtnColor(event, 'absent', 'key${key}')">Absent</button></td>
    <td><button type="button" class="td-btn btn btn-default btn-sm tardy key${key}" onclick="changBtnColor(event, 'tardy', 'key${key}')">Tardy</button></td>
  </tr>`
)

const attendanceList = studentName.map((name, key) => {
  let list = generateAttendanceList(name.name, key);
  return list;
});

//insert attendanceList on DOM
(function() {
   var getElement = document.getElementById("attendanceList");
   if(getElement) {
    getElement.innerHTML = attendanceList.join('');
   }
})();

function clearAllBtnClass() {
  var getAllElements = document.querySelectorAll(".td-btn");

  getAllElements.forEach(function(element) {
    element.classList.remove("btn-primary");
    element.classList.remove("btn-success");
    element.classList.remove("btn-danger");
    element.style.color = "dimgray";
  });
}

function clearSpecificBtnClass(key) {
  var getAllElements = document.querySelectorAll("."+key);

  getAllElements.forEach(function(element) {
    element.classList.remove("btn-primary");
    element.classList.remove("btn-success");
    element.classList.remove("btn-danger");
    element.style.color = "dimgray";
  });
}

function changBtnColor(e, val, key) {
  console.log(e.target);
  console.log(val);

  clearSpecificBtnClass(key);

  if(val === "present") {
    e.target.classList.add("btn-primary");
    e.target.style.color = "white";
  }
  if(val === "absent") {
    e.target.classList.add("btn-success");
    e.target.style.color = "white";
  }
  if(val === "tardy") {
    e.target.classList.add("btn-danger");
    e.target.style.color = "white";
  }
}

// change btn color by selecting the attendance type
function val() {
    d = document.getElementById("attType").value;
    var getElements = document.querySelectorAll("." + d);

    clearAllBtnClass();

    if(d === "all") {
      getElements.forEach(function(element) {
        element.style.color = "dimgray";
      });
    }
    if(d === "present") {
      getElements.forEach(function(element) {
        element.classList.remove("btn-primary");
        element.classList.remove("btn-success");
        element.classList.remove("btn-danger");
        element.classList.add("btn-primary");
        element.style.color = "white";
      });
    }
    if(d === "absent") {
      getElements.forEach(function(element) {
        element.classList.remove("btn-primary");
        element.classList.remove("btn-success");
        element.classList.remove("btn-danger");
        element.classList.add("btn-success");
        element.style.color = "white";
      });
    }
    if(d === "tardy") {
      getElements.forEach(function(element) {
        element.classList.remove("btn-primary");
        element.classList.remove("btn-success");
        element.classList.remove("btn-danger");
        element.classList.add("btn-danger");
        element.style.color = "white";
      });
    }
    if(d === "tardy") {
      getElements.forEach(function(element) {
        element.classList.remove("btn-primary");
        element.classList.remove("btn-success");
        element.classList.remove("btn-danger");
        element.classList.add("btn-danger");
        element.style.color = "white";
      });
    }
}

//on change class
function onClassChange() {
    d = document.getElementById("classType").value;
    console.log(d);
    if(d){
      const attendanceList = studentName.map((name, key) => {
        if(d === name.class) {
          return generateAttendanceList(name.name, key);
        }
      });

      let completeList = [];
      attendanceList.forEach(element => {
        if(element) {
          completeList.push(element);
        }
      })

      var getElement = document.getElementById("attendanceList");
      if(getElement) {
        if(completeList.length > 0) {
          getElement.innerHTML = completeList.join('');
        } else {
          console.log("no element");
          getElement.innerHTML = "<p style='text-align: center;color: brown'>No Class Selected</p>";
        }
      }
    }
}

const dateList = [
  "February 2019",
  "January 2019",
  "December 2018",
  "November 2018",
  "October 2018",
  "September 2018",
  "August 2018",
  "July 2018",
  "June 2018",
  "May 2018",
  "April 2018",
  "March 2018",
  "February 2018",
  "January 2018",
];


// add students list to select option
(function(){
  var getElement = document.getElementById("studentList");
  var getDateElement = document.getElementById("dateList");

  let studentList = ["<option value='0' selected>Choose students..</option>"];
  studentName.forEach(student => {
    let option = `<option value="ClassXA">${student.name}</option>`;
    return studentList.push(option);
  });

  let dateElementList = ["<option value='0' selected>Choose Month/Year..</option>"];
  dateList.forEach(date => {
    let option = `<option>${date}</option>`;
    return dateElementList.push(option);
  });

  if(getElement || getDateElement) {
   getElement.innerHTML = studentList.join('');
   getDateElement.innerHTML = dateElementList.join('');
  }
})();
