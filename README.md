# Star Wars REST API

Cette API REST fournit des informations sur l'univers Star Wars, telles que les films, les personnages, les planètes, les espèces, les vaisseaux spatiaux, les transports et les véhicules.

## Prérequis

Avant de pouvoir exécuter l'API, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- Node.js (version 14 ou supérieure)
- MongoDB (ou utilisez un service de base de données MongoDB distant)

## Installation

1. Clonez ce dépôt de code sur votre machine
2. Accédez au répertoire du projet
3. Installez les dépendances : npm i


## Configuration

Avant de lancer le serveur, vous devez configurer l'accès à la base de données MongoDB. Ouvrez le fichier `config.js` et modifiez la valeur de `DB_URL` avec l'URL de votre base de données MongoDB.

## Lancement du serveur

Pour démarrer le serveur : npm run start


Le serveur démarrera et sera accessible à l'adresse `http://localhost:3000`.

## Points d'accès

L'API expose les points d'accès suivants :

- `GET /films` : Obtenez la liste des films Star Wars.
- `GET /people` : Obtenez la liste des personnages Star Wars.
- `GET /planets` : Obtenez la liste des planètes Star Wars.
- `GET /species` : Obtenez la liste des espèces Star Wars.
- `GET /starships` : Obtenez la liste des vaisseaux spatiaux Star Wars.
- `GET /transports` : Obtenez la liste des transports Star Wars.
- `GET /vehicles` : Obtenez la liste des véhicules Star Wars.

Pour plus de détails sur les paramètres et les réponses de chaque point d'accès, veuillez consulter la documentation de l'API.

## Architecture de l'API

L'API suit une architecture RESTful et respecte les principes de Richardson, qui sont les suivants :

- Ressources identifiées par des URI : Chaque entité de l'API est identifiée par une URI unique.
- Utilisation des méthodes HTTP : Les opérations CRUD sont associées aux méthodes HTTP appropriées (GET, POST, PUT, DELETE).
- Échange de représentations : Les données sont échangées entre le client et le serveur sous forme de représentations, telles que JSON.
- Hypermédia : Les réponses de l'API peuvent contenir des liens hypertexte pour naviguer entre les ressources.

---







