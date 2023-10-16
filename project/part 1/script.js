const hideBar = () => {
    document.getElementById("main-nav").classList.toggle("hidden");
}

let count01 = 1;

const slideshowplanes = () => {
    const currentPlane = document.querySelector(`#planes-div:nth-child(${count01})`);
    count01++;

    let nextPlane = currentPlane.nextElementSibling;

    if(nextPlane == null) {
        nextPlane = document.querySelector("#planes-div:first-child");
        count01 = 1;
    }

    currentPlane.classList.add("slideOut");
    nextPlane.classList.add("slideIn");

    currentPlane.addEventListener("animationend", () => {
        currentPlane.classList.add("hidden");
        currentPlane.classList.remove("slideOut");
    });

    nextPlane.addEventListener("animationend", () => {
        nextPlane.classList.remove("hidden");
        nextPlane.classList.remove("slideIn");
    });
}

window.onload = () => {
    document.getElementById("home-img").onclick = hideBar;
    setInterval(slideshowplanes, 1000);
}