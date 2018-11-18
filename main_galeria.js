// let img1 = document.getElementById('img1');
// img1.classList.add("testowa");
// console.log(img1);
// let img2 = document.getElementById('img2');
// img2.classList.add("testowa1");
// console.log(img2);
// let img3 = document.getElementById('img3');
// img3.classList.add("testowa2");
// console.log(img2);
// let img4 = document.getElementById('img4');
// img4.classList.add("testowa3");
// console.log(img3);
let pobierz_obrazki = document.querySelectorAll('.img');
console.log(pobierz_obrazki)
let czas = 5000;
let active = 0;
let konkretne_img = '';
let imgHtml = document.querySelector('.zdjecia_galeria');


    for (let i = 0; i < pobierz_obrazki.length; i++) {
        pobierz_obrazki[i].addEventListener('click', addMyClass);
    }


function addMyClass(e) {
    e.target.classList.add('Newnewnew');
}

function slideImages() {
        imgHtml.src = pobierz_obrazki[active].src;
        active++;
        if (active == pobierz_obrazki.length -1) {
            active = 0;
        }
        setTimeout(slideImages, czas);
    
}
function changeSlide() {
    if (this.className === 'button-right') {
        console.log ('rightClick');
        active--;
    } 

    if (this.className === 'button-left') {
        active++;
    }
    if (this.className === 'hiddenAll') {
        document.querySelector('.gallery').style.display = "none";
    }

    if (this.className === 'showWithAlt') {
        hiddenNonAlt();
    } 
    if (this.className === 'showAll') {
        document.querySelector('.gallery').style.display = "block";
    }

    console.log (active);
    if (active < 0) active = pobierz_obrazki.length -1;
    else if (active == pobierz_obrazki.length) active =0;
    imgHtml.src = pobierz_obrazki[active].src;
}

let arrows = document.querySelectorAll('button');
for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', changeSlide);
}

function hiddenNonAlt() {
    
        for (let i = 0; i < pobierz_obrazki.length; i++) {
            if (!pobierz_obrazki[i].alt){
            console.log(pobierz_obrazki[i].alt);
            pobierz_obrazki[i].style.display = "none";
        }
    }

}

slideImages();
changeSlide();