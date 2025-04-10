(function () {
  
  // Модалка

  const modal = document.querySelector('.modal')
  const modalButton = document.querySelector('.hero__img-button')

  modalButton.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)

  function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal')
  }

  function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
      document.body.classList.remove('body--opened-modal')
    }

  }
  // Маска для телефона

  const telInputs = document.querySelectorAll('input[type="tel"]')
  const im = new Inputmask('+7(999) 999-99-99')
  im.mask(telInputs)

})()