'use strict';
let formInfo = ['Id', 'Name', 'Email', 'Mobile', 'Age', 'Tution']

function Student(name, email, phone, age, tution) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.tution = tution;
    this.age = getRndInteger(18.30);
    Student.studentsArray.push(this);
}
Student.studentsArray = [];


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', SubmitFormInfo);

function SubmitFormInfo(event) {
    event.preventDefault();
    let studentEmail = email.value;
    let studentNumber = number.value;
    let studentTuition = tuation.value;
    let studentName = studentEmail.substring(0, studentEmail.lastIndexOf("@"));
    console.log(studentName);
    Student.studentsArray.push(studentEmail, studentNumber, studentTuition, studentName);
    settingItems();
}
gettingItems();

function settingItems() {
    localStorage.setItem('name', Student.studentsArray);
    console.log(localStorage);
}

function gettingItems() {
    let item = localStorage.getItem('name');
    let normalObject = JSON.stringify('studentsArray');
    if (normalObject !== null) {
        normalObject = studentsArray;
    }
}

let table = document.getElementById('table');
let firstRow = document.getElementById('firstRow');
table.appendChild(firstRow);
let secondRow = document.createElement('tr');
firstRow.appendChild(secondRow);

for (let i = 0; i < formInfo.length; i++) {
    let counter = 0;
    let dataRow = document.createElement('td');
    secondRow.appendChild(dataRow);
    dataRow.textContent = counter + 1;
}