(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open10]'),
    closeModalBtn: document.querySelector('[data-modal-close10]'),
    modal: document.querySelector('[data-modal10]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();