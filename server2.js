import { createServer } from 'http'
// import dotenv from 'dotenv'

// Charger les variables d'environnement à partir du fichier .env
// dotenv.config()

const PORT = process.env.PORT

const users = [
    {id : 1, title : 'Hamidou Woury Ba'},
    {id : 2, title : 'Moussa Diallo'},
    {id : 3, title : 'Mamadou Tahirou Ba'}
]

const server = createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    if(req.url === '/api/users' && req.method === 'GET'){
        res.write(JSON.stringify(users))
        res.end()
    }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[3]
        let user = users.find((u) => u.id === parseInt(id))
        if(user){
            res.write(JSON.stringify(user))
        }else{
            res.statusCode = '404'
            res.write(JSON.stringify({message : 'User not found'}))
        }
        res.end()
    }else {
        res.statusCode = '404'
        res.write(JSON.stringify({message : 'Route not found'}))
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})