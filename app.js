document.querySelector('#mobile_hamburger').addEventListener('click', function() {
  document.querySelector('#mobile_menu').classList.toggle('hidden')
  document.querySelector('#icon_menu').classList.toggle('hidden')
  document.querySelector('#icon_x').classList.toggle('hidden')
})

document.querySelector('#tempo_overlay_hide').addEventListener('click', function() {
  document.querySelector('#tempo_overlay').classList.add('hidden')
  // window.localStorage.setItem('tempo_overlay_hidden', true)
})

if (!window.localStorage.getItem('tempo_overlay_hidden')) {
  document.querySelector('#tempo_overlay').classList.remove('hidden')
}