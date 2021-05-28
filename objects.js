/**
 * Pour créer un nouvel objet JS il faut écrire 2 accolades
 * Par exemple on va créer un objet nommé "personnage"
 */
var personnage = {}

/**
 * Un objet peut etre composé de paramètres qui seront séparés par des virgules
 * NB : les affectations de valeurs à des paramètres doivent se faire avec ":" et non avec "="
 */
var personnage = {
    force : 4,
    vitesse : 2
}

/**
 * Un objet peut etre également composé de données et de méthodes (fonctions)
 */
var personnage = {
    name : "Matthieu",
    force : 4,
    vitesse : 2,
    direBonjour : function(){
        console.log('Bonjour ' + this.name)
    },
    direAurevoir : () => {
        console.log('Au revoir de la part de l\'objet')
    }
}

personnage.direBonjour()

/**
 * Lors de la création d'un nouvel objet il est nécessaire de passer par un constructeur
 * Ce constructeur est une fonction qui va servir de plan pour construire notre objet
 * c'est grace à lui que nous allons définir tous les paramètres dont notre objet a besoin pour être crée
 */
function Personnage(force, vitesse) {
    this.force = force;
    this.vitesse = vitesse;
}

var hero = new Personnage(4, 2)

/**
 * Pour ajouter une nouvelle propriété ou paramètre à un objet rien de plus simple
 * il suffit d'ajouter la propriété à notre objet de cette facon
 */
hero.agilite = 4
console.log(hero);

/**
 * Pour supprimer une propriété à un objet il suffit d'utiliser le mot clé DELETE
 */
delete hero.force
console.log(hero);

/** il est également possible d'utiliser des Class pour créer de nouveaux objets JS 
 * Une Classe est en quelque le plan de construction de tous nos futurs objets
 * Cette classe contiendra également toutes les méthodes (fonctions) que l'on peut exécuter sur nos objets
*/
class Vilain {
    constructor(force, vitesse) {
  
        // "this" fait référence à l'objet dans lequel on se trouve en l'occurence notre classe
        this.force = force;
        this.vitesse = vitesse;
    }
    rireDemoniaque() {
        console.log("MOUHAHAHAHAHAHA");
    }
}

/**
 * Il est possible de créer des méthodes statiques dans nos classes en 
 * ajoutant le mot clé static
 */
class Vilain2 {
    constructor(force, vitesse) {

        // "this" fait référence à l'objet dans lequel on se trouve en l'occurence notre classe
        this.force = force;
        this.vitesse = vitesse;
    }
    static rireDemoniaque() {
        console.log("MOUHAHAHAHAHAHA");
    }
}

/**
 * Les différentes notions d'écriture des variables ou nom d'objet
 * Nom de classe : en Pascalcase
 * Nom des propriétés : en snakecase
 * Nom des méthodes : en camelCase
 */
//  Nom_du_personnage // Pascalcase
//  nomDuPersonnage // camelcase
//  nom_du_personnage // snakecase
//  nom-du-personnage // kebab-case