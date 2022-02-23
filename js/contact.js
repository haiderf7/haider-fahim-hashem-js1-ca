const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#NameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");



function validateForm(event) {
    event.preventDefault();

    if (checkLength(firstName.value, 0) === true) {
        NameError.style.display = "none";
    } else {
        NameError.style.display = "block";
    }

    if (checkLength(subject.value, 3) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if (checkLength(adress.value, 3) === true) {
        adressError.style.display = "none";
    } else {
        adressError.style.display = "block";
    }

    console.log("hello");
};



form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}