var register = document.getElementById("register");
var login = document.getElementById("login");
var registor_main_box = document.getElementById("registor_main_box");
var login_main_box = document.getElementById("login_main_box");

login.onclick = function hasan() {
  login_main_box.style.display = "block";
  login_main_box.className = "animate__animated animate__slideInLeft";
  registor_main_box.style.display = "none";
};

register.onclick = function () {
  registor_main_box.style.display = "block";
  registor_main_box.className = "animate__animated animate__slideInRight";

  login_main_box.style.display = "none";
};


