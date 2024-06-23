const myLibrary = []
 

 
 const titleInput = document.querySelector('#title');
 const authorInput = document.querySelector('#author');
 const pagesInput = document.querySelector('#pages');
 const table = document.querySelector('table');
 
  function Book(title, author, pages, read) {
     this.title = title;
     this.author = author;
     this.pages = pages;
 };
 
 function addNewBook() {


 let newObject = {
 }
 
 
 
 newObject.title = `${titleInput.value}`;
 newObject.author = `${authorInput.value}`;
 newObject.pages = `${pagesInput.value}`;
 
 
 myLibrary.push(newObject)

 const tr = document.createElement('tr');
 const title = document.createElement('td');
 const author = document.createElement('td');
 const pages = document.createElement('td');
 const deleteButton = document.createElement('button');

 title.innerText = `${newObject.title}`;
 author.innerText = `${newObject.author}`;
 pages.innerText = `${newObject.pages}`;
 deleteButton.innerText = 'Delete'
 deleteButton.setAttribute('id', 'book-btn');
 tr.appendChild(title);
 tr.appendChild(author);
 tr.appendChild(pages);
 tr.appendChild(deleteButton);
 table.appendChild(tr);
   
 
 function deleteBook() {
   myLibrary.splice(0, myLibrary.length);

   console.log(myLibrary)

   const books = Array.from(tr.children);
 
   books.forEach((book) => book.remove());
 }

 deleteButton.addEventListener('click', deleteBook)
}
 
 
 
 document.addEventListener('keydown', function (e) {
    if(e.key === 'Enter' && !modal.classList.contains('hidden')) {
        closeModal();
        addNewBook();
        console.log(myLibrary)
    }
 })
 

 



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



