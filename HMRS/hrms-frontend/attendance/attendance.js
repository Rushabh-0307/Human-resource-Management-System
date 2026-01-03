const role = localStorage.getItem("role") || "Employee";

const employeeActions = document.getElementById("employeeActions");
const employeeSelectBox = document.getElementById("employeeSelectBox");
const attendanceBody = document.getElementById("attendanceBody");
const title = document.getElementById("title");

let view = "daily";

/* MOCK DATA */
const attendanceData = [
  { date: "2024-01-01", status: "Present", in: "09:10", out: "18:05" },
  { date: "2024-01-02", status: "Absent", in: "-", out: "-" },
  { date: "2024-01-03", status: "Half-day", in: "09:30", out: "13:00" },
  { date: "2024-01-04", status: "Leave", in: "-", out: "-" }
];

/* ROLE SETUP */
if (role === "Employee") {
  title.textContent = "My Attendance";
  employeeActions.classList.remove("hidden");
} else {
  title.textContent = "Attendance Management";
  employeeSelectBox.classList.remove("hidden");

  const select = document.getElementById("employeeSelect");
  ["EMP001 - John", "EMP002 - Jane", "EMP003 - Alex"].forEach(emp => {
    const opt = document.createElement("option");
    opt.textContent = emp;
    select.appendChild(opt);
  });
}

/* LOAD ATTENDANCE */
function loadAttendance() {
  attendanceBody.innerHTML = "";

  attendanceData.forEach(row => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${row.date}</td>
      <td class="status-${row.status.toLowerCase().replace('-', '')}">
        ${row.status}
      </td>
      <td>${row.in}</td>
      <td>${row.out}</td>
    `;

    attendanceBody.appendChild(tr);
  });
}

loadAttendance();

/* VIEW SWITCH */
function setView(type) {
  view = type;
  document.getElementById("dailyBtn").classList.toggle("active", type === "daily");
  document.getElementById("weeklyBtn").classList.toggle("active", type === "weekly");

  // Demo: same data reused
  loadAttendance();
}

/* CHECK IN / OUT */
function checkIn() {
  alert("Checked in successfully (demo)");
}

function checkOut() {
  alert("Checked out successfully (demo)");
}

/* NAV */
function goBack() {
  window.history.back();
}
