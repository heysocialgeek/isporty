const filterP = document.querySelector("#filter-p");
const filterContainer = document.querySelector(".filter-container");

filterP.addEventListener("click", () => {
    if(filterContainer.classList.contains("hidden")){
        filterContainer.classList.remove("hidden")
    } else {
        filterContainer.classList.add("hidden")
    }
})

