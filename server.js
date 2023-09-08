const express = require('express');
const bodyParser = require('body-parser')
const { nouns, one } = require('nouns');
var adj = require('adjectives');

const server = express();
const port = 3000;

var firstTime = true;

server.use(bodyParser.urlencoded({extended: true}));
server.use("/sass",express.static(__dirname + "/sass"))
server.get("/", (req,res)=>{
    res.render(__dirname +"/index.ejs");
});

server.post("/submit",(req,res)=>{
    firstTime = false;
    var name = one();
    var index = Math.floor(Math.random() * adj.length);
    var adject = adj[index];
    adject = adject.charAt(0).toUpperCase() + adject.slice(1);
    name = name.charAt(0).toUpperCase() + name.slice(1);

    var data = {
        bandName: name,
        adjectiv: adject
    }
    res.render(__dirname +"/index.ejs",data);
})

server.listen(port, ()=>{
    console.log("Server is running");
})
