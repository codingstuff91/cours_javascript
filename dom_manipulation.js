/**
 * Sélectionner plusieurs élements d'une page
 * avec la commande querySelectorAll
 * NB : Les résultats sont récupérés sous forme de tableau
 */
var paragraphes = document.querySelectorAll('.paragraphe')
console.log(paragraphes);

// Afficher le premier paragraphe selectionné
console.log(paragraphes[0]);

// Récupérer le contenu du premier paragraphe sélectionné 
console.log(paragraphes[0].innerHTML);

/**
 * Pour ajouter un nouvel élément à notre page web
 * il faut d'abord créer le type d'élément souhaité (div, p, etc...)
 * et ensuite il faudra l'ajouter comme un enfant du body
 */
var new_div = document.createElement('div')

// Ajouter une classe CSS 
new_div.classList.add('toto')

// Ajouter un ID 
new_div.id = "test_id"

// Ajouter la nouvelle DIV dans le corps de la page
document.body.appendChild(new_div)

/**
 * Si on souhaite créer un nouveau paragraphe dans la nouvelle div crée
 * il faudra créer notre paragraphe, lui donner du texte et ensuite
 * l'ajouter comme un enfant de la div que l'on a crée précédemment
 */
var new_paragraphe = document.createElement('p')
new_paragraphe.innerText = "ajout de texte dynamique"

new_div.appendChild(new_paragraphe)