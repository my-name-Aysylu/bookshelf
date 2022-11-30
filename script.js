const getMenu = document.getElementById('getMenu')
const closeSave = document.getElementById('save')
const openButtonBook = document.getElementById('buttonbook')

function closeModal() {
  getMenu.style.display = 'none'
}

function openModal() {
 getMenu.style.display = 'flex'
}

closeSave.addEventListener('click', closeModal)
openButtonBook.addEventListener('click',openModal)

let books = [
    {
      id: 1,
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      image: '<img src="https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg"/>'
    },
    {
      id: 2,
      title: 'JavaScript: The Good Parts',
      authors: 'Douglas Crockford',
      year: '2008',
      image: '<img src="https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg"/>'
    },
    {
      id: 3,
      title: 'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image: '<img src="https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg"/>'
    },
    {
      id: 4,
      title: 'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image: '<img src="https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg"/>'
    }
]



const container = document.getElementById("container")
function renderBooks() {
container.innerHTML = ""
books.forEach(function(book) {
    container.innerHTML += `
    <div class="books">
    <div class="shelf-menu">
    <p class="images">${book.image}</p>
    <p class="title">${book.title}</p>
    <div class="year-author">
    <p class="year">${book.year}</p>
    <span class="author">${book.authors}</span>
    </div>
    </div>
    <div class="shelf">
    <button onclick=''class="book-btn">Изменить</button>
    <button onclick='deletBook (${book.id})' class="book-btn">Удалить</button>
    </div>
    </div>`
})
}



function clearForm () {
  document.getElementById('title').value = ""
  document.getElementById('author').value = ""
  document.getElementById('publication').value =""
  document.getElementById('images').value = ""
}

function deletBook(id){
   //шаг 1 найти книгу
   const book = books.find((s) => {
    return s.id === id
   })
   //шаг 2 узнать индекс книги в массиве
   const bookIndex = books.indexOf(book)

   // 3 удалить элемент из массива
   books.splice((bookIndex), 1)
   // 4 перерисовать список
   renderBooks()

   const booksJson = JSON.stringify(books)
   localStorage.setItem('books', booksJson)


}


function addBook() {
  const titleValue = document.getElementById('title').value
  const authorValue = document.getElementById('author').value
  const publicationValue = document.getElementById('publication').value
  const imagesValue = document.getElementById('images').value

  const book = {
    title: titleValue,
    authors: authorValue,
    year: publicationValue,
    image: imagesValue
  }

  books.push(book)
  renderBooks()
  clearForm ()
  closeModal()

  const booksJson = JSON.stringify(books)
  localStorage.setItem('books', booksJson)
  
}


const booksJson = localStorage.getItem('books')
const savedBooks = JSON.parse(booksJson)
if (booksJson) {
  books = savedBooks
}


renderBooks()





