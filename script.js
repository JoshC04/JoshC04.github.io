const toggle = () => {
    document.getElementById("main-content").classList.toggle("hidden");
    document.getElementById("project-content").classList.toggle("hidden");
}

window.onload = () => {
    document.getElementById("weekly-assignments").onclick = toggle;
    document.getElementById("main-project").onclick = toggle;
}