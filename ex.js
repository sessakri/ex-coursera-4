
const figures = document.querySelectorAll('figure');
figures.forEach(fig => fig.setAttribute('tabindex', '0'));


function updateDisplay(image) {
    const display = document.getElementById('display');
    display.style.backgroundImage = `url('${image.src}')`;
    display.innerHTML = image.alt;
}


function resetDisplay() {
    const display = document.getElementById('display');
    display.style.backgroundImage = '';
    display.innerHTML = 'Survolez ou utilisez le clavier pour afficher une image ici';
}


const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(img => {
   
    img.addEventListener('mouseover', () => updateDisplay(img));
    img.addEventListener('mouseout', resetDisplay);

    
    img.addEventListener('focus', () => updateDisplay(img));
    img.addEventListener('blur', resetDisplay);
});
