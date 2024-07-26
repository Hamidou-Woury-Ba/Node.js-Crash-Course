import http from 'http' // Importer le module http

const PORT = 8000 // Définir le port sur lequel le serveur va écouter

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
     
    // res.setHeader('Content-Type', 'text/html') //Changer l'affichage de la réponse dans notre cas avec du html
    // res.statusCode = 404

    res.writeHead(500, { 'Content-Type' : 'text/html'})
    // res.end(JSON.stringify({ message: 'Server Error' }))
    
    res.end('<h1> Hello Word </h1>') // Terminer la réponse avec un message
})

// Le serveur écoute sur le port spécifié
server.listen(PORT, () => {
    // Afficher un message dans la console indiquant que le serveur fonctionne
    console.log(`Server running on port ${PORT}`)
})
