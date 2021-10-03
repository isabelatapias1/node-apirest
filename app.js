var express = require("express"),
app = express(),
http = require("http"),
server= http.createServer(app),
bodyparser = require ("body-parser"),
methodOverride = require ("method-override");
mongoose = require ("mongoose");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(methodOverride());

var router = express.Router();

router.get("/", function(req, res){
    res.send("hola");
});

app.use(router);

mongoose.connect("mongodb://localhost/contactos", function (err,res){
    if(err){
        console.log("ERORR: connecting to Database " + err);
    }

app.listen(3001, function() {
    console.log("Node server running on http://localhost:3001");

    });
});