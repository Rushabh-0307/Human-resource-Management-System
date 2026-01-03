const role = localStorage.getItem("role") || "Employee";

const applySection = document.getElementById("applySection");
const leaveBody = document.getElementById("leaveBody");
const pageTitle = document.getElementById("pageTitle");
const actionCol = document.getElementById("actionCol");

/* MOCK LEAVE DATA */
let leaves = [
  {
    emp: "EMP001 - John",
    type: "Paid",
    from: "2024-01-10",
    to: "2024-01-12",
    status: "Pending"
  }
];

/* ROLE SETUP */
if (role === "Employee") {
  pageTitle.textContent = "My Leaves";
  applySection.classList.remove("hidden");
  actionCol.classList.add("hidden");
} else {
  pageTitle.textContent = "Leave Approval";
}

/* LOAD LEAVES */
function renderLeaves() {
  leaveBody.innerHTML = "";

  leaves.forEach((leave, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${leave.emp}</td>
      <td>${leave.type}</td>
      <td>${leave.from}</td>
      <td>${leave.to}</td>
      <td class="status-${leave.status.toLowerCase()}">
        ${leave.status}
      </td>
      <td>
        ${role === "HR" && leave.status === "Pending"
          ? `<button class="action-btn approve" onclick="approve(${index})">Approve</button>
             <button class="action-btn reject" onclick="reject(${index})">Reject</button>`
          : "-"
        }
      </td>
    `;

    leaveBody.appendChild(tr);
  });
}

renderLeaves();

/* APPLY LEAVE */
document.getElementById("leaveForm")?.addEventListener("submit", e => {
  e.preventDefault();

  leaves.push({
    emp: "EMP001 - You",
    type: leaveType.value,
    from: fromDate.value,
    to: toDate.value,
    status: "Pending"
  });

  e.target.reset();
  renderLeaves();
});

/* APPROVE / REJECT */
function approve(index) {
  leaves[index].status = "Approved";
  renderLeaves();
}

function reject(index) {
  leaves[index].status = "Rejected";
  renderLeaves();
}

/* NAV */
function goBack() {
  window.history.back();
}
