let btn_toggle_nav = document.querySelector(".btn-toggle-nav");
let sidebar = document.querySelector(".nav-sidebar");

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