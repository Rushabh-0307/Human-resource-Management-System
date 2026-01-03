const role = localStorage.getItem("role") || "Employee";

/* MOCK PROFILE DATA */
const profile = {
  name: "John Doe",
  email: "john@test.com",
  phone: "9999999999",
  address: "New York",
  empId: "EMP001",
  role: role,
  department: "IT",
  designation: "Software Engineer",
  basic: 50000,
  allowance: 10000
};

/* LOAD DATA */
document.getElementById("name").textContent = profile.name;
document.getElementById("email").textContent = profile.email;
document.getElementById("empId").textContent = profile.empId;
document.getElementById("role").textContent = profile.role;

document.getElementById("phone").value = profile.phone;
document.getElementById("address").value = profile.address;
document.getElementById("department").value = profile.department;
document.getElementById("designation").value = profile.designation;
document.getElementById("basic").value = profile.basic;
document.getElementById("allowance").value = profile.allowance;

document.getElementById("total").textContent =
  profile.basic + profile.allowance;

/* EDIT PERMISSIONS */
if (role === "Employee") {
  document.getElementById("department").disabled = true;
  document.getElementById("designation").disabled = true;
  document.getElementById("basic").disabled = true;
  document.getElementById("allowance").disabled = true;
}

/* SAVE */
document.getElementById("saveBtn").onclick = () => {
  alert("Profile updated successfully (demo).");
};

/* PROFILE PIC */
document.getElementById("changePicBtn").onclick = () =>
  document.getElementById("picInput").click();

document.getElementById("picInput").onchange = e => {
  const file = e.target.files[0];
  if (file) {
    document.getElementById("profilePic").src =
      URL.createObjectURL(file);
  }
};

function goBack() {
  window.history.back();
}
