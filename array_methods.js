/**
 * En javascript il existe de nombreuses fonctions pour 
 * manipuler les Arrays (filter, map, reduce, splice, etc...)
 */

/**
 * Filter : permet de filtrer un tableau d'objects si le critère fourni est respecté
 */
const movies = [
    {
        name : "Terminator",
        genre : "SF"
    },
    {
        name : "Aliens",
        genre : "SF"
    },
    {
        name : "Ace Ventura en Afrique",
        genre : "comedie"
    }
]
// Ici on renvoie que les éléments du tableau dont le genre correspond à "SF"
var liste_des_films_sf = movies.filter(element => {
    return element.genre === "SF"
})

/**
 * Find : permet de récupérer la premiere valeur d'un tableau 
 * correspondant a un critère donné
 */
const numbers = [5, 12, 8, 130, 44];

const found = numbers.find(element => element > 10);
console.log(found);

/**
 * Includes : permet de vérifier si un tableau contient bien une valeur donnée
 * Cette méthode renvoie true si la valeur est trouvée et false si absente
 */
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

/**
 * Map : permet de boucler dans un tableau et d'opérer une action sur 
 * chaque element du tableau
 */
const array1 = [1, 4, 9, 16];

const map1 = array1.map(element => element * 2);

 console.log(map1);
 // expected output: Array [2, 8, 18, 32]

/**
 * Sort : permet de trier un tableau
 */
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

/**
 * Slice : permet de renvoyer une copie d'un tableau en supprimant un certain 
 * nombre d'elements. le tableau original n'est pas modifié
 */
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

/**
 * Splice : modifie le contenu d'un tableau en retirant des éléments 
 * ou en en ajoutant. On peut ainsi vider ou remplacer une partie du tableau
 */
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]