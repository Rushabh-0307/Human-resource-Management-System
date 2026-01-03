/* =========================
   TAB SWITCHING
========================= */

const tabSignIn = document.getElementById("tabSignIn");
const tabSignUp = document.getElementById("tabSignUp");

const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");

tabSignIn.addEventListener("click", () => {
  tabSignIn.classList.add("active");
  tabSignUp.classList.remove("active");

  signInForm.classList.add("active");
  signUpForm.classList.remove("active");
});

tabSignUp.addEventListener("click", () => {
  tabSignUp.classList.add("active");
  tabSignIn.classList.remove("active");

  signUpForm.classList.add("active");
  signInForm.classList.remove("active");
});

/* =========================
   SIGN UP (DEMO)
========================= */

if (signUpForm) {
  signUpForm.addEventListener("submit", e => {
    e.preventDefault();

    const password =
      signUpForm.querySelector("input[type='password']").value;
    const role =
      signUpForm.querySelector("select").value;

    const error = document.getElementById("signUpError");
    const success = document.getElementById("signUpSuccess");

    error.textContent = "";
    success.textContent = "";

    const strongPassword =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

    if (!strongPassword) {
      error.textContent = "Password must be strong.";
      return;
    }

    if (!role) {
      error.textContent = "Please select a role.";
      return;
    }

    success.textContent =
      "Registered successfully! Please verify your email.";

    signUpForm.reset();
  });
}

/* =========================
   SIGN IN (FINAL & CONNECTED)
========================= */

if (signInForm) {
  signInForm.addEventListener("submit", e => {
    e.preventDefault();

    const email =
      signInForm.querySelector("input[type='email']").value;
    const password =
      signInForm.querySelector("input[type='password']").value;

    const error = document.getElementById("signInError");
    error.textContent = "";

    /* ===== DEMO USERS ===== */

    // HR / ADMIN LOGIN
    if (email === "hr@test.com" && password === "Test@123") {
      localStorage.setItem("role", "HR");

      // 👉 Redirect to HR Dashboard
      window.location.href = "../dashboard/hr-dashboard.html";
      return;
    }

    // EMPLOYEE LOGIN
    if (email === "emp@test.com" && password === "Test@123") {
      localStorage.setItem("role", "Employee");

      // 👉 Redirect to Employee Dashboard
      window.location.href = "../dashboard/dashboard.html";
      return;
    }

    // INVALID CREDENTIALS
    error.textContent = "Invalid email or password.";
  });
}
