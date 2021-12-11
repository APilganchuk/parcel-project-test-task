import getRefs from './get-refs';

const refs = getRefs();

refs.backDorp.addEventListener('click', modalOperations);
refs.openModalBtn.addEventListener('click', toggleModal);

function modalOperations(e) {
  const { classList } = e.target;

  const isCloseModalBtn = classList.contains('js-btn-close');
  const isCancelBtn = classList.contains('js-cancel');
  const isUninstallBtn = classList.contains('js-uninstall');
  const isBackDrop = classList.contains('js-backdrop');

  if (isCloseModalBtn || isCancelBtn || isBackDrop) {
    toggleModal();
  }
  if (isUninstallBtn) {
    alert('DONE');
  }
}

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}
