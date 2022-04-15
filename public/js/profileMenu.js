const imageProfile = document.querySelector(".profileimg");
const asideProfile = document.querySelector("#menu-profile-id");

imageProfile.addEventListener("click", animateProfile);

function animateProfile () {
    if(!asideProfile.classList.contains("aside-profile")) {
        asideProfile.classList.add("aside-profile");
        asideProfile.style.display = "block"
    } else {
        asideProfile.classList.remove("aside-profile");
        asideProfile.style.display = "none"
    }
}