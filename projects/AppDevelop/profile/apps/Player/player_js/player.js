var current_user = sessionStorage.getItem("user");
var video = document.getElementById("video_player");
var play_btn = document.getElementById("play_btn");


// play btn coding
play_btn.onclick = function () {
    if (play_btn.className == "fa-solid fa-circle-play") {
        video.play();
        play_btn.className = "fa-solid fa-circle-pause";
    }
    else if (play_btn.className == "fa-solid fa-circle-pause") {
        video.pause();
        play_btn.className = "fa-solid fa-circle-play";
    }
    else if (play_btn.className = "fa-solid fa-rotate-left") {
        video.play();
        play_btn.className = "fa-solid fa-circle-pause";
    }

}


// progress bar coding
video.ontimeupdate = function () {
    var t_duration = this.duration;
    var c_duration = this.currentTime;
    var p_bar = document.getElementById("progress_bar");
    var video_timing = document.getElementById("video_timing");
    var sec = c_duration - parseInt(c_duration / 60) * 60;
    var t_sec = t_duration - parseInt(t_duration / 60) * 60;
    video_timing.innerHTML = parseInt(c_duration / 60) + ":" + parseInt(sec) + " / " + parseInt(t_duration / 60) + ":" + parseInt(t_sec);
    var slide_per = c_duration * 100 / t_duration;
    p_bar.style.width = slide_per + "%";

    if (c_duration == t_duration) {
        play_btn.className = "fa-solid fa-rotate-left";
        video.pause();

    }

}


// open & close add video box.
var open_video_box_btn = document.getElementById("open_video_box_btn");
open_video_box_btn.onclick = function () {
    var add_video_box = document.getElementById("add_video_box");
    if (open_video_box_btn.className == "fas fa-plus-circle") {
        add_video_box.style.display = "block";
        open_video_box_btn.className = "fa-solid fa-circle-xmark";
        add_video_box.className = "animate__animated animate__slideInRight";

    }

    else if (open_video_box_btn.className == "fa-solid fa-circle-xmark") {
        add_video_box.style.display = "none";
        open_video_box_btn.className = "fas fa-plus-circle";

    }

}


// add video in local storage
var add_video_btn = document.getElementById("add_video_btn");
add_video_btn.onclick = function () {
    var v_name = document.getElementById("video_name");
    var v_link = document.getElementById("video_link");
    if (v_name.value != "" && v_link.value != "") {
        var v_obj = { name: v_name.value, link: v_link.value };
        var v_text = JSON.stringify(v_obj);
        localStorage.setItem(current_user + "video" + v_name.value, v_text);
    }
}



// fetch all vieos from local stogare
function load_video() {
    var i;
    for (i = 0; i < localStorage.length; i++) {
        var all_keys = localStorage.key(i);
        if (all_keys.match(current_user+"video")) {
            var v_data = localStorage.getItem(all_keys);
            var video_obj = JSON.parse(v_data);

            var div = document.createElement("DIV");
            div.setAttribute("id", "main_video_box");

            var p = document.createElement("P");
            p.setAttribute("id", "playlist_video_name");
            p.className = "all_player_box";
            p.innerHTML = video_obj.name;

            var play_btn = document.createElement("BUTTON");
            play_btn.setAttribute("type", "button");
            play_btn.setAttribute("id", "video_play_btn");
            play_btn.setAttribute("url", video_obj.link);
            play_btn.className = "v_play_btn";
            play_btn.innerHTML = "Play";

            var del_btn = document.createElement("BUTTON");
            del_btn.setAttribute("type", "button");
            del_btn.setAttribute("id", "video_delete_btn");
            del_btn.innerHTML = "Delete";
            del_btn.className = "delete_btn";

            div.appendChild(p);
            div.appendChild(play_btn);
            div.appendChild(del_btn);

            var all_v = document.getElementById("bottom");
            all_v.appendChild(div)
        }
    }
}
load_video()



