const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";

    try {
        const response = await fetch(url);
        const movies = await response.json();
        return movies;
    } catch (error) {
        console.log(error);
    }
};

const displayMovies = async () => {
    const movies = await getMovies();
    const moviesDisplay = document.getElementById("container");

    movies.forEach((movie) => {
        moviesDisplay.appendChild(getMoviesContent(movie));
    });
};

const getMoviesContent = (movie) => {
    const section = document.createElement("section");
    section.classList.add("movie-decorator", "movie-decorator-media");

    const img = document.createElement("img");
    img.src = movie.img;
    img.classList.add("img-decorator");
    section.appendChild(img);

    const innerSection = document.createElement("section");
    section.appendChild(innerSection);

    const h2 = document.createElement("h2");
    h2.innerHTML = movie.title;
    innerSection.appendChild(h2);

    const ul = document.createElement("ul");
    innerSection.appendChild(ul);
    ul.appendChild(getLi(`<b>Director:</b> `+movie.director));
    ul.appendChild(getLi(`<b>Actors:</b> `+movie.actors));
    ul.appendChild(getLi(`<b>Year Released:</b> `+movie.year));
    ul.appendChild(getLi(`<b>Genres:</b> `+movie.genres));
    ul.appendChild(getLi(movie.description));

    return section;
};

const getLi = (data) => {
    const li = document.createElement("li");
    li.innerHTML = data;
    return li;
};

window.onload = () => displayMovies();