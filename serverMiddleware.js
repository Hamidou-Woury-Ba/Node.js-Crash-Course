import { createServer } from 'http'

const PORT = process.env.PORT 
// Liste des utilisateurs (simule une base de données en mémoire)
const users = [
    { id: 1, title: 'Hamidou Woury Ba' },
    { id: 2, title: 'Moussa Diallo' },
    { id: 3, title: 'Mamadou Tahirou Ba' }
]

// Middleware pour la journalisation des requêtes
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`) // Affiche la méthode HTTP et l'URL de la requête dans la console
    next() // Passe au middleware suivant
}

// Middleware pour définir l'en-tête Content-Type sur 'application/json'
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json') // Définit le type de contenu comme JSON
    next() // Passe au middleware suivant
}

// Gestionnaire de route pour GET /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users)) // Convertit la liste des utilisateurs en JSON et l'envoie dans la réponse
    res.end() // Termine la réponse
}

// Gestionnaire de route pour GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3] // Récupère l'ID utilisateur à partir de l'URL
    const user = users.find((u) => u.id === parseInt(id)) // Trouve l'utilisateur correspondant à l'ID

    if (user) {
        res.write(JSON.stringify(user)) // Convertit l'utilisateur trouvé en JSON et l'envoie dans la réponse
    } else {
        res.statusCode = 404 // Définit le code de statut HTTP à 404 pour "Non trouvé"
        res.write(JSON.stringify({ message: 'User not found' })) // Envoie un message d'erreur en JSON
    }
    res.end() // Termine la réponse
}

// Gestionnaire de route pour POST /api/users
const createUserHandler = (req, res) => {
    let body = '' // Variable pour stocker les données du corps de la requête
    // Écoute les morceaux de données envoyés dans la requête
    req.on('data', (chunk) => {
        body += chunk.toString() // Concatène chaque morceau de données reçu
    })
    req.on('end', () => {
        const newUser = JSON.parse(body) // Convertit les données JSON reçues en objet
        users.push(newUser) // Ajoute le nouvel utilisateur à la liste des utilisateurs
        res.statusCode = 201 // Définit le code de statut HTTP à 201 pour "Créé"
        res.write(JSON.stringify(newUser)) // Convertit le nouvel utilisateur en JSON et l'envoie dans la réponse
        res.end() // Termine la réponse
    })
}

// Gestionnaire de route pour les routes non trouvées
const notFoundHandler = (req, res) => {
    res.statusCode = 404 // Définit le code de statut HTTP à 404 pour "Non trouvé"
    res.write(JSON.stringify({ message: 'Route not found' })) // Envoie un message d'erreur en JSON
    res.end() // Termine la réponse
}

// Crée un serveur HTTP
const server = createServer((req, res) => {
    logger(req, res, () => { // Appelle le middleware de journalisation
        jsonMiddleware(req, res, () => { // Appelle le middleware JSON
            // Vérifie la méthode HTTP et l'URL pour déterminer quel gestionnaire utiliser
            if (req.url === '/api/users' && req.method === 'GET') {
                getUsersHandler(req, res) // Gère les requêtes GET pour /api/users
            } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
                getUserByIdHandler(req, res) // Gère les requêtes GET pour /api/users/:id
            } else if (req.url === '/api/users' && req.method === 'POST') {
                createUserHandler(req, res) // Gère les requêtes POST pour /api/users
            } else {
                notFoundHandler(req, res) // Gère les requêtes pour les routes non trouvées
            }
        })
    })
})

// Démarre le serveur sur le port spécifié
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`) // Affiche un message dans la console lorsque le serveur est en cours d'exécution
})
