/**
 * En javascript on peut sélectionner des éléments d'une page web de plusieurs manieres
 * Par ex : par l'attribut "id", par le nom de classe ou alors par type de balise
 * Voici quelques exemples
 */

// Récupérer un élément par l'intermediaire d'un attribut "id"
const truc_a_recuperer = document.querySelector("#id")

// Récupérer un élément par l'intermediaire d'un attribut "class"
const truc_a_recuperer2 = document.querySelector(".class")

// Récupérer plusieurs éléments par une classe ou un ID
const truc_a_recuperer3 = document.querySelectorAll(".class")
const truc_a_recuperer4 = document.querySelectorAll("#id")

// Récupérer un élément par type de balise
const truc_a_recuperer5 = document.getElementsByTagName('a')

// Récupérer un attribut d'une balise HTML
const lien_a_recup = truc_a_recuperer5.getAttribute('href')

// Modifier la valeur d'un attribut d'une balise HTML
truc_a_recuperer5.setAtttribute('href','www.google.com')