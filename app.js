const hello = document.querySelector('#hello h1');

function handleTitleClick(){
    const currentColor = this.style.color;
    let newColor;
    if(currentColor === 'blue'){
        newColor = 'tomato';
    }
    else{
        newColor = 'blue';
    }
    this.style.color = newColor;
}

hello.addEventListener('click',handleTitleClick);