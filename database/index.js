const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/cryptodb'),{
  useMongoClient: true,
  promiseLibrary: global.Promise
}

let currencySchema = mongoose.Schema({
  _id: String,
  name: String,
  symbol: String,
  price_usd: String,
  percent_change_24h: String
});

let Model = mongoose.model('Currency', currencySchema);

let save = function(c) {
  let newCurrency = new Model({
    _id: c[0].id,
    name: c[0].name,
    symbol: c[0].symbol,
    price_usd: c[0].price_usd,
    percent_change_24h: c[0].percent_change_24h
  });
  newCurrency.save(function(error, currency) {
    if(error) {
      return console.error(error);
    }
  });
}

let retrieve = function (callback) {
  let query = Model.find();
  query.select({});
  query.exec(function(error, currencies) {
    callback(currencies);
  });
}

module.exports.retrieve = retrieve;
module.exports.save = save;