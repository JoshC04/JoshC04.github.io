const showMessageResult = async (e) => {
    e.preventDefault();
    const result = document.getElementById("success");
    result.classList.remove("hidden");
    let response = await formSubmit();
    if (response.status == 200) {
      result.innerHTML = "Your message was sent!";
    } else {
      result.innerHTML = "Oops! Your message could not be sent.";
    }
};

const formSubmit = async (e) => {
    const contactForm = document.getElementById("contact-form");
    const contactData = new FormData(contactForm);
    const object = Object.fromEntries(contactData);
    const json = JSON.stringify(object);
    const result = document.getElementById("success");
    result.innerHTML = "Please wait...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        });
        return response;
    } catch (error) {
        console.log(error);
        document.getElementById("success").innerHTML = "Oops! There was a problem submitting your form";
    }
};

document.getElementById("contact-form").onsubmit = showMessageResult;