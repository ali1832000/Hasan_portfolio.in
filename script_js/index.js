var w_icon = document.getElementById("w_icon");
w_icon.onmouseover = function () {
  var whatsapp = document.getElementById("whatsapp");
  whatsapp.style.display = "block";
  w_icon.onmouseout = function () {
    whatsapp.style.display = "none";
  };
};

var l_icon = document.getElementById("l_icon");
l_icon.onmouseover = function () {
  var linkedin = document.getElementById("linkedin");
  linkedin.style.display = "block";
  l_icon.onmouseout = function () {
    linkedin.style.display = "none";
  };
};

var e_icon = document.getElementById("e_icon");
e_icon.onmouseover = function () {
  var email = document.getElementById("email");
  email.style.display = "block";
  e_icon.onmouseout = function () {
    email.style.display = "none";
  };
};
