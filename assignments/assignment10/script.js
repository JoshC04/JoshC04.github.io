class costume {

    constructor(title, price, age, rating, pic) {
        this.title = title;
        this.price = price;
        this.age = age;
        this.rating = rating;
        this.pic = pic;
    }

    get details() {
        const section = document.createElement("section");
        section.classList.add("inner");

        const img = document.createElement("img");
        img.src = this.pic;
        img.classList.add("image");
        section.appendChild(img);

        const ul = document.createElement("ul");
        ul.classList.add("text", "hover", "decorate");
        section.appendChild(ul);

        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        ul.append(h3);

        const priceLi = this.getInfo(("Price: $"+this.price));
        ul.append(priceLi);

        const ageLi = this.getInfo(("Age: "+this.age));
        ul.append(ageLi);

        const ratingLi = this.getInfo(("Rating: "+this.rating+" Stars"));
        ul.append(ratingLi);

        return section;
    }

    getInfo(info) {
        const li = document.createElement("li");
        li.textContent = info;
        return li;
    }
}

const addCostumes = () => {
    const list = document.getElementById("container");
    const costumes = [];

    costumes.push(new costume("Beetlejuice", 45.00, "Adult", 3, "../../images/spooky-beetlejuice.webp"));
    costumes.push(new costume("Ghostbuster", 35.00, "Adult", 4, "../../images/spooky-ghostbuster.webp"));
    costumes.push(new costume("Maleficent", 50.00, "Adult", 5, "../../images/spooky-maleficent.webp"));
    costumes.push(new costume("Ghost", 25.00, "Adult", 1, "../../images/spooky-ghost.webp"));
    costumes.push(new costume("Clown", 65.00, "Adult", 5, "../../images/spooky-clown.jpg"));
    costumes.push(new costume("Pumpkin", 30.00, "Child", 2, "../../images/spooky-pumpkin.webp"));

    costumes.forEach(costume => {
        list.appendChild(costume.details);
    })
}

window.onload = () => {
    addCostumes();
}