// students array
const students = [
  {id: '29901', name: 'Akash Verma', gender: 'Male', parentsName: 'Amit Verma', class: '1', section: 'A', fees: '$2.00', status: true, phone: '+918866092325', email: 'email@gmail.com', date: '10/08/2017'},
  {id: '29901', name: 'Mahesh Singh', gender: 'Male', parentsName: 'Paratap Singh', class: '2', section: 'A', fees: '$3.00', status: true, phone: '+918866092325', email: 'email@gmail.com', date: '10/08/2017'},
  {id: '29901', name: 'Akash Verma', gender: 'Male', parentsName: 'Amit Verma', class: '1', section: 'A', fees: '$2.00', status: false, phone: '+918866092325', email: 'email@gmail.com', date: '10/08/2017'},
  {id: '29901', name: 'Akash Verma', gender: 'Male', parentsName: 'Amit Verma', class: '1', section: 'A', fees: '$2.00', status: false, phone: '+918866092325', email: 'email@gmail.com', date: '10/08/2017'},
  {id: '29901', name: 'Akash Verma', gender: 'Male', parentsName: 'Amit Verma', class: '1', section: 'A', fees: '$2.00', status: true, phone: '+918866092325', email: 'email@gmail.com', date: '10/08/2017'},
  {id: '29901', name: 'Akash Verma', gender: 'Male', parentsName: 'Amit Verma', class: '1', section: 'A', fees: '$2.00', status: false, phone: '+918866092325', email: 'email@gmail.com', date: '10/08/2017'},
  {id: '29901', name: 'Akash Verma', gender: 'Male', parentsName: 'Amit Verma', class: '1', section: 'A', fees: '$2.00', status: true, phone: '+918866092325', email: 'email@gmail.com', date: '10/08/2017'},
  {id: '29901', name: 'Akash Verma', gender: 'Male', parentsName: 'Amit Verma', class: '1', section: 'A', fees: '$2.00', status: true, phone: '+918866092325', email: 'email@gmail.com', date: '10/08/2017'},
  {id: '29901', name: 'Akash Verma', gender: 'Male', parentsName: 'Amit Verma', class: '1', section: 'A', fees: '$2.00', status: false, phone: '+918866092325', email: 'email@gmail.com', date: '10/08/2017'},
  {id: '29901', name: 'Akash Verma', gender: 'Male', parentsName: 'Amit Verma', class: '1', section: 'A', fees: '$2.00', status: false, phone: '+918866092325', email: 'email@gmail.com', date: '10/08/2017'},
  {id: '29901', name: 'Akash Verma', gender: 'Male', parentsName: 'Amit Verma', class: '1', section: 'A', fees: '$2.00', status: true, phone: '+918866092325', email: 'email@gmail.com', date: '10/08/2017'},
];


const generateStudentFeesList = (data) => {
  let statusEle = `<span class="notPaid">Due</span> </td>`;
  if(data.status) {
    statusEle = `<span class="paid">Paid</span> </td>`;
  }
  return (
    `<tr>
      <td class="btn-td" style="display: flex;align-items: center;">
        <input type="checkbox" name="" value="" style="margin-right: 10px;"> #${data.id}
      </td>
      <td class="btn-td"> <span style="width: 25px;display: inline-block">
        <img src='assests/img/user/user.png'/ style="border: 1px solid silver;border-radius: 50%;"></span>
      </td>
      <td class="btn-td"> ${data.name} </td>
      <td class="btn-td"> ${data.gender} </td>
      <td class="btn-td"> ${data.parentsName} </td>
      <td class="btn-td"> ${data.class} </td>
      <td class="btn-td"> ${data.section} </td>
      <td class="btn-td"> ${data.fees} </td>
      <td class="btn-td">${statusEle}</td>
      <td class="btn-td"> ${data.phone} </td>
      <td class="btn-td"> ${data.email} </td>
      <td class="btn-td"> ${data.date} </td>
      <td class="btn-td">
        <a href="#"><i class="far fa-eye"></i></a>
        <a href="#" class="text-success"><i class="far fa-edit"></i></a>
        <a href="#" class="text-danger"><i class="far fa-trash-alt"></i></a>
      </td>
    </tr>`
  );
}

const studentFeesList = students.map(student => {
  let list = generateStudentFeesList(student);
  return list;
});

//insert attendanceList on DOM
(function() {
   var getElement = document.getElementById("studentsFeesList");
   if(getElement) {
    getElement.innerHTML = studentFeesList.join('');
   }
})();
