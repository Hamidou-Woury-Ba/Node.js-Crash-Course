import crypto from 'crypto'

// Importation du module 'crypto' pour utiliser les fonctions cryptographiques

// Les lignes suivantes sont commentées, elles montrent comment créer un hash SHA-256 d'une chaîne de caractères
// const hash = crypto.createHash('sha256') 
// hash.update('password1234') 
// console.log(hash.digest('hex')) 

// Génération de bytes aléatoires
// crypto.randomBytes(16, (err, buf) => {
//     if(err) throw err
//     console.log(buf.toString('hex'))
// })

// Définition de l'algorithme de chiffrement à utiliser
const algorithm = 'aes-256-cbc'
// Génération d'une clé aléatoire de 32 bytes (256 bits) pour l'algorithme AES-256
const key = crypto.randomBytes(32)
// Génération d'un vecteur d'initialisation (IV) aléatoire de 16 bytes
const iv = crypto.randomBytes(16)

// Création d'un objet Cipher pour chiffrer les données en utilisant AES-256-CBC avec la clé et l'IV générés
const cipher = crypto.createCipheriv(algorithm, key, iv)
// Chiffrement d'un message en 'utf-8' et conversion en 'hex'
let encrypted = cipher.update('hello, this is a secret message', 'utf-8', 'hex')
encrypted += cipher.final('hex')
console.log(encrypted)
// Affichage du message chiffré

// Création d'un objet Decipher pour déchiffrer les données en utilisant AES-256-CBC avec la même clé et l'IV
const decipher = crypto.createDecipheriv(algorithm, key, iv)
// Déchiffrement du message chiffré de 'hex' à 'utf-8'
let decrypted = decipher.update(encrypted, 'hex', 'utf-8')
decrypted += decipher.final('utf-8')
console.log(decrypted)
// Affichage du message déchiffré
