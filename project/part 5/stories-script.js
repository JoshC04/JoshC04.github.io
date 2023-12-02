const hideBar = () => {
    document.getElementById("main-nav").classList.toggle("hidden");
}

const getStories = async () => {
    try {
        const response = await fetch("https://joshc04.github.io/project/part5/stories.json");
        const stories = await response.json();
        return stories;
    } catch (error) {
        console.log(error);
    }
};

const displayStories = async () => {
    const stories = await getStories();
    const storiesDisplay = document.getElementById("stories-main");

    stories.forEach((story) => {
        console.log(story);
        storiesDisplay.appendChild(getStoriesContent(story));
    });
};

const getStoriesContent = (story) => {
    const section = document.createElement("section");
    section.classList.add("season");

    const div = document.createElement("div");
    div.classList.add("inner-div");
    section.appendChild(div);

    const a = document.createElement("a");
    a.classList.add("stories-a");
    a.href = story.link;
    div.appendChild(a);

    const h1 = document.createElement("h1");
    h1.classList.add("typography");
    h1.innerHTML = story.title;
    a.appendChild(h1);

    const description = document.createElement("p");
    description.classList.add("typography");
    description.innerHTML = story.description;
    div.appendChild(description);

    const img = document.createElement("img");
    img.classList.add("stories-img");
    img.src = story.image;
    section.appendChild(img);

    return section;
};

window.onload = () => {
    document.getElementById("home-img").onclick = hideBar;
    displayStories();
};