import http from 'http' // Importer le module http

const PORT = process.env.PORT // Définir le port sur lequel le serveur va écouter

// Créer un serveur HTTP
const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.writeHead(200, { 'Content-Type' : 'text/html'})
        res.end('<h1> Homepage </h1>') // Terminer la réponse avec un message
    }else if(req.url === '/about'){
        res.writeHead(200, { 'Content-Type' : 'text/html'})
        res.end('<h1> About </h1>')
    }else{
        res.writeHead(404, { 'Content-Type' : 'text/html'})
        res.end('<h1> not found </h1>') 
    }
})

// Le serveur écoute sur le port spécifié
server.listen(PORT, () => {
    // Afficher un message dans la console indiquant que le serveur fonctionne
    console.log(`Server running on port ${PORT}`)
})
