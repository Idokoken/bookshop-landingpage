const toggle = document.getElementById('toggle')
const close = document.getElementById('close')
const open = document.getElementById('open')
const modal = document.getElementById('modal')

// toggle nav
toggle.addEventListner('click'  () => {
	document.body.classList
	toggle('show-nav')
})
// show modal
open.addEventListner('click', () => {
	modal.classList.add('show-modal')
})
// close modal
close.addEventListner('click', () => {
	modal.classList.remove('show-modal')
})
// click the window to open
window.addEventListner('click', (e) => {
	e.target == modal ?modal.classList.remove('show-modal') : false;