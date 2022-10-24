
//CONTENITORE IMMAGINI
const image = [
    'lake.jpg',
    'cyberpunk.jpg',
    'mountain-lake.jpg',
    'mushrooms.jpg',
    'mountain-snow.jpg'
];
let numImgs = 5;
//CONTENITORE IMMAGINI
const slider = document.querySelector('.img-wrapper');

let imgTags = '';
//CREO UN CICLO PER L'ARRAY E CREO UNA STRING PER LO SLIDER


 for(let i = 0; i < image.length; i++){
        imgTags += `
            <img class="item" src="img/${image[i]}" alt="${image[i]}">
        `;
    }

//AGGIUNGO I TAG ALLO SLIDER
slider.innerHTML += imgTags;

//CREO UN CONTATORE PER LE IMMAGINI
let counterImg = 0;
//SALVO GLI ITEM IN UNA COLLECTION
const items = document.getElementsByClassName('item');

//assegno la classe active al primo elemento deella collection
items[counterImg].classList.add('active')


//SELEZIONO I BOTTONI PER SWITCHARE TRA LE IMMAGINI
const next = document.querySelector('.down');
const prev = document.querySelector('.top');


next.addEventListener('click', function(){
    items[counterImg].classList.remove('active')
    counterImg++;
    

})
prev.addEventListener('click', function(){
    items[counterImg].classList.remove('active')
    counterImg--;
    if(counterImg < 0) counterImg = numImgs - 1;
    items[counterImg].classList.add('active');
})



automaticSlider();


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

