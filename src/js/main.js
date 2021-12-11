import getRefs from './get-refs';
import debounce from 'lodash.debounce';
import booksListTpl from '../templates/books-list.hbs';
import API from './fetchBooks';

const refs = getRefs();

refs.input.addEventListener('input', debounce(onInputSearch, 3000));

async function onInputSearch(e) {
  const { value } = e.target;

  const searchQuery = value.trim();

  if (searchQuery.length <= 3) {
    return;
  }

  try {
    const data = await API.fetchCountries(searchQuery);
    const { items } = data;
    const books = items.map(({ volumeInfo }) => volumeInfo);
    renderBooksCard(books);
    console.log(books);
  } catch (error) {
    console.log(error.message);
  }
}

function renderBooksCard(books) {
  const markup = booksListTpl(books);
  refs.booksContainer.innerHTML = markup;
}
