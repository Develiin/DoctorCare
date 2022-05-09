//String (textos) qualquer tipo de texto
//Number(números) qualquer número
//Boolean (true) ou é verdadeiro ou é falso (false)
function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
