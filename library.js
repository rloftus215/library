const library = []

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${pages} pages, ${read}`
  }
}

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const table = document.querySelector('table')




 



const button = document.querySelector('button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');
const overlay = document.querySelector('.overlay')




function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}




button.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)




function closeModal() {
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
}



document.addEventListener('keydown', function (e) {
   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
       closeModal()
   }
})



