const catGifs = ["peachsit.gif", "gomaphone.gif", "peachboba.gif", "gomasilly.gif"];
let currentCatIndex = 0;
let buttonClicked = false;

function toggleCatGif() {
    currentCatIndex = (currentCatIndex + 1) % catGifs.length;
    const gifContainer = document.getElementById('gif-container');
    const catGif = document.getElementById('cat-gif');
    catGif.src = catGifs[currentCatIndex];
    gifContainer.classList.remove('hidden');

    if (!buttonClicked) {
        const buttonIcon = document.querySelector('.button-icon');
        buttonIcon.textContent = 'click for more cute cats :3';
        buttonClicked = true;
    }
}

document.querySelector('.button-icon').addEventListener('click', toggleCatGif);
