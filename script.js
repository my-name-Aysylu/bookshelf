const books = [
    {
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      image: '<img src="https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg"/>'
    },
    {
      title: 'JavaScript: The Good Parts',
      authors: 'Douglas Crockford',
      year: '2008',
      image: '<img src="https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg"/>'
    },
    {
      title: 'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image: '<img src="https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg"/>'
    },
    {
      title: 'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image: '<img src="https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg"/>'
    }
]

const container = document.getElementById("container")

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
    <div class="to-change"><button>Изменить</button></div>
    <div class="delet"><button>Удалить</button></div>
    </div>
    </div>`
})

	
			