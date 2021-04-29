// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden_madal');
//   }
// })();


(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
refs.closeModalBtn.forEach(button => {
    button.addEventListener('click', toggleModal);
  });
  refs.openModalBtn.addEventListener('click', toggleModal);
  // refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden_madal');
  }
})();
