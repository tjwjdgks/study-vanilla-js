const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
    console.log(loginInput.value);
}

function handlerLinkClick(){
    alert("clicked");
}

loginForm.addEventListener("submit",onLoginSubmit)

link.addEventListener("click",handlerLinkClick);