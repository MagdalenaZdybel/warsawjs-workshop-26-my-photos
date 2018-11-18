let imagesList = ['./img/foto1.jpg','./img/moto-1084694__340.jpg','./img/moto-3797983__340.jpg','./img/dirt-bike-209489__340.jpg','./img/fjr.jpg','./img/fjr_blue.jpg'];
let active = 0;
let time = 1000;
let images = '';
let imgHtml = document.querySelector('.image-slider');
let buttonLeft = document.querySelector('.button-left');
let buttonRight = document.querySelector('.button-right');


function displayImages() {
    let i = 0, 
        length = imagesList.length;
    for(; i < length; i++){
        let img = new Image();
        consol.log(img.src);
        img.src = imagesList[i];
        img.style.width = '250px';
        document.getElementById('fotogr').appendChild(img);
    }
}

function slideImages() {
    imgHtml.src = imagesList[active];
    active++;
    if (active == imagesList.length -1) {
        active = 0;
    }
    setTimeout(slideImages, time)
}

function changeSlide() {
    console.log ('cokolwiek');
    if (this.className === 'button-right') {
        console.log ('rightClick');
        active++;
    } 
    if (this.className === 'button-left') {
        console.log ('leftClick');
        active--;
    }

    console.log (active);
    if (active < 0) active = imagesList.length -1;
    else if (active == imagesList.length) active =0;
    imgHtml.src = imagesList[active];
}

let arrows = document.querySelectorAll('img + img');
for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', changeSlide);
}

// displayImages();
// slideImages();
changeSlide();