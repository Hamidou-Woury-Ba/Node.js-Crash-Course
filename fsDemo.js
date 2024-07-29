// Importation des fonctions de la bibliothèque 'fs/promises' pour utiliser les promesses avec le système de fichiers
import fs from 'fs/promises'

// Ancien code commenté utilisant des callbacks et des opérations synchrones avec 'fs'
// import fs from 'fs' // Bibliothèque pour les opérations de système de fichiers

// readFile() avec callback
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if(err) throw err // En cas d'erreur, lancer une exception
//     console.log(data) // Afficher le contenu du fichier dans la console
// })

// readFileSync() - version synchrone
// const data = fs.readFileSync('./test.txt', 'utf-8')
// console.log(data) // Lire et afficher le contenu du fichier de manière synchrone

// readFile() avec Promise .then()
// fs.readFile('./test.txt', 'utf-8')
//     .then((data) => console.log(data)) // Afficher le contenu du fichier en utilisant des promesses
//     .catch((err) => err) // Gérer les erreurs éventuelles

// readFile() avec async/await
const readFile = async () => {
    try {
        // Lire le contenu du fichier 'test.txt' de manière asynchrone
        const data = await fs.readFile('./test.txt', 'utf-8')
        console.log(data) // Afficher le contenu du fichier
    } catch (error) {
        console.log(error) // Afficher toute erreur éventuelle
    }
}

// writeFile() - écrire dans un fichier
const writeFile = async () => {
    try {
        // Écrire dans le fichier 'test.txt'
        await fs.writeFile('./test.txt', 'Hello, I am writing to this file')
        console.log('File written to ...') // Confirmer l'écriture du fichier
    } catch (error) {
        console.log(error) // Afficher toute erreur éventuelle
    }
}

// appendFile() - ajouter du texte à un fichier
const appendFile = async () => {
    try {
        // Ajouter du texte au fichier 'test.txt'
        await fs.appendFile('./test.txt', '\nThis is appended text')
        console.log('File appended to ...') // Confirmer l'ajout de texte au fichier
    } catch (error) {
        console.log(error) // Afficher toute erreur éventuelle
    }
}

// Appeler les fonctions définies pour écrire, ajouter et lire le fichier
writeFile()   // Appeler la fonction pour écrire dans le fichier
appendFile()  // Appeler la fonction pour ajouter du texte au fichier
readFile()    // Appeler la fonction pour lire le contenu du fichier
