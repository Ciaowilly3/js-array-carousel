const carousel = [
    "imgs/01.webp",
    "imgs/02.webp",
    "imgs/03.webp",
    "imgs/04.webp",
    "imgs/05.webp",
];

const carouselEl = document.getElementById("carousel");

let imgScroller = 0;

carouselEl.src= carousel[imgScroller];

const topBtnEl = document.querySelector(".top-btn");
const btmBtnEl = document.querySelector(".btm-btn");

console.log(topBtnEl);
topBtnEl.addEventListener( "click", function(){
    imgScroller++;
    if(imgScroller>=carousel.length){
        imgScroller = 0;
    }
    carouselEl.src = carousel[imgScroller];
    console.log(imgScroller)
} )
btmBtnEl.addEventListener( "click", function(){
    imgScroller--;
    if(imgScroller<0){
        imgScroller = 4;
    }
    carouselEl.src = carousel[imgScroller];
    console.log(imgScroller)
} )
