var mongoose = require("mongoose");
var contactos = mongoose.model("contactos");

//GET - Return all tvshows in the DB
exports.findContact = function (req, res) {
  contactos.find(function (err, contacts) {
    if (err) res.send(500, err.message);

    console.log("GET /contacts");
    res.status(200).jsonp(contacts);
  });
};



/*exports.findById = function(req, res) {
   contactos.findById(req.params.id, function(err, contacts) {
    if(err) return res.send( 500. err. message);

    console.log('GET /contacts/' + req.params.id);
        res.status(200).jsonp(tvshow);
    });
};*/

