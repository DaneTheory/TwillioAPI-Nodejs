var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();

var accountSid = 'enterYourAccountSID'; 
var authToken = 'enterYourAuthToken'; 

var client = require('twilio')(accountSid, authToken); 


app.use(bodyParser.urlencoded({extended: true}));

app.listen(38000, function () {
    console.log('Twilio API listening on port 38000');
});


app.post('/twilio', function(request,response) {

client.messages.create({ 
    to: request.body.phoneNumber, 
    from: "+16473606639", 
    body: "Sent from node script!",   
}, function(err, message) { 
    if(!err){
        response.sendStatus(200);
    }
    else{
        response.sendStatus(500);
    }
    });

});