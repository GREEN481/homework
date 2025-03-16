(function () {

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if(document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
        document.body.classList.add('body--opened-menu')
      } else {
        document.body.classList.remove('body--opened-menu')
      }
  }

  const modal = document.querySelector('.modal')
  const modalButton = document.querySelector('.about__img-button')
  
  modalButton.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal )
  
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

})()







/* 
const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')

btn.addEventListener('click', () => {
  modal.classList.add('modal--open')
})

modal.addEventListener('click', (event) => {
const target = event.target
if(target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')){
  modal.classList.remove('modal--open')
}
})

document.addEventListener('keydown', event => {
if(event.code === "Escape" && modal.classList.contains('modal--open')){
  modal.classList.toggle('modal--open')
}
}) */