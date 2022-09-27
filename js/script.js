document.getElementById("logo-1").addEventListener("click", open_close_menu);


var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("logo-1");
var body = document.getElementById("body");
const img = document.getElementById('logo-1');
var pr_open = document.getElementsByClassName("profile")


function open_close_menu(){

    if(side_menu.classList.toggle("menu_side_move")){
        img.setAttribute("src","img/Hotelia horizontal blanco.svg");
        img.style.width="130px";
    }

    else{
        img.setAttribute("src","img/hotelia campana.svg");
        img.style.width="40px";
    }

    body.classList.toggle("body_move"); 

}
