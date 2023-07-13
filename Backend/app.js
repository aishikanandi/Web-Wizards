//jshint esversion: 6
const express = require('express');
const request = require('request');
const https = require('https');
const bodyParser = require('body-parser');
const app= express();
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
app.post('/', function(req, res){
    const { firstName, lastName, email } = req.body;
    const data = {
        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    const json = JSON.stringify(data);
    const apiKey = '3de02b8a2c1404fec47cc56249c1477c-us21';
    const base64ApiKey = Buffer.from(`apikey:${apiKey}`).toString('base64');
    const url =  "https://us21.api.mailchimp.com/3.0/lists/685a907821";
    const options = {
        method: 'POST',
        headers: {
          Authorization: `Basic ${base64ApiKey}`,
          'Content-Type': 'application/json',
        },
    }
    const request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
            res.json({ message: 'Success' });
        })
    });
    request.write(json); 
    request.end();
});
// app.post('/failure', function(req, res){
//     res.redirect('/');
// });
app.listen(5000, function(){
    console.log('Started server at 5000');
})
// 1bf4eac86041a6875201274c40127497-us9
// 927d151162