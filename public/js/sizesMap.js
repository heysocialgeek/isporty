'use strict';

const sizesTable = document.querySelector(".table-sizes");
const overlay = document.querySelector(".overlay");
const spanModal = document.querySelector(".span-sizes");

spanModal.addEventListener("click", function (){
    sizesTable.classList.remove("hidden");
    overlay.classList.remove("hidden")
});

const closeModal = function () {
    sizesTable.classList.add("hidden");
    overlay.classList.add("hidden")
}

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function(e){
    let key = e.key
    if(key === "Escape" && !sizesTable.classList.contains("hidden")){
        closeModal()
    }
})