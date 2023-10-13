// start sign up coding
var signup_fom = document.getElementById("signup_frm");

signup_fom.onsubmit = function () {
    var user = btoa(document.getElementById("username").value);
    var email = btoa(document.getElementById("email").value);
    var phone = btoa(document.getElementById("phone").value);
    var pass = btoa(document.getElementById("password").value);

    var user_object_data = { username:user , email:email , phone:phone , password:pass };
    var user_text_data = JSON.stringify(user_object_data);

    if (user != ""  && email != ""  && pass != ""  && phone != "") {
        localStorage.setItem(email , user_text_data);
        
        var sign_btn = document.getElementById("sign_btn");
        sign_btn.style.background = "green";
        sign_btn.style.color = "white";
        sign_btn.innerHTML = "<i class='fa-regular fa-circle-check'></i> Sign up Successful !";

        setTimeout(() => {
            sign_btn.style.background = "linear-gradient(to right, #f7797d, #FBD786, #C6FFDD)";
            sign_btn.style.color ="black";
            sign_btn.innerHTML = "Sign up";
            signup_fom.reset();
        }, 3000);

        return false;
    }

}

// end sign up coding


// start email validation coding
var email_input = document.getElementById("email");
email_input.onchange = function()
{
    var email = btoa(document.getElementById("email").value);
    var warning = document.getElementById("email_notice");
    var sign_btn = document.getElementById("sign_btn");


    if(localStorage.getItem(email) !=null)
    {
       warning.style.display = "block";
       email_input.style.borderBottomColor = "red";
       sign_btn.disabled = true;
       sign_btn.style.background = "#ccc";


       email_input.onclick = function()
       {
        email_input.value = "";
        email_input.style.borderBottomColor = "#ccc";
        sign_btn.disabled = false;
        sign_btn.style.background = "linear-gradient(to right, #f7797d, #FBD786, #C6FFDD)";
        warning.style.display = "none";
       }

    }
}

// end email validation coding



// start login coding
var login_frm = document.getElementById("login_frm");
login_frm.onsubmit = function()
{
    var email = document.getElementById("login_email");
    var password = document.getElementById("login_password");
    var login_email_war = document.getElementById("login_email_warning");
    var login_password_war = document.getElementById("login_password_warning");
   if(localStorage.getItem(btoa(email.value)) == null)
   {
     login_email_war.style.display = "block";
     email.style.borderBottomColor = "red";

     email.onclick = function()
   {
    email.value = "";
    login_email_war.style.display = "none";
    email.style.borderBottomColor = "#ccc";
   }

   }
   else
   {
     var text_data = localStorage.getItem(btoa(email.value));
     var obj_data = JSON.parse(text_data);
     var correct_email = obj_data.email;
     var correct_password = obj_data.password;

     if(btoa(email.value) == correct_email)
     {
        if(btoa(password.value) == correct_password)
        {
           sessionStorage.setItem("user", btoa(email.value));
           window.location.replace("profile/profile.html"); 
        }
        else
        {
            login_password_war.style.display = "block";
            password.style.borderBottomColor = "red";
       
            password.onclick = function()
          {
           password.value = "";
           login_password_war.style.display = "none";
           password.style.borderBottomColor = "#ccc";
          }
       
        }
     }
   }
return false;
}



// end login coding