const burgerMenu = document.querySelector(".burger-menu-header");
const span1 = document.querySelector(".span1-burger");
const span2 = document.querySelector(".span2-burger");
const span3 = document.querySelector(".span3-burger");
const asideBurger = document.querySelector("#aside-burger-id");

burgerMenu.addEventListener("click", animateBurger);

function animateBurger(){
    span1.classList.toggle("activespan1-burger");
    span2.classList.toggle("activespan2-burger");
    span3.classList.toggle("activespan3-burger");
    
    if(!asideBurger.classList.contains("aside-burger")){
        asideBurger.classList.add("aside-burger");
        asideBurger.style.display= "block"
    } else {
        asideBurger.classList.remove("aside-burger");
        asideBurger.style.display= "none"
    }
}

