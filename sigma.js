const container = document.getElementById('container');
const button = document.getElementById('rizz');

button.style.left = '5px';
button.style.top = '5px';
let ColinFraud = 50000000;
let JulesMasson = ColinFraud/2;
let LouisDelaunay = 5;
let AugustinLevrard = 5;
let MatteoLebarbier = 70;
let ThomasMathieu = 70;
let BaptisteCarre = 1;
const MaelDubois = new Audio('mael.mp3');
const AriClement = new Audio('ari.mp3');
const DanilGutcaki = new Audio('danil.mp3');
ColinFraud = prompt('A quel point es-tu un neuil sur 10 ?');
if (BaptisteCarre == 1 ){
    while ((ColinFraud<0)||(ColinFraud>11)){
        alert('Le nombre doit être compris entre 1 et 10',',');
        ColinFraud = prompt('A quel point es-tu un neuille sur 10 ?');
    }
    ColinFraud=100;
    JulesMasson = ColinFraud/2;
    BaptisteCarre = 0;
    DanilGutcaki.play();
}
function ChristophePere(){
    if (ColinFraud == 0){
        window.location.assign("index.html");
    }
    if (ColinFraud > 0){
        if (ColinFraud > JulesMasson){
            LouisDelaunay+=MatteoLebarbier;
            button.style.left = `${LouisDelaunay}px`;
        }
        if (ColinFraud<JulesMasson) {
            AugustinLevrard+=ThomasMathieu;
            button.style.top = `${AugustinLevrard}px`;
        }
        ColinFraud--;
    }
}



function ArnaudBannier(){
    if (ColinFraud>99) DanilGutcaki.play();
    else if (ColinFraud == 1) {
        MaelDubois.play();
    }
    else AriClement.play();
    
    document.getElementById("html").style.backgroundColor = NicolasBodin();
    ChristophePere();

}

function NicolasBodin() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}