const role = localStorage.getItem("role");

const employeeDashboard =
  document.getElementById("employeeDashboard");
const hrDashboard =
  document.getElementById("hrDashboard");
const title =
  document.getElementById("dashboardTitle");

/* PROTECT ROUTE */
if (!role) {
  window.location.href = "../auth/auth.html";
}

/* ROLE SWITCH */
if (role === "HR") {
  title.textContent = "HR Dashboard";
  hrDashboard.classList.remove("hidden");

  const select = document.getElementById("employeeSelect");
  ["EMP001 - John", "EMP002 - Jane", "EMP003 - Alex"]
    .forEach(emp => {
      const option = document.createElement("option");
      option.textContent = emp;
      select.appendChild(option);
    });
} else {
  title.textContent = "Employee Dashboard";
  employeeDashboard.classList.remove("hidden");
}

/* LOGOUT */
function logout() {
  localStorage.clear();
  window.location.href = "../auth/auth.html";
}
