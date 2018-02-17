const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cryptodb');

let currencySchema = mongoose.Schema({
  _id: String,
  name: String,
  symbol: String,
  price_usd: String
});

let Portfolio = mongoose.model('Currency', currencySchema);

let save = (c) => {
  let newCurrency = new Currency({
    _id: c.id,
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



module.exports.save = save;