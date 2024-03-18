const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config({path:"./.env"});
const port = process.env.PORT || 5000;

const noteRoutes = require('./routes/notesRoutes')

const db = process.env.MONGO_URI;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiesTopology: true
});

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("Successfully connected to MongoDB,");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use("/api/notes", noteRoutes);