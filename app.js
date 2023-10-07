function Student(fullName, dob, gender, major, imageUrl, phoneNumber, grade) {
    this.fullName = fullName;
    this.dob = dob;
    this.gender = gender;
    this.major = major;
    this.imageUrl = imageUrl;
    this.phoneNumber = phoneNumber;
    this.grade = grade;
}

const studentForm = document.getElementById("studentForm");
const studentTableBody = document.querySelector('#studentTable tbody');
const studentCards = document.getElementById("studentCards");
let students = [];

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const major = document.getElementById("major").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const grade = document.getElementById("grade").value;

    const newStudent = new Student(fullName, dob, gender, major, imageUrl, phoneNumber, grade);

    students.push(newStudent);
    renderStudentCard(newStudent);

 
    saveStudentsToLocalStorage();
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${fullName}</td>
        <td>${dob}</td>
        <td>${gender}</td>
        <td>${phoneNumber}</td>
        <td>${grade}</td>
    `;
    studentTableBody.appendChild(newRow);
    studentForm.reset();
});

function renderStudentCard(student) {
    const studentCard = document.createElement("div");
    studentCard.classList.add("student-card");

    const imageElement = document.createElement("img");
    imageElement.src = student.imageUrl;
    imageElement.alt = student.fullName;

    const fullNameElement = document.createElement("h3");
    fullNameElement.textContent = student.fullName;

    const dobElement = document.createElement("p");
    dobElement.textContent = `Date of Birth: ${student.dob}`;

    const genderElement = document.createElement("p");
    genderElement.textContent = `Gender: ${student.gender}`;

    const majorElement = document.createElement("p");
    majorElement.textContent = `Major: ${student.major}`;

    const phoneNumberElement = document.createElement("p");
    phoneNumberElement.textContent = `Phone Number: ${student.phoneNumber}`;

    const gradeElement = document.createElement("p");
    gradeElement.textContent = `Grade: ${student.grade}`;

    studentCard.appendChild(imageElement);
    studentCard.appendChild(fullNameElement);
    studentCard.appendChild(dobElement);
    studentCard.appendChild(genderElement);
    studentCard.appendChild(majorElement);
    studentCard.appendChild(phoneNumberElement);
    studentCard.appendChild(gradeElement);

    studentCards.appendChild(studentCard);
}


function saveStudentsToLocalStorage() {
    localStorage.setItem("students", JSON.stringify(students));
}

function loadStudentsFromLocalStorage() {
    const storedStudents = localStorage.getItem("students");
    if (storedStudents) {
        students = JSON.parse(storedStudents);
        students.forEach(student => {
            renderStudentCard(student);
        });
    }
}

loadStudentsFromLocalStorage();