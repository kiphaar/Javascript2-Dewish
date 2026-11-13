fetch('./books.json')
.then(response => response.json())  .then(books => {
  const list = document.querySelector('#books-list')

  books.forEach(book => {
     const li = document.createElement('li');

      li.textContent = book.title + ' - ' + book.author + ' (' + book.year + ')'
      list.appendChild(li)
    });
  })

  .catch(error => console.error('Fout:', error))
