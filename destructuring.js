/**
 * Le destructuring permet de récupérer une partie d'un Object
 */
const personnage = {
    nom : "Matt",
    force : 2, 
    vigueur : 4
}

/**
 * Si l'on souhaite récupérer une propriété de notre object on peut faire
 */
console.log(personnage.force);

/**
 * On peut récupérer une ou plusieurs propriété d'un object
 * en utilisant le destructuring d'un object
 */
const {nom} = personnage
console.log("nom du perso via destructuring", nom);

/**
 * Le destructuring peut également s'appliquer aux Arrays
 */
var fruits = ['pomme', 'fraise', 'framboise']

// Pour récupérer le 1er fruit de manière classique on écrit 
console.log(fruits[0]);

/**
 * En revanche on peut également faire la meme chose avec le destructuring
 * ici on récupère le 1er fruit en lui donnant un alias
 */
const [fruit_a_recuperer] = fruits
console.log(fruit_a_recuperer);