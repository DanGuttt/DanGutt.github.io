const button = document.getElementById('volant');

button.style.left = '20px';
button.style.top = '115px';
let count = 0;

function movButton() {
    if (count<3){
        const X = Math.random() * (window.innerWidth - button.offsetWidth - 20);
        const Y = Math.random() * (window.innerHeight - button.offsetHeight - 20);
    
        button.style.left = `${X}px`;
        button.style.top = `${Y}px`;

        count++;
    }
}

button.addEventListener('mouseenter', movButton);

function ilClick(){
    if (count >= 3){
        window.location.href = "prout.html";
    }
}
button.addEventListener('click',ilClick);