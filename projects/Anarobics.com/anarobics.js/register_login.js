// // register validation coding
var r_form = document.getElementById("r_form");
r_form.onsubmit = function () {
  var r_name = document.getElementById("r_name").value;
  var r_number = document.getElementById("r_number").value;
  var r_email = document.getElementById("r_email").value;
  var r_pass = document.getElementById("r_pass").value;

  var user_object_data = {
    username: r_name,
    phone: r_number,
    email: r_email,
    password: r_pass,
  };
  var user_text_data = JSON.stringify(user_object_data);

  if (r_name != "" && r_number != "" && r_email != "" && r_pass != "") {
    localStorage.setItem(r_email, user_text_data);

    var r_btn = document.getElementById("r_btn");
    r_btn.style.background = "green";
    r_btn.innerHTML =
      "<i class='fa-regular fa-circle-check'></i>  Register Successful..";
    r_btn.style.fontSize = "0.80rem";

    setTimeout(() => {
      var registor_main_box = document.getElementById("registor_main_box");
      registor_main_box.style.display = "none";
      r_btn.style.background =
        "linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 0.5046393557422969) 50%, rgba(252, 176, 69, 1) 100%)";
      r_btn.innerHTML = "Register Now";
      r_btn.style.fontSize = "1.40rem";
      r_form.reset();
    }, 1500);
  }
  return false;
};

// start email validation coding
var email_input = document.getElementById("r_email");
email_input.onchange = function () {
  var r_email = document.getElementById("r_email").value;
  var email_massage = document.getElementById("email_massage");
  var r_btn = document.getElementById("r_btn");

  if (localStorage.getItem(r_email) != null) {
    email_massage.style.display = "block";
    email_input.style.borderBottomColor = "red";
    r_btn.disabled = true;
    r_btn.style.background = "#ccc";

    email_input.onclick = function () {
      email_input.value = "";
      email_input.style.borderColor = "black";
      r_btn.disabled = false;
      r_btn.style.background =
        "linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 0.5046393557422969) 50%, rgba(252, 176, 69, 1) 100%)";
      email_massage.style.display = "none";
    };
  }
};

// // login validation coding
var l_form = document.getElementById("l_form");
l_form.onsubmit = function () {
  var l_email = document.getElementById("l_email").value;
  var l_pass = document.getElementById("l_pass").value;
  var email_login_war = document.getElementById("email_login_war");
  var pass_login_war = document.getElementById("pass_login_war");
  var email_input = document.getElementById("l_email");

  if (localStorage.getItem(l_email) == null) {
    email_login_war.style.display = "block";

    email_input.onclick = function () {
      email_input.value = "";
      email_login_war.style.display = "none";
    };
  } else {
    var l_text_data = localStorage.getItem(l_email);
    var obj_data = JSON.parse(l_text_data);

    //  object banate time jo  property banai h usi property ka nam likhna h jaide email ya password;
    var object_ki_property_ki_email = obj_data.email;
    var object_ki_property_ka_password = obj_data.password;
    if (l_email == object_ki_property_ki_email) {
      if (l_pass == object_ki_property_ka_password)
       {
        sessionStorage.setItem("user", l_email.value);

        window.open("section_page/classes.html");
        
        var login_main_box = document.getElementById("login_main_box");
        login_main_box.style.display = "none";
      }
      else {
        var pass_input = document.getElementById("l_pass");
        pass_login_war.style.display = "block";

        pass_input.onclick = function () {
          pass_input.value = "";
          pass_login_war.style.display = "none";
        };
      }
    }
  }
  return false;
};
