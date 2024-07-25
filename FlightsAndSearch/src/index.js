const express = require("express");
const {PORT} = require("./config/serverConfig.js");

const setupAndStartServer = async () => {
    const app = express();

    app.get("/app", (req, res) => {
        res.send("Hello world");
    })

    app.listen(PORT , async() =>{
         console.log(`Server is running on port ${PORT}...`);
        //  console.log(process.env)
    } )
}

setupAndStartServer();