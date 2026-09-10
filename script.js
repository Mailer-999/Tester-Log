const employeeID = document.getElementById("รหัสพนง.");
const department = document.getElementById("แผนก");
const password = document.getElementById("รหัส");
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function() {
    alert(
        "รหัสพนักงาน: " + employeeID.value +
        "\nแผนก: " + department.value
    );
});
