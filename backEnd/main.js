/* ----- Package Imports ----- */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

/* ----- Routes Imports ----- */
const gamesRoutes = require('./routes/games.routes');

/* ----- Initializations ----- */
const app = express();
mongoose.connect(`mongodb://127.0.0.1/GameZero`);

/* ----- Global Middlewares ----- */
app.use(express.json());
app.use(cors());

/* ----- Using Routes ----- */
app.use(gamesRoutes);


/* ----- App Startup ----- */
app.listen(3000, () => {
    console.log("App started on: http://localhost:3000")
});