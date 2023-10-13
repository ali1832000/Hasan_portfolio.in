// add new contect box

var add_icon = document.getElementById("new_contect");
add_icon.onclick = function () {
    var bg = document.getElementById("contect_bg");
    bg.style.display = "block";
}
// altet box coding
if (sessionStorage.getItem("user") == null) {
    window.location.replace("../../../../html/index.html");
}

else {
    var current_user = sessionStorage.getItem("user");

    // prifle image coding
    function profile()
    {
    var profile_pic = document.getElementById("profile_pic");
    var url = localStorage.getItem(current_user+"image");
    profile_pic.style.backgroundImage = "url("+url+")";
    profile_pic.style.backgroundSize = "cover";
    profile_pic.style.backgroundPosition = "center";
    }
    profile()

    // open new contect box
    var add_icon = document.getElementById("new_contect");
    add_icon.onclick = function () {
        var bg = document.getElementById("contect_bg");
        bg.style.display = "block";
    }
    // close contect box
    var close = document.getElementById("close");
    close.onclick = function () {
        var bg = document.getElementById("contect_bg");
        bg.style.display = "none";
    }

    // add contect in local stogare
    var add = document.getElementById("add");
    add.onclick = function () {
        var c_name = document.getElementById("c_name");
        var c_num = document.getElementById("c_num");
        if (c_name.value != "" && c_num.value != "") {
            var new_contect = { name: c_name.value, number: c_num.value };
            var json_text = JSON.stringify(new_contect);
            localStorage.setItem(current_user + "_contect" + c_name.value, json_text)
        }
        else {
            // c_name.style.borderBlockColor = "red";
            // c_num.style.borderBlockColor = "red";
            alert("Please enter name and phone no.")
            return false;

        }
    }
    // main box coding
    function all_contect() {
        var i;
        for (i = 0; i < localStorage.length; i++) {
            var all_keys = localStorage.key(i);
            if (all_keys.match(sessionStorage.getItem("user") + "_contect")) {
                var json_text = localStorage.getItem(all_keys);
                var obj = JSON.parse(json_text);

                var contect_box = document.createElement("DIV");
                contect_box.setAttribute("id", "contect");

                var name_p = document.createElement("P");
                name_p.setAttribute("class", "contect_name")

                var name_i = document.createElement("I");
                name_i.setAttribute("class", "fas fa-user");

                var tool = document.createElement("DIV");
                tool.setAttribute("id", "tool");

                var edit_i = document.createElement("I");
                edit_i.setAttribute("class", "fas fa-edit edit");

                var del_i = document.createElement("I");
                del_i.setAttribute("class", "fas fa-trash del");

                var line = document.createElement("HR");
                line.setAttribute("color", "purple");
                line.setAttribute("width", "75%");
                line.setAttribute("size", "2");


                var num_p = document.createElement("P");
                var num_icon = document.createElement("I")
                num_icon.setAttribute("class", "fas fa-mobole-alt")

                name_p.appendChild(name_i);
                name_p.innerHTML += " " + obj.name;

                tool.appendChild(edit_i);
                tool.appendChild(del_i);

                num_p.appendChild(num_icon);
                num_p.innerHTML += "" + obj.number;

                contect_box.appendChild(name_p);
                contect_box.appendChild(tool);
                contect_box.appendChild(line);
                contect_box.appendChild(num_p);

                var all_contect_box = document.getElementById("all_contect_box");
                all_contect_box.appendChild(contect_box);


            }

        }
    }
    all_contect();
    // search box coding
    var search = document.getElementById("search");
    search.oninput = function () {
        var all_contect_name = document.getElementsByClassName("contect_name");
        var i;
        for (i = 0; i < all_contect_name.length; i++) {
            if (all_contect_name[i].innerHTML.toUpperCase().match(search.value.toUpperCase())) {
                all_contect_name[i].parentElement.style.display = "block";
            }
            else {
                all_contect_name[i].parentElement.style.display = "none";

            }
        }
    }
    // delete btn coding
    function del() {
        var del = document.getElementsByClassName("del");
        var i;
        for (i = 0; i < del.length; i++) {
            del[i].onclick = function () {
                var parent = this.parentElement.parentElement;
                var p_ele = parent.getElementsByClassName("contect_name")[0];
                var username = p_ele.innerHTML.replace('<i class="fas fa-user"></i>', '');

                localStorage.removeItem(current_user + "_contect" + username.trim());
                parent.className = "animate__animated animate__bounceOut";
                setTimeout(() => {
                    parent.remove();
                }, 1000);

            }
        }
    }
    del();

    //edit icon coding /// number option kaam nhi kar rha 
    function edit() {
        var edit_icon = document.getElementsByClassName("edit");
        var i;
        for (i = 0; i < edit_icon.length; i++) {
            edit_icon[i].onclick = function () {
                var parent = this.parentElement.parentElement;
                var para = parent.getElementsByTagName("P");
                var name = para[0].innerHTML.replace('<i class="fas fa-user"></i>', "".trim());
                var number = para[1].innerHTML.replace('<i class="fas fa-mobile-alt"></i>', "".trim());
                var c_name = document.getElementById("c_name");
                var c_num = document.getElementById("c_num");

                
                var add_btn = document.getElementById("new_contect");
                var c_heading = document.getElementById("c_heading");
                var add = document.getElementById("add");
                var close = document.getElementById("close");
                c_name.value = name;
                c_num.value = number;
                c_heading.innerHTML = "Edit Contect";
                add.innerHTML = "Update";
                add_btn.click();
                close.style.display = "none";
                localStorage.removeItem(current_user+"_contect"+name);
            }
        }
    }
    edit();

}

