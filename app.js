const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    const username  = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText  = username;
}

function handlerLinkClick(event){
    event.preventDefault();
    console.log(event);
}

loginForm.addEventListener("submit",onLoginSubmit)

link.addEventListener("click",handlerLinkClick);