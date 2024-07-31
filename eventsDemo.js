import { EventEmitter } from 'events'
// Importation de la classe 'EventEmitter' du module 'events' pour gérer les événements

// Création d'une instance de 'EventEmitter' pour émettre et écouter les événements
const myEmitter = new EventEmitter()

// Définition d'une fonction de gestionnaire d'événements pour saluer un utilisateur
function greetHandler(name) {
    console.log('Hello ' + name)
}

// Définition d'une fonction de gestionnaire d'événements pour dire au revoir à un utilisateur
function goodByeHandler(name) {
    console.log('GoodBye World ' + name)
}

// Enregistrement des gestionnaires d'événements
// Enregistrement de 'greetHandler' pour l'événement 'greet'
myEmitter.on('greet', greetHandler)

// Enregistrement de 'goodByeHandler' pour l'événement 'goodBye'
myEmitter.on('goodBye', goodByeHandler)

// Émission des événements
// Émission de l'événement 'greet' avec l'argument 'Hamidou' -> Appelle greetHandler('Hamidou')
myEmitter.emit('greet', 'Hamidou')

// Émission de l'événement 'goodBye' avec l'argument 'Hamidou' -> Appelle goodByeHandler('Hamidou')
myEmitter.emit('goodBye', 'Hamidou')

// Gestion des erreurs
// Enregistrement d'un gestionnaire d'événements pour l'événement 'error' qui affiche l'erreur dans la console
myEmitter.on('error', (err) => {
    console.log('An Error Occured : ', err)
})

// Simulation d'une erreur
// Émission de l'événement 'error' avec un objet Error -> Appelle le gestionnaire d'erreurs
myEmitter.emit('error', new Error('Something went wrong'))
