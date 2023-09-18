const Show = () => {
    let toggle = document.getElementById("toggle-img");
    toggle.classList.remove("image-hide");
};

const Hide = () => {
    let toggle = document.getElementById("toggle-img");
    toggle.classList.add("image-hide");
};

const Animate = () => {
    let toggle = document.getElementById("emoji");
    toggle.classList.add("animate-info");
}

const addComment = () => {
    const product = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    const rating = document.getElementById("rating").value;
    const user = document.getElementById("user").value;

    const newComment = document.createElement("div")
    newComment.innerHTML = '<h3>'+product+'</h3> <p>'+rating+' stars. '+comment+' by: '+user+'/p>';

    const temp = document.getElementById("comment-div");
    temp.appendChild(newComment);
}

window.onload = () => {
    document.getElementById("show").onclick = Show;
    document.getElementById("hide").onclick = Hide;
    document.getElementById("animate").onclick = Animate;
    document.getElementById("comment-button").onclick = addComment;
};