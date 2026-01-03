/* PROTECT ROUTE */
if (localStorage.getItem("role") !== "HR") {
  alert("Access denied");
  window.location.href = "../auth/auth.html";
}

/* EMPLOYEES */
const employees = [
  { id: "EMP001", name: "John Doe", dept: "IT", role: "Employee" },
  { id: "EMP002", name: "Jane Smith", dept: "HR", role: "Employee" }
];

/* ATTENDANCE */
const attendance = {
  EMP001: [
    { date: "2024-01-10", status: "Present", in: "09:05", out: "18:00" }
  ],
  EMP002: [
    { date: "2024-01-10", status: "Leave", in: "-", out: "-" }
  ]
};

/* LEAVES */
let leaves = [
  { emp: "John Doe", type: "Paid", from: "2024-01-12", to: "2024-01-14", status: "Pending" }
];

/* POPULATE EMPLOYEE SELECT */
const select = document.getElementById("employeeSelect");
employees.forEach(e => {
  const opt = document.createElement("option");
  opt.value = e.id;
  opt.textContent = `${e.id} - ${e.name}`;
  select.appendChild(opt);
});

/* EMPLOYEE TABLE */
const empTable = document.getElementById("employeeTable");
employees.forEach(e => {
  empTable.innerHTML += `
    <tr>
      <td>${e.id}</td>
      <td>${e.name}</td>
      <td>${e.dept}</td>
      <td>${e.role}</td>
    </tr>
  `;
});

/* ATTENDANCE TABLE */
function loadAttendance(empId) {
  const tbody = document.getElementById("attendanceTable");
  tbody.innerHTML = "";

  attendance[empId].forEach(a => {
    tbody.innerHTML += `
      <tr>
        <td>${a.date}</td>
        <td>${a.status}</td>
        <td>${a.in}</td>
        <td>${a.out}</td>
      </tr>
    `;
  });
}

select.onchange = () => loadAttendance(select.value);
loadAttendance(select.value);

/* LEAVE TABLE */
function loadLeaves() {
  const tbody = document.getElementById("leaveTable");
  tbody.innerHTML = "";

  leaves.forEach((l, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${l.emp}</td>
        <td>${l.type}</td>
        <td>${l.from}</td>
        <td>${l.to}</td>
        <td>${l.status}</td>
        <td>
          ${l.status === "Pending"
            ? `<button class="action-btn approve" onclick="approve(${i})">Approve</button>
               <button class="action-btn reject" onclick="reject(${i})">Reject</button>`
            : "-"
          }
        </td>
      </tr>
    `;
  });
}

loadLeaves();

function approve(i) {
  leaves[i].status = "Approved";
  loadLeaves();
}

function reject(i) {
  leaves[i].status = "Rejected";
  loadLeaves();
}

/* UTIL */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function logout() {
  localStorage.clear();
  window.location.href = "../auth/auth.html";
}
