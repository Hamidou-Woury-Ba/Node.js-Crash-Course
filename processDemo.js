// argv
console.log(process.argv[3])
// Affiche le quatrième argument passé à la ligne de commande (les arguments sont indexés à partir de 2)


// process .env
console.log(process.env)
// Affiche les variables d'environnement du processus actuel sous forme d'objet


// process pid
console.log(process.pid)
// Affiche l'ID de processus (PID) du processus Node.js en cours d'exécution


// cwd
console.log(process.cwd())
// Affiche le répertoire de travail actuel à partir duquel le processus Node.js a été lancé


// title
console.log(process.title)
// Affiche le titre du processus Node.js. Par défaut, c'est 'node', mais il peut être modifié


// memoryUsage()
console.log(process.memoryUsage())
// Affiche un objet décrivant l'utilisation de la mémoire du processus, y compris la mémoire RSS, heapTotal, heapUsed, et external


// uptime()
console.log(process.uptime())
// Affiche le temps écoulé en secondes depuis que le processus Node.js a démarré


// Gestionnaire de l'événement 'exit'
process.on('exit', (code) => {
    console.log(`About to exit with code : ${code}`)
})
// Enregistre un gestionnaire d'événement pour l'événement 'exit', qui est appelé lorsque le processus est sur le point de se terminer


// exit()
process.exit(0)
// Termine le processus avec le code de sortie 0 (indiquant un succès)
// Le gestionnaire 'exit' ci-dessus sera appelé avant que le processus se termine

console.log('Hello from after exit')
// Cette ligne ne sera jamais exécutée car le processus se termine immédiatement après l'appel de process.exit(0)
