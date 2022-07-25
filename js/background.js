const images = ["0.jpeg","1.jpeg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];
console.log(chosenImage);
const bgImage = document.createElement("img");
 
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);