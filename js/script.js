const form = document.querySelector("#form")

const fullname = document.querySelector ("#fullname");
const fullnameError = document.querySelector ("#fullnameError");

const email = document.querySelector ("#email");
const emailError = document.querySelector ("#emailError");

const birthyear = document.querySelector ("#birth-year");
const birthyearError = document.querySelector ("#birthyearError");

function newsletterValid (event){
    event.preventDefault();
    if(checkLen(fullname.value, 5) === true){
        fullnameError.style.display = "none";
    } else {
        fullnameError.style.display = "block";
    }

    if(emailValidation(email.value) === true){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(checkLen(birthyear.value, 3) === true){
        birthyearError.style.display = "none";
    } else {
        birthyearError.style.display = "block";
    }
}

addEventListener("submit",newsletterValid);

function checkLen(value, len){
    if(value.length > len){
        return true;
    } else {
        return false;
    }
}

function emailValidation(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test (email);
    return patternMatches;

}

emailValidation();

