// let images=["b1.jfif","c1.jfif"]
// console.log(images.length);

// let currentIndex=0
// let slider=document.querySelector("#slider")

// function showSlide(index){
//     slider.src=images[index]
// }

// function nextSlide(){
//     currentIndex=(currentIndex+1)%images.length
//     showSlide(currentIndex)
// }

// function prevSlide(){
//     currentIndex=(currentIndex-1+images.length%images.length)
//     showSlide(currentIndex)
// }
// //setInterval(nextSlide,3000)


let images = [
    "a1.jfif",
    "Burger (1).jfif",
    "pizza.jfif"
];

let currentIndex = 0;
let slider = document.querySelector("#slider");

showSlide(currentIndex);

function showSlide(index){
    slider.src = images[index];
}

function nextSlide(){
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

// Auto slider
 //setInterval(nextSlide, 3000);