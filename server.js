import http from 'http' // Importer le module http

const PORT = 8000 // Définir le port sur lequel le serveur va écouter

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
    // Écrire une réponse avec le texte 'Hello World'
    res.write('Hello Word')
    // Terminer la réponse
    res.end()
})

// Le serveur écoute sur le port spécifié
server.listen(PORT, () => {
    // Afficher un message dans la console indiquant que le serveur fonctionne
    console.log(`Server running on port ${PORT}`)
})
