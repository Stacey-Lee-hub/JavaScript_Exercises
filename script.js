let profileCard = document.getElementsByClassName("profileCard");
let profileImage = document.getElementById("profileImage");
let profileName = document.getElementById("profileName");
let profileRole = document.getElementById("profileRole");
let profileBio = document.getElementById("profileBio");
let updateNameBtn = document.getElementById("updateNameBtn");
let updateRoleBtn = document.getElementById("updateRoleBtn");
let toggleStatusBtn = document.getElementById("toggleStatusBtn");

updateNameBtn.addEventListener("click", () => {
    user = window.prompt("Enter new username:");
    if (user !== "") {
        profileName.textContent = user.trim();
    }
})

updateRoleBtn.addEventListener("click", () => {
    role = window.prompt("Enter new username:");
    if (role !== "") {
        profileRole.textContent = role.trim();
    }
})

toggleStatusBtn.addEventListener("click", () => {
    profileImage.classList.toggle("active-status");
})

