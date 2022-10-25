/* Current Page Styles */

const url = document.location.href.split('/');
const aHome = document.querySelector('#home');
const aBooks = document.querySelector('#books');
const aQna = document.querySelector('#qna');

if (url[3] === '' || url[3] === 'index.html') {
  aHome.classList.add('current');
}

if (url[3] === 'pages') {
  switch (url[4]) {
    case 'books.html':
      aBooks.classList.add('current');
      break;
    case 'qna.html':
      aQna.classList.add('current');
      break;
  }
}

/* Footer Year */

const sYear = document.querySelector('.year');
const now = new Date();
const year = now.getFullYear();
sYear.innerText = year;
