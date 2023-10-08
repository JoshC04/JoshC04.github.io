const hideBar = () => {
    document.getElementById("main-nav").classList.toggle("hidden");
}

window.onload = () => {
    document.getElementById("home-img").onclick = hideBar;
}