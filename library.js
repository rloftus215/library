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

function addBookToLibrary() {
  const newBooks = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value)

  library.push(newBooks)
}

function libraryUi() {
  const tr = document.createElement('tr');
  const title = document.createElement('td');
  const author = document.createElement('td');
  const pages = document.createElement('td');
  const read = document.createElement('td');
  const deleteButton = document.createElement('button');

  deleteButton.setAttribute('style', 'margin-left: 5px; background-color: red; color: white; border-radius: 10px; padadding: 2px');

  function addStyle(info) {
    info.setAttribute('style', 'border: 1px solid black; text-align: center; background-color: rgb(205, 205, 205)')
  }

  addStyle(title);
  addStyle(author);
  addStyle(pages);
  addStyle(read);	

  title.innerText = `${titleInput.value}`;
  author.innerText = `${authorInput.value}`;
  pages.innerText = `${pagesInput.value}`;
  read.innerText = `${readInput.value}`;
  deleteButton.innerText = 'Delete';
  deleteButton.setAttribute('id', 'book-btn')

  tr.appendChild(title);
  tr.appendChild(author);
  tr.appendChild(pages);
  tr.appendChild(read);
  tr.appendChild(deleteButton);
  table.appendChild(tr);

  function deleteBook() {
    library.splice(0, library.length)

    const books = Array.from(tr.children);

    books.forEach((book) => book.remove())
  }

  deleteButton.addEventListener('click', deleteBook)

  read.addEventListener('click', ()=> {
    if (read.innerText === 'read') {
      read.innerText = 'not read';
    } else if (read.innerText === 'not read') {
      read.innerText = 'read';
    };
  });
};

function clearInput() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.value = "";
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !modal.classList.contains('hidden')) {
    closeModal();
    addBookToLibrary()
    libraryUi();
    clearInput();
    console.log(library)
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



