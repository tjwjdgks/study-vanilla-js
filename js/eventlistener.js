const hellos = document.querySelector('#hello h1');

console.dir(hellos);
hellos.innerText = 'hello'
hellos.style.color = 'blue';

function handleTitleClick(){
    this.style.color = 'red';
    this.innerText = "test2";
    console.log("title was clicked");
}
function handleMouseEnter(){
    this.style.color = 'purple';
    console.log("title was clicked");
}
function handleMouseLeave(){
    this.style.color = 'black';
}
function handleWindowOffline(){
    alert("no wifi");
}

hellos.onclick = handleTitleClick;
hellos.addEventListener("mouseenter",handleMouseEnter);
hellos.addEventListener("mouseleave",handleMouseLeave);
window.addEventListener("offline",handleWindowOffline);
