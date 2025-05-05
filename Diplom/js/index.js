(function () {

  // Модалка

  const modal = document.querySelector('.modal')
  const modalConsultation = document.querySelector('.hero__consultation')
  const modalButton = document.querySelectorAll('.button')

  modalConsultation.addEventListener('click',openModal)
  modal.addEventListener('click', closeModal)

  modalButton.forEach(button => {
    button.addEventListener('click' , openModal)
  })

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

  // Аккордион

  const accordionLists = document.querySelectorAll('.accordion-list')

  accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

      const accordionList = e.currentTarget
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
      const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

      const accordionControl = e.target.closest('.accordion-list__control')
      if (!accordionControl) return
      e.preventDefault()
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened')
        accordionOpenedContent.style.maxHeight = null
      }
      accordionItem.classList.toggle('accordion-list__item--opened')

      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null
      }

    })
  })


  // Слайдер-галерея

  new Swiper('.announcements__slider', {

    spaceBetween: 15,
    slidesPerView: 1,

    navigation: {
      nextEl: '.announcements__next',
      prevEl: '.announcements__prev',
    },

    breakpoints: {
      451: {
        slidesPerView: 1.5,
      },
      601: {
        slidesPerView: 2,
      },
      801: {
        slidesPerView: 2.5,
      },
      1101: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1201: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
    }
  });

})()