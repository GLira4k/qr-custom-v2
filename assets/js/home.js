const btn = document.getElementById("menu-button");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden")
});