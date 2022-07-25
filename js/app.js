const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username  = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

function handlerLinkClick(event){
    event.preventDefault();
    console.log(event);
}

function paintGreeting(savedUserName){
    greeting.classList.remove("hidden");
    greeting.innerText = `${savedUserName}`;
}

link.addEventListener("click",handlerLinkClick);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit",onLoginSubmit)

}
else{
   paintGreeting(savedUserName);
}