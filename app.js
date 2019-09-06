
const doge = document.getElementById('doge');

doge.addEventListener('click', ()=>{
    console.log('Guau, guau.');
});

drumButtons.forEach(
    button =>{
        button.style.left = `${button.dataset.posx}px`; 
        button.style.top = `${button.dataset.posy}px`;
    } 
);