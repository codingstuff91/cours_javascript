/**
 * Ancienne méthode pour concatener du texte avec des variables
 */
const nom = "STARK"
const prenom = "Tony"

console.log(prenom + " " + nom);

/**
 * On peut faire plus simple avec les template strings
 * On peut facilement afficher du texte et un ou plusieurs variables dans 
 * une meme ligne en utilisant les "backticks" et en précédant chaque 
 * variable par le symbole $ et 2 accolades
 */
console.log(`prenom : ${prenom}, nom : ${nom}`);