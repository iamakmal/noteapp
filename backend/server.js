const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
require("dotenv").config({ path: "../.env" });
const port = process.env.PORT || 5000;

const noteRoutes = require('./routes/notesRoutes');

//This will connect with the database in MongoDB Atlas
const db = process.env.MONGO_URI;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Configured CORS so that the frontend can communicate with the backend
app.use(cors());

app.use("/api/notes", noteRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

module.exports = app;