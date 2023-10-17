const hideBar = () => {
    document.getElementById("main-nav").classList.toggle("hidden");
}

let count01 = 1;

const slideshowplanes = () => {
    const currentPlane = document.querySelector(`#planes :nth-child(${count01})`);
    count01++;

    let nextPlane = currentPlane.nextElementSibling;
    console.log(nextPlane);

    if (nextPlane == null) {
        nextPlane = document.querySelector("#planes :first-child");
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

let count02 = 1;

const slideshowhelis = () => {
    const currentHeli = document.querySelector(`#helicopters :nth-child(${count02})`);
    count02++;

    let nextHeli = currentHeli.nextElementSibling;

    if (nextHeli == null) {
        nextHeli = document.querySelector("#helicopters :first-child");
        count02 = 1;
    }

    currentHeli.classList.add("slideOut");
    nextHeli.classList.add("slideIn");

    currentHeli.addEventListener("animationend", () => {
        currentHeli.classList.add("hidden");
        currentHeli.classList.remove("slideOut");
    });

    nextHeli.addEventListener("animationend", () => {
        nextHeli.classList.remove("hidden");
        nextHeli.classList.remove("slideIn");
    });
}

let count03 = 1;

const slideshowstories = () => {
    const currentStory = document.querySelector(`#seasons :nth-child(${count03})`);
    count03++;

    let nextStory = currentStory.nextElementSibling;

    if (nextStory == null) {
        nextStory = document.querySelector("#seasons :first-child");
        count03 = 1;
    }

    currentStory.classList.add("slideOut");
    nextStory.classList.add("slideIn");

    currentStory.addEventListener("animationend", () => {
        currentStory.classList.add("hidden");
        currentStory.classList.remove("slideOut");
    });

    nextStory.addEventListener("animationend", () => {
        nextStory.classList.remove("hidden");
        nextStory.classList.remove("slideIn");
    });
}

let count04 = 1;

const slideshowreplicas = () => {
    const currentReplica = document.querySelector(`#replicas :nth-child(${count04})`);
    count04++;

    let nextReplica = currentReplica.nextElementSibling;

    if (nextReplica == null) {
        nextReplica = document.querySelector("#replicas :first-child");
        count04 = 1;
    }

    currentReplica.classList.add("slideOut");
    nextReplica.classList.add("slideIn");

    currentReplica.addEventListener("animationend", () => {
        currentReplica.classList.add("hidden");
        currentReplica.classList.remove("slideOut");
    });

    nextReplica.addEventListener("animationend", () => {
        nextReplica.classList.remove("hidden");
        nextReplica.classList.remove("slideIn");
    });
}

const addConcorde = () => {
    const section = document.createElement("section");
    section.innerHTML = "Concorde - $45"
    section.classList.add("typography");

    document.getElementById("order").appendChild(section);
}

const addApache = () => {
    const section = document.createElement("section");
    section.innerHTML = "Apache - $35"
    section.classList.add("typography");

    document.getElementById("order").appendChild(section);
}

const addR44 = () => {
    const section = document.createElement("section");
    section.innerHTML = "Robinson R44 - $50"
    section.classList.add("typography");

    document.getElementById("order").appendChild(section);
}

const add747 = () => {
    const section = document.createElement("section");
    section.innerHTML = "Boeing 747 - $60"
    section.classList.add("typography");

    document.getElementById("order").appendChild(section);
}

const addBlackbird = () => {
    const section = document.createElement("section");
    section.innerHTML = "SR-71 Blackbird - $55"
    section.classList.add("typography");

    document.getElementById("order").appendChild(section);
}

const addChinook = () => {
    const section = document.createElement("section");
    section.innerHTML = "Boeing Chinook  - $30"
    section.classList.add("typography");

    document.getElementById("order").appendChild(section);
}

window.onload = () => {
    document.getElementById("home-img").onclick = hideBar;
    setInterval(slideshowplanes, 1000);
    setInterval(slideshowhelis, 1000);
    setInterval(slideshowstories, 1000);
    setInterval(slideshowreplicas, 1000);
    document.getElementById("concorde-image").onclick = addConcorde;
    document.getElementById("apache-image").onclick = addApache;
    document.getElementById("r44-image").onclick = addR44;
    document.getElementById("747-image").onclick = add747;
    document.getElementById("blackbird-image").onclick = addBlackbird;
    document.getElementById("chinook-image").onclick = addChinook;
}