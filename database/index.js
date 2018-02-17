const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cryptodb');

let currencySchema = mongoose.Schema({
  id: String,
  name: String,
  symbol: String,
  price_usd: String
});

let Currency = mongoose.model('Currency', currencySchema);

let save = (c) => {
  let newCurrency = new Currency({
    id: c.id,
    name: c.name,
    symbol: c.symbol,
    price_usd: c.price_usd
  });
  newCurrency.save(function(error, currency) {
    if(error) {
      return console.error(error);
    }
  });
}

let retrieve = (callback) => {
  let query = Currency.find();
  query.select({});
  query.exec(function(error, currencies) {
    callback(currencies);
  });
}

module.exports.retrieve = retrieve;
module.exports.save = save;