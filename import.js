// Importer tout le contenu d'un autre fichier Javascript
import * as imported_file from './export.js'

// import d'une partie d'un fichier avec le destructuring
import {direAurevoir} from './export.js'

// Appel de la fonction direBonjour contenu dans l'autre fichier
imported_file.direBonjour("Matthieu")

// Appel de la fonction importé via destructuring
direAurevoir("Matthieu")