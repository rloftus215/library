




const button = document.querySelector('button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');
const overlay = document.querySelector('.overlay')




function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}




button.addEventListener('click', openModal);



