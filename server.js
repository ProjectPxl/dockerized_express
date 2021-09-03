const express   = require('express');
const app       = express();
const connectDb = require("./src/connection");

const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Up and Running Dockerized Epxress!!!")
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);

    connectDb().then(() => {
        console.log("MongoDb connected");
    });
});