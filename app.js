const hello = document.querySelector('.hello h1');
console.log(hello);
function handleTitleClick(){
    const clickedClass = "active";
    this.classList.toggle(clickedClass);
}

hello.addEventListener('click',handleTitleClick);