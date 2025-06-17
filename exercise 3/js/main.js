// Login Validation
let mainForm = document.getElementById("login-form");
let uName = document.getElementById("uname");
let pwd = document.getElementById("pwd");
let modal = document.querySelector(".modal");

const correctCredentials = {
    uName: "Admin",
    pwd: "Password123"
}

if (mainForm) {
    mainForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (uName.value.trim() === correctCredentials.uName && pwd.value.trim() === correctCredentials.pwd) {
            window.location.href = "index.html";
        } else {
            modal.style.display = "block";
        }
    });
}

window.dismissModal = () => {
    if (modal) {
        modal.style.display = "none";
    }
}

// Sidebar & Toggle
let sidebar = document.querySelector(".nav-sidebar");
let btn_toggle_nav = document.querySelector(".btn-toggle-nav");

let rotation = 0;

let style = document.createElement("style");
style.textContent = `
    .nav-sidebar.expanded {
        width: 272px;
    }
    
    .nav-sidebar.expanded ul {
        visibility: visible;
        opacity: 1;
    }
`;
document.head.appendChild(style);

btn_toggle_nav.addEventListener("click", () => {
    rotation += 90;
    btn_toggle_nav.style.transform = `rotate(${rotation}deg)`;

    sidebar.classList.toggle("expanded");
});
