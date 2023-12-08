const hideBar = () => {
  document.getElementById("main-nav").classList.toggle("hidden");
};

const getStories = async () => {
  try {
    const response = await fetch("api/stories");
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

const resetForm = () => {
  const form = document.getElementById("story-form");
  form.reset();
  form._id.value = -1;
};

const showHideAdd = (e) => {
  e.preventDefault();
  document.querySelector("#story-form-container").classList.remove("hidden");
  document.getElementById("edit-story-title").innerHTML = "Add Story";
  resetForm();
};

const displayAddError = () => {
  const errorDiv = document.getElementById("story-form-container");

  const error = document.createElement("h2");
  error.innerHTML = "Error adding story. Please try again.";
  error.classList.add("typography");
  errorDiv.appendChild(error);
};

window.onload = () => {
  document.getElementById("home-img").onclick = hideBar;
  document.getElementById("add-story-btn").onclick = showHideAdd;
  document.querySelector(".close").onclick = () => {
    document.querySelector("#story-form-container").classList.add("hidden");
  };
  displayStories();
};
