/** 
 * Méthode 1 on peut exporter les fonctions 
 * en ajoutant "export" avant la fonction
 */
export const direBonjour = (name) => {
    console.log("Bonjour " + name);
}

export const direAurevoir = (name) => {
    console.log("A bientot " + name);
}

/**
 * Methode 2 : a la fin du fichier on écrit "export" en mettant dans un objet JS
 * les fonctions que l'on souhaite exporter
 * Par ex : export {direBonjour, direAurevoir}
 */