// onclick video play buttom coding
function play_video() {
    var all_v_play_btn = document.getElementsByClassName("v_play_btn");
    var i;
    for (i = 0; i < all_v_play_btn.length; i++) {
        all_v_play_btn[i].onclick = function () {
            clear();
            var v_url = this.getAttribute("url");
            var src_tag = document.getElementById("video_src");
            src_tag.setAttribute("src", v_url);
            video.load();
            video.play();
            play_btn.className = "fa-solid fa-circle-pause";
            this.innerHTML = "Playing...";

        }
    }

}
play_video();

function clear() {
    var all_v_play_btn = document.getElementsByClassName("v_play_btn");
    var i;
    for (i = 0; i < all_v_play_btn.length; i++) {
        all_v_play_btn[i].innerHTML = "Play";
    }
}



// next btn coding
function next_button() {
    var next_btn = document.getElementById("right_btn");
    next_btn.onclick = function () {
        var all_play_btn = document.getElementsByClassName("v_play_btn");
        var i;
        for (i = 0; i < all_play_btn.length; i++) {
            if (all_play_btn[i].innerHTML == "Playing...") {
                var next_element = all_play_btn[i].parentElement.nextSibling;
                var next_play_btn = next_element.getElementsByClassName("v_play_btn")[0];
                next_play_btn.click();
                return false;
            }
        }

    }
}
next_button()


// previous btn coding
function previous_button() {
    var previous_btn = document.getElementById("left_btn");
    previous_btn.onclick = function () {
        var all_play_btn = document.getElementsByClassName("v_play_btn");
        var i;
        for (i = 0; i < all_play_btn.length; i++) {
            if (all_play_btn[i].innerHTML == "Playing...") {
                var previous_element = all_play_btn[i].parentElement.previousSibling;
                var previous_play_btn = previous_element.getElementsByClassName("v_play_btn")[0];
                previous_play_btn.click();
                return false;
            }
        }

    }
}
previous_button()



// Delete button coding
function delete_button() {
    var all_del_btn = document.getElementsByClassName("delete_btn");
    var i;
    for (i = 0; i < all_del_btn.length; i++) {
        all_del_btn[i].onclick = function () {
            var parent = this.parentElement;
            var video_name = parent.getElementsByTagName("P")[0].innerHTML;
            localStorage.removeItem(current_user + "video" + video_name);
            parent.className = "animate__animated animate__bounceOut";
            setTimeout(() => {
                parent.remove();
            }, 1000);
        }
    }
}
delete_button()



// volume button coding
function volume() {
    var vol_icon = document.getElementById("volume");
    vol_icon.onclick = function () {
        var vol_control = document.getElementById("vol_control");
        if (vol_control.style.display == "none") {
            vol_control.style.display = "block";
            vol_control.oninput = function () {
                video.volume = this.value;
            }
        }
        else {
            vol_control.style.display = "none"
        }

    }
}
volume()



// progress box and progress bar coding////forward and backward coding
var P_box = document.getElementById("progress_box");
P_box.onclick = function (event) {
    var per = event.offsetX / this.offsetWidth;
    video.currentTime = per * video.duration;

}



// full screen coding
var full = document.getElementById("full_screen");
full.onclick = function () {
    video.requestFullscreen();
}


// speed box coding
function speed() {
    var speed_icon = document.getElementById("speed_icon");
    speed_icon.onclick = function () {
        var speed_control = document.getElementById("speed_control");
        if (speed_control.style.display == "none") {
            speed_control.style.display = "block";
            speed_control.oninput = function () {
                video.playbackRate = this.value;
            }
        }
        else {
            speed_control.style.display = "none"
        }

    }
}
speed()



//search coding
function search() {
    var search = document.getElementById("search");
    search.oninput = function () {
        var all_player_box = document.getElementsByClassName("all_player_box")
        var i;
        for (i = 0; all_player_box.length; i++) {
            if (all_player_box[i].innerHTML.toLowerCase().match(search.value.toLowerCase())) {
                all_player_box[i].parentElement.style.display = "block"
            }
            else {
                all_player_box[i].parentElement.style.display = "none";
            }

        }

    }

}
search()
