let hamburgerClicked = false;

function hamburgerClick(){
    let navBar = document.querySelectorAll(".navigation__item");

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