import http from 'http' // Importer le module http
import fs from 'fs/promises' // Importer le module fs avec les promesses pour lire les fichiers de manière asynchrone
import url from 'url' // Importer le module url pour travailler avec les URLs
import path from 'path' // Importer le module path pour travailler avec les chemins de fichiers

const PORT = process.env.PORT // Définir le port sur lequel le serveur va écouter, en utilisant la variable d'environnement PORT

// Obtenir le nom du fichier actuel et le répertoire actuel
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)   

// Créer un serveur HTTP
const server = http.createServer(async (req, res) => { // Utilisation de la fonction asynchrone pour gérer les requêtes

    try {
        if(req.method === 'GET'){ // Vérifier si la méthode HTTP est GET

            let filePath // Déclarer la variable pour le chemin du fichier

            if(req.url === '/'){ // Si l'URL demandée est la racine
                // res.writeHead(200, { 'Content-Type' : 'text/html'})
                // res.end('<h1> Homepage </h1>') // Terminer la réponse avec un 
                filePath = path.join(__dirname, 'public', 'index.html') // Définir le chemin du fichier index.html
            }else if(req.url === '/about'){ // Si l'URL demandée est /about
                // res.writeHead(200, { 'Content-Type' : 'text/html'})
                // res.end('<h1> About </h1>')
                filePath = path.join(__dirname, 'public', 'about.html') // Définir le chemin du fichier about.html
            }else{
                // res.writeHead(404, { 'Content-Type' : 'text/html'})
                // res.end('<h1> Not Found </h1>') 
                throw new Error('Not Found') // Lancer une erreur si l'URL demandée n'est pas trouvée
            }

            const data = await fs.readFile(filePath) // Lire le fichier de manière asynchrone
            res.setHeader('Content-Type', 'text/html') // Définir l'en-tête de la réponse HTTP
            res.write(data) // Écrire le contenu du fichier dans la réponse
            res.end() // Terminer la réponse

        }else{
            throw new Error('Method not allowed') // Lancer une erreur si la méthode HTTP n'est pas GET
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type' : 'text/plain'}) // Définir l'en-tête de la réponse pour une erreur serveur
        res.end('Server Error') // Terminer la réponse avec un message d'erreur
    }

})

// Le serveur écoute sur le port spécifié
server.listen(PORT, () => {
    // Afficher un message dans la console indiquant que le serveur fonctionne
    console.log(`Server running on port ${PORT}`)
})
