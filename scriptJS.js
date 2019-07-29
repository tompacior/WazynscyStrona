let hamburgerClicked = false;
let navBar = document.querySelectorAll(".navigation__item");

function hamburgerClick(){
    if(!hamburgerClicked){
        for(let i = 0; i<navBar.length; i++){
            navBar[i].style.display = "block";
        }
        hamburgerClicked = true;
    }else{
        for(let i = 0; i<navBar.length; i++){
            navBar[i].removeAttribute("style");
        }
        hamburgerClicked = false;
    }
}
//Clear open menu//
var tomek = document.querySelectorAll(".navigation__item");
    for(let i = 0; i<tomek.length; i++){
    tomek[i].addEventListener("click", function(){
        for(let i = 0; i<tomek.length; i++){
        tomek[i].removeAttribute("style");
        hamburgerClicked = false;
}}
)}
