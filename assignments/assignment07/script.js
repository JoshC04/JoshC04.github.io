const toggleNav = () => {
    document.getElementById("main-items").classList.toggle("hidden");
}

const compareAges = () => {
    const name1 = document.getElementById("name01").value;
    const age1 = document.getElementById("age01").value;
    const name2 = document.getElementById("name02").value;
    const age2 = document.getElementById("age02").value;
    const name3 = document.getElementById("name03").value;
    const age3 = document.getElementById("age03").value;

    if(age1 > age2 && age1 > age3 && age2 > age3) {
        const compare = document.createElement("div")
        compare.innerHTML = '<h3>Oldest to Youngest: '+name1+', '+name2+', '+name3+'.</h3>';
        compare.classList.add("styles");

        const temp = document.getElementById("temp-div");
        temp.appendChild(compare);
    } else if(age2 > age1 && age2 > age3 && age1 > age3) {
        const compare = document.createElement("div")
        compare.innerHTML = '<h3>Oldest to Youngest: '+name2+', '+name1+', '+name3+'.</h3>';
        compare.classList.add("styles");

        const temp = document.getElementById("temp-div");
        temp.appendChild(compare);
    } else if(age1 > age2 && age1 > age3 && age3 > age2) {
        const compare = document.createElement("div")
        compare.innerHTML = '<h3>Oldest to Youngest: '+name1+', '+name3+', '+name2+'.</h3>';
        compare.classList.add("styles");

        const temp = document.getElementById("temp-div");
        temp.appendChild(compare);
    } else if(age2 > age1 && age2 > age3 && age3 > age1) {
        const compare = document.createElement("div")
        compare.innerHTML = '<h3>Oldest to Youngest: '+name2+', '+name3+', '+name1+'.</h3>';
        compare.classList.add("styles");

        const temp = document.getElementById("temp-div");
        temp.appendChild(compare);
    } else if(age3 > age1 && age3 > age2 && age2 > age1) {
        const compare = document.createElement("div")
        compare.innerHTML = '<h3>Oldest to Youngest: '+name3+', '+name2+', '+name1+'.</h3>';
        compare.classList.add("styles");

        const temp = document.getElementById("temp-div");
        temp.appendChild(compare);
    } else if(age3 > age1 && age3 > age2 && age1 > age2) {
        const compare = document.createElement("div")
        compare.innerHTML = '<h3>Oldest to Youngest: '+name3+', '+name1+', '+name2+'.</h3>';
        compare.classList.add("styles");

        const temp = document.getElementById("temp-div");
        temp.appendChild(compare);
    }
}   

const fundsGoal = () => {
    const funds = document.getElementById("funds").value;
    if(funds >= 2500 && funds < 5000) {
        document.getElementById("funds-display").classList.add("gradient25");
    } else if(funds >= 5000 && funds < 7500) {
        document.getElementById("funds-display").classList.add("gradient50");
    } else if(funds >= 7500 && funds < 10000) {
        document.getElementById("funds-display").classList.add("gradient75");
    } else if(funds == 10000) {
        document.getElementById("funds-display").classList.add("gradient100");
    }
}

const exerciseToggle1 = () => {
    document.getElementById("main-content").classList.toggle("hidden");
    document.getElementById("fund-goal").classList.toggle("hidden");
    document.getElementById("ex1").classList.toggle("border");
    document.getElementById("ex2").classList.toggle("border");
}

const exerciseToggle2 = () => {
    document.getElementById("fund-goal").classList.toggle("hidden");
    document.getElementById("main-content").classList.toggle("hidden");
    document.getElementById("ex2").classList.toggle("border");
    document.getElementById("ex1").classList.toggle("border");
}

window.onload = () => {
    document.getElementById("nav-burger").onclick = toggleNav;
    document.getElementById("age-button").onclick = compareAges;
    document.getElementById("funds-button").onclick = fundsGoal;
    document.getElementById("ex1").onclick = exerciseToggle1;
    document.getElementById("ex2").onclick = exerciseToggle2;
}