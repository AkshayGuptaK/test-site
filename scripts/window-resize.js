var div = document.querySelector('div')

window.onresize = function () {
  let WIDTH = window.innerWidth
  let HEIGHT = window.innerHeight
  div.style.width = WIDTH + 'px'
  div.style.height = HEIGHT + 'px'   
}
