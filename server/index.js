const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const MongoDb = require("./Database/MongoDb")

// connect to the data base 

MongoDb();

//listening to the port 

//defining application 

const app = express();

// middlewares 

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080

//listen

app.listen(PORT, () => {
    console.log(`backend started at ${PORT}`)
})