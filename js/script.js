"use strict"

// Mobile Top Bar
let mobileTopBar = document.querySelector('.mobileTopBar')

// Navigationsleiste und Hamburgermenü
let navbar = document.querySelector('.navbar')
let mobileMenu = document.querySelector('.mobileMenu')
let startX, endX // Für Touch Öffnen der Navigationsleiste

/**********************************************************************
/*********************************************************************/
// Menü öffnen
function openMenu() {
  if (navbar.getAttribute('data-visible') === "false") {
    navbar.setAttribute('data-visible', "true")
    mobileMenu.setAttribute('data-active', "true")
    document.body.style.overflow = "hidden"
  }
}

window.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX
  if (startX > (screen.availWidth - 100) && startX - endX > 100) {
    openMenu()
  }
})

window.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX
})

navbar.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX
  if (endX - startX > 100) {
    closeMenu()
  }
})

/*********************************************************************/
// Menü schließen
function closeMenu() {
  if (navbar.getAttribute('data-visible') === "true") {
    navbar.setAttribute('data-visible', "false")
    mobileMenu.setAttribute('data-active', "false")
    document.body.style.overflow = "scroll"
  }
}
/*********************************************************************/
// Menü öffnen / schließen bei Klick auf Hamburgermenü
mobileMenu.addEventListener('click', () => {
  const visibility = navbar.getAttribute('data-visible')

  if (visibility === "false") {
    openMenu()
  } else if (visibility === "true") {
    closeMenu()
  }
})
/*********************************************************************/
// Menü schließen, wenn außerhalb von Seitenleiste oder Mobile Top Bar geklickt wird
document.addEventListener('pointerdown', (e) => {
  if (e.target !== navbar
    && !navbar.contains(e.target)
    && e.target !== mobileTopBar
    && !mobileTopBar.contains(e.target)) {

    closeMenu()
  }
})