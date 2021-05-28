/**
 * Une fonction de type Promise (ou promesse en francais) en un type d'objet 
 * qui va contenir une fonction qui aura systématiquement 2 états représentant le succès de la fonction et son echec
 * C'est à dire que la fonction renverra soit "resolve" pour le succès ou "reject" en cas d'échec
 * 
 * Ici on fait une méthode qui va devoir renvoyer un objet de type Promise qui va gérer la réussite ou l'échec de la méthode
 * Dans l'exemple ci-dessous on va faire une méthode pour réparer un véhicule. Si le véhicule est une voiture on la répare
 * sinon on envoie un message d'erreur pour dire qu'on ne sait pas réparer ce type de véhicule
 */

function reparerVehicule(type_vehicule) {
    return new Promise((resolve, reject) => {
        if(type_vehicule == "Voiture") {
            resolve('Votre voiture sera réparée dans 24h');
        } else {
            reject('Désolé on ne sait pas réparer ce type de véhicule')
        }
    });
}

/**
 * Une fois la fonction déclarée lors de son appel si la fonction réussit on va pouvoir appeler la valeur retournée via "then"
 * Sinon en cas d'échec de la fonction on renverra dans une callback la valeur via ".catch"
 */
reparerVehicule('Voiture')
.then(success => console.log(success))
.catch(error => console.log(error))