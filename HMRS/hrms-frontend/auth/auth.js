const tabSignIn = document.getElementById("tabSignIn");
const tabSignUp = document.getElementById("tabSignUp");

const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");

/* TAB SWITCHING */
tabSignIn.onclick = () => {
  tabSignIn.classList.add("active");
  tabSignUp.classList.remove("active");
  signInForm.classList.add("active");
  signUpForm.classList.remove("active");
};

tabSignUp.onclick = () => {
  tabSignUp.classList.add("active");
  tabSignIn.classList.remove("active");
  signUpForm.classList.add("active");
  signInForm.classList.remove("active");
};

/* SIGN UP */
signUpForm.addEventListener("submit", e => {
  e.preventDefault();

  const password = signUpForm.querySelector("input[type='password']").value;
  const role = signUpForm.querySelector("select").value;

  const error = document.getElementById("signUpError");
  const success = document.getElementById("signUpSuccess");

  error.textContent = "";
  success.textContent = "";

  const strongPassword =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

  if (!strongPassword) {
    error.textContent = "Password is not strong enough.";
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

/* SIGN IN (CONNECTED) */
signInForm.addEventListener("submit", e => {
  e.preventDefault();

  const email =
    signInForm.querySelector("input[type='email']").value;
  const password =
    signInForm.querySelector("input[type='password']").value;

  const error = document.getElementById("signInError");
  error.textContent = "";

  /* DEMO USERS */
  if (email === "hr@test.com" && password === "Test@123") {
    localStorage.setItem("role", "HR");
    window.location.href = "../dashboard/dashboard.html";
  } 
  else if (email === "emp@test.com" && password === "Test@123") {
    localStorage.setItem("role", "Employee");
    window.location.href = "../dashboard/dashboard.html";
  } 
  else {
    error.textContent = "Invalid email or password.";
  }
});
