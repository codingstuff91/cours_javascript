/**
 * Settimeout : permet de lancer une fonction apres une temporisation de X secondes
 * NB : le nombre de secondes doit etre affiché en millisecondes
 */
setTimeout(() => {
    console.log("fonction executée apres 3 secondes");
}, 3000)

/**
 * Setinterval : permet d'executer une fonction de maniere répétitive
 * et périodique toutes les X secondes (affichées en millisecondes)
 */
setInterval(() => {
    console.log("fonction executée toutes les 3 secondes");
}, 3000);