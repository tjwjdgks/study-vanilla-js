const hello = document.querySelector('#hello h1');

function handleTitleClick(){
    const clickedClass = "active";
    if(this.className === clickedClass){
        this.className = "";
    }
    else{
        this.className = clickedClass;
    }
}

hello.addEventListener('click',handleTitleClick);