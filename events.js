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

/**
 * Ecouter n'importe quelle appui d'une touche du clavier
 * Ensuite on lance une action à faire
 * L'argument e passé a la function de callback permet de recuperer des détails supplementaires
 */
addEventListener('keypress', function(e){
    console.log(e);
})