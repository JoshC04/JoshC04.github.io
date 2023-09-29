const startRun = () => {
    const runner = document.querySelector("#runner-img");
    const percentages = document.querySelector(":root");
    const info = getComputedStyle(percentages);

    let count = 0;
    let multiplier = 0;

    const updateRunner = setInterval(() => {

        count++;
        multiplier += 5;
        percentages.style.setProperty("--margin", multiplier+"px");
        
        if(info.getPropertyValue('--background') == 'url(../../images/Standing.jpg)') {
            percentages.style.setProperty("--background", "url(../../images/RightFoot.jpg)");
        } else if(info.getPropertyValue('--background') == 'url(../../images/RightFoot.jpg)') {
            percentages.style.setProperty("--background", "url(../../images/LeftFoot.jpg)")
        } else if(info.getPropertyValue('--background') == 'url(../../images/LeftFoot.jpg)') {
            percentages.style.setProperty("--background", "url(../../images/RightFoot.jpg)")
        }

        if(count == 90) {
            clearInterval(updateRunner);
        }

    }, 50);
};

const displayFunds = () => {
    const percentages = document.querySelector(":root");
    const input = document.querySelector("#funds").value;
    const limit = Math.trunc((input/10000)*100);

    let count = 0;

    if(limit > 0) {
        const updateDisplay = setInterval(() => {
        
            count++;
            percentages.style.setProperty("--color", count+"%");
            
            if(count == limit || count == 100) {
                clearInterval(updateDisplay);
            };
    
        }, 10);
    };

};

window.onload = () => {
    document.getElementById("funds-button").onclick = displayFunds;
    document.getElementById("runner-img").onclick = startRun;
};