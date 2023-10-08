const quoteIt = () => {
    const thisQuote = document.querySelector("#quotes-display :not(.hidden)");
    thisQuote.classList.add("hidden");

    let nextQuote = thisQuote.nextElementSibling;
    if(nextQuote == null) {
        nextQuote = document.querySelector("#quotes-display :first-child");
    }

    nextQuote.classList.remove("hidden");
}

let colors = ["red", "orange", "yellow", "green", "blue", "purple"];

const drawRainbow = () => {
    const appender = document.querySelector("#color-organizer");

    for(let i = 0; i < colors.length; i++) {
        setTimeout(() => {
            const p = document.createElement("p");
            p.classList.add(colors[i]);
            const txt = document.createTextNode("Hello world! I am blank text!");
            p.appendChild(txt);
            appender.appendChild(p);

            if(i == colors.length-1) {
                const pot = document.createElement("img");
                pot.src = "../../images/potogold.png";
                pot.classList.add("img-editor");
                appender.append(pot);
            }

        }, 1000 * i);  
    }
}

window.onload = () => {
    setInterval(quoteIt, 1500);
    document.querySelector("#rainbow-button").onclick = drawRainbow;
}