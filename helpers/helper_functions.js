const request = require('request');

let getCurrencyById = (id, callback) => {
  request.get(`https://api.coinmarketcap.com/v1/ticker/${id}`, callback);   
}

module.exports.getCurrencyById = getCurrencyById;