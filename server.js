require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Film = require('./models/film');
const People = require('./models/people');
const Planet = require('./models/planet');
const Specie = require('./models/specie');
const Starship = require('./models/starship');
const Transport = require('./models/transport');
const Vehicle = require('./models/vehicle');

const app = express();
const PORT = process.env.PORT || 3000;

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Définition du moteur de modèle EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', async (req, res) => {
  try {
    const films = await Film.find();
    const peoples = await People.find();
    const planets = await Planet.find();
    const species = await Specie.find();
    const starships = await Starship.find();
    const transports = await Transport.find();
    const vehicles = await Vehicle.find();

    res.render('index', {
      films,
      peoples,
      planets,
      species,
      starships,
      transports,
      vehicles,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
