const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.className = `bgimage`;
document.body.appendChild(bgImage);