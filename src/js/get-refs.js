export default function getRefs() {
  return {
    openModalBtn: document.querySelector('[data-modal-open]'),
    modal: document.querySelector('[data-modal]'),
    backDorp: document.querySelector('.js-backdrop'),
    input: document.getElementById('filter'),
    booksContainer: document.querySelector('.book-search__result'),
  };
}
