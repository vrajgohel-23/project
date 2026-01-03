function login() {
  let email = document.getElementById("email").value;
  let role = document.getElementById("role").value;

  if (!email) {
    document.getElementById("error").innerText = "Invalid credentials";
    return;
  }

  localStorage.setItem("user", email);
  localStorage.setItem("role", role);
  window.location.href = "dashboard.html";
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

if (localStorage.getItem("role")) {
  let role = localStorage.getItem("role");
  document.getElementById("welcome").innerText =
    "Welcome " + role.toUpperCase();

  document.getElementById("employeeDashboard").style.display =
    role === "employee" ? "block" : "none";

  document.getElementById("adminDashboard").style.display =
    role === "admin" ? "block" : "none";
}

