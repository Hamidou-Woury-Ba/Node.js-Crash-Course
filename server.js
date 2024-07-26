import http from 'http' // Importer le module http
import fs from 'fs/promises'
import url from 'url'
import path from 'path'

const PORT = process.env.PORT // Définir le port sur lequel le serveur va écouter

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)   

// Créer un serveur HTTP
const server = http.createServer(async (req, res) => {

    try {
        if(req.method === 'GET'){

            let filePath

            if(req.url === '/'){
                // res.writeHead(200, { 'Content-Type' : 'text/html'})
                // res.end('<h1> Homepage </h1>') // Terminer la réponse avec un 
                filePath = path.join(__dirname, 'public', 'index.html')
            }else if(req.url === '/about'){
                // res.writeHead(200, { 'Content-Type' : 'text/html'})
                // res.end('<h1> About </h1>')
                filePath = path.join(__dirname, 'public', 'about.html')
            }else{
                // res.writeHead(404, { 'Content-Type' : 'text/html'})
                // res.end('<h1> Not Found </h1>') 
                throw new Error('Not Found')
            }

            const data = await fs.readFile(filePath)
            res.setHeader('Content-Type', 'text/html')
            res.write(data)
            res.end()

        }else{
            throw new Error('Method not allowed')
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type' : 'text/plain'})
        res.end('Server Error') 
    }

})

// Le serveur écoute sur le port spécifié
server.listen(PORT, () => {
    // Afficher un message dans la console indiquant que le serveur fonctionne
    console.log(`Server running on port ${PORT}`)
})
