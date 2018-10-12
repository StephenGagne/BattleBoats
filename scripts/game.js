const $shipContainer = document.getElementById('ships')
const $ships = $shipContainer.getElementsByClassName('ship')

$shipContainer.addEventListener('mousedown', function (e) {
  if (e.target.classList.contains('ship')) {
    e.target.style.left = `${e.movementX}px`
  }
})