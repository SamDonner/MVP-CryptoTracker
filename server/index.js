
let express = require('express');
let bodyParser = require('body-parser');
let items = require('../database');
let helpers = require('../helpers/helper_functions');
let database = require('../database/index');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/currencies', function(req, res) {
  helpers.getCurrencyById(req.body.id, function(error, response, body){
  	let parsedData = JSON.parse(body);
  	console.log('line16', parsedData)
  	database.save(parsedData);
  	console.log('line18', body)
    res.send(body);
  });
  
});

app.get('/currencies', function(req, res) {
  let sendDataToClient = function(data) {
  	res.write(JSON.stringify(data))
  	res.end();
  }
  database.retrieve(sendDataToClient);
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});