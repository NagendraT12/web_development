document.addEventListener("DOMContentLoaded", () => {
    const studentForm = document.getElementById("studentForm");
    const studentList = document.getElementById("studentList");

    // Load students from localStorage
    function loadStudents() {
        studentList.innerHTML = "";
        let students = JSON.parse(localStorage.getItem("students")) || [];
        students.forEach((student, index) => {
            addStudentToTable(student, index);
        });
    }

    // Add Student to the Table
    function addStudentToTable(student, index) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.studentId}</td>
            <td>${student.email}</td>
            <td>${student.contact}</td>
            <td class="actions">
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        studentList.appendChild(row);
    }

    // Add Student
    studentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let studentId = document.getElementById("studentId").value.trim();
        let email = document.getElementById("email").value.trim();
        let contact = document.getElementById("contact").value.trim();

        // Input validation
        if (!name.match(/^[A-Za-z\s]+$/)) {
            alert("Student name must contain only letters.");
            return;
        }
        if (!studentId.match(/^[0-9]+$/) || studentId.length < 3) {
            alert("Student ID must be a number with at least 3 digits.");
            return;
        }
        if (!contact.match(/^[0-9]{10}$/)) {
            alert("Contact number must be exactly 10 digits.");
            return;
        }

        let students = JSON.parse(localStorage.getItem("students")) || [];
        students.push({ name, studentId, email, contact });
        localStorage.setItem("students", JSON.stringify(students));

        studentForm.reset();
        loadStudents();
    });

    // Edit Student
    window.editStudent = (index) => {
        let students = JSON.parse(localStorage.getItem("students")) || [];
        let student = students[index];

        document.getElementById("name").value = student.name;
        document.getElementById("studentId").value = student.studentId;
        document.getElementById("email").value = student.email;
        document.getElementById("contact").value = student.contact;

        students.splice(index, 1);
        localStorage.setItem("students", JSON.stringify(students));
        loadStudents();
    };

    // Delete Student
    window.deleteStudent = (index) => {
        let students = JSON.parse(localStorage.getItem("students")) || [];
        students.splice(index, 1);
        localStorage.setItem("students", JSON.stringify(students));
        loadStudents();
    };

    // Load data on page load
    loadStudents();
});
