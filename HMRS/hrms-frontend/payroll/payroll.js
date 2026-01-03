const role = localStorage.getItem("role") || "Employee";

const employeeSelectBox = document.getElementById("employeeSelectBox");
const employeeSelect = document.getElementById("employeeSelect");
const saveBtn = document.getElementById("saveBtn");
const pageTitle = document.getElementById("pageTitle");

/* INPUTS */
const empId = document.getElementById("empId");
const nameField = document.getElementById("name");
const basic = document.getElementById("basic");
const allowance = document.getElementById("allowance");
const deduction = document.getElementById("deduction");
const total = document.getElementById("total");

/* MOCK PAYROLL DATA */
const payrollData = {
  EMP001: { name: "John Doe", basic: 50000, allowance: 10000, deduction: 2000 },
  EMP002: { name: "Jane Smith", basic: 60000, allowance: 12000, deduction: 3000 }
};

/* ROLE SETUP */
if (role === "Employee") {
  pageTitle.textContent = "My Payroll";
  loadPayroll("EMP001");

  // Employee → read only
  basic.disabled = true;
  allowance.disabled = true;
  deduction.disabled = true;
} else {
  pageTitle.textContent = "Payroll Management";
  employeeSelectBox.classList.remove("hidden");
  saveBtn.classList.remove("hidden");

  Object.keys(payrollData).forEach(id => {
    const opt = document.createElement("option");
    opt.value = id;
    opt.textContent = `${id} - ${payrollData[id].name}`;
    employeeSelect.appendChild(opt);
  });

  loadPayroll(employeeSelect.value);

  employeeSelect.onchange = () =>
    loadPayroll(employeeSelect.value);
}

/* LOAD PAYROLL */
function loadPayroll(id) {
  const data = payrollData[id];
  empId.value = id;
  nameField.value = data.name;
  basic.value = data.basic;
  allowance.value = data.allowance;
  deduction.value = data.deduction;

  calculateTotal();
}

/* CALCULATE TOTAL */
function calculateTotal() {
  total.value =
    Number(basic.value) +
    Number(allowance.value) -
    Number(deduction.value);
}

basic.oninput = allowance.oninput = deduction.oninput = calculateTotal;

/* SAVE */
saveBtn.onclick = () => {
  alert("Payroll updated successfully (demo).");
};

/* NAV */
function goBack() {
  window.history.back();
}
