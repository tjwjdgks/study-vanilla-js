const hello = document.querySelector('.hello h1');
console.log(hello);
function handleTitleClick(){
    const clickedClass = "active";
    if(this.classList.contains(clickedClass)){
        this.classList.remove(clickedClass);
    }
    else{ 
        this.classList.add(clickedClass);
    }
}

hello.addEventListener('click',handleTitleClick);