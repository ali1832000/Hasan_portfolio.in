// text box coding
function textbox() {
    var box_hover = document.getElementById("box_hover");
    var service_option_box = document.getElementById("service_option_box");
    box_hover.onmouseover = function () {
        service_option_box.style.display = "block"
        box_hover.onmouseout = function () {
          service_option_box.style.display = "none"
           
        }
    }

    service_option_box.onmouseover = function()
    {
        service_option_box.style.display = "block";
        
        service_option_box.onmouseout = function()
        {
            service_option_box.style.display = "none";
        }
    }
}

textbox();


// logo icon coding
function logobox() {
    var whatsapp_box = document.getElementById("whatsapp_box");
    var wlogo = document.getElementById("wlogo");
    wlogo.onmouseover = function () {


        whatsapp_box.style.display = "block"
        wlogo.onmouseout = function () {
            whatsapp_box.style.display = "none";
        }
    }


    var contect_box = document.getElementById("contect_box");
    var clogo = document.getElementById("clogo");
    clogo.onmouseover = function () {
        contect_box.style.display = "block"
        clogo.onmouseout = function () {
            contect_box.style.display = "none"
        }

    }

    var mail_box = document.getElementById("mail_box");
    var elogo = document.getElementById("elogo");
    elogo.onmouseover = function () {
        mail_box.style.display = "block"
        elogo.onmouseout = function () {
            mail_box.style.display = "none"
        }
    }
}
logobox();