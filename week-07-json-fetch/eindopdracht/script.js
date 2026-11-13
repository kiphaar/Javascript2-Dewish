
let allArticles = []

const showArticles = (articles) => {
  const list = document.querySelector('#articles')

  const html = articles.map(article => {
    return `
      <article>
        <span>${article.category}</span>
        <h2>${article.title}</h2>
        <p>${article.summary}</p>
      </article>
    `;
  });

  list.innerHTML = html.join('')
};

fetch('./news.json')
  .then(r => r.json())
  .then(articles => {
    allArticles = articles;
    showArticles(allArticles)
  })
  .catch(error => console.error('Fout bij laden:', error))

document.querySelector('#filter-alle').addEventListener('click', () => {
  showArticles(allArticles)
});

document.querySelector('#filter-stad').addEventListener('click', () => {

  const filtered = allArticles.filter(article => article.category === 'Stad')
  showArticles(filtered)
});


document.querySelector('#filter-technologie').addEventListener('click', () => {

  const filtered = allArticles.filter(article => article.category === 'Technologie')
  showArticles(filtered)
})



document.querySelector('#filter-media').addEventListener('click', () => {
  
  const filtered = allArticles.filter(article => article.category === 'Media')
  showArticles(filtered)
});
