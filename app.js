const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable").getElementsByTagName('tbody')[0];

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const grade = document.getElementById("grade").value;

    // Create a new row in the table with the submitted data
    const newRow = studentTable.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerHTML = fullName;
    cell2.innerHTML = dob;
    cell3.innerHTML = gender;
    cell4.innerHTML = phoneNumber;
    cell5.innerHTML = grade;

    // Reset the form
    studentForm.reset();
});
