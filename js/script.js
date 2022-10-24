
//CONTENITORE IMMAGINI
const image = [
    'lake.jpg',
    'cyberpunk.jpg',
    'mountain-lake.jpg',
    'mushrooms.jpg',
    'mountain-snow.jpg'
];
//CONTENITORE IMMAGINI
const slider = document.querySelector('.img-wrapper');
let numImgs = 5;
let imgTags = '';

//INIZIALIZZO TUTTO
init()

//CREO UN CONTATORE PER LE IMMAGINI
let counterImg = 0;
//SALVO GLI ITEM IN UNA COLLECTION
const items = document.getElementsByClassName('item');
//assegno la classe active al primo elemento deella collection
items[counterImg].classList.add('active')


//SELEZIONO I BOTTONI PER SWITCHARE TRA LE IMMAGINI
const next = document.querySelector('.down');
const prev = document.querySelector('.top');

//AGGIUNGO EVENTI PER LA NAVIGAZIONE AVANTI/INDIETRO NELLO SLIDER
next.addEventListener('click', function(){
    navigatorNext();
    clearInterval(autoplay);
});

prev.addEventListener('click', function(){
    navigatorPrev();
    clearInterval(autoplay);
});






          ///////////
////////// FUNCTIONS ///////////
          //////////

function init(){

    automaticSlider();
    imgGenerator();
    
};

function imgGenerator(){

    for(let i = 0; i < image.length; i++){
        imgTags += `
        <img class="item" src="img/${image[i]}" alt="${image[i]}">
        `;
    }
    //AGGIUNGO I TAG ALLO SLIDER
    slider.innerHTML += imgTags;
}

function navigatorNext(){
        items[counterImg].classList.remove('active')
        counterImg++
        if(counterImg === numImgs) counterImg = 0;
        items[counterImg].classList.add('active');
}
function navigatorPrev(){
        items[counterImg].classList.remove('active')
        counterImg--
        if(counterImg < 0) counterImg = numImgs - 1;
        items[counterImg].classList.add('active');
}

function automaticSlider(){
    
    const autoplay = setInterval(function(){
        items[counterImg].classList.remove('active')
        counterImg++;
        if(counterImg === numImgs) counterImg = 0;
        items[counterImg].classList.add('active');
    }, 1000);

    slider.addEventListener("mouseover", function(){
        clearInterval(autoplay);

    });
    
    slider.addEventListener("mouseout", automaticSlider);

    
}
