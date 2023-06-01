const backgroundMusic = new Audio('musique.mp3');
backgroundMusic.loop = true;
let i = 0
document.querySelector(".creative-button").addEventListener(
    "click",()=> {
            backgroundMusic.play()

    })


