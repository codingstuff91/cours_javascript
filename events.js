/**
 * Pour écouter un événement sur un élément il faut d'abord le sélectionner
 */
const button = document.querySelector('#button')

/**
 * Ensuite on écoute un événement de type click et
 * on y attache une fonction de callback a éxecuter
 */
button.addEventListener('click', () => {
    alert('bravo vous avez cliqué sur le bouton !')
})