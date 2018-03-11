var express     = require('express'),
    app         = express(),
    port        = process.env.PORT || 3000,
    mongoose    = require('mongoose'),
    Task        = require('./api/models/todoListModel'),
    bodyParser  = require('body-parser'),
    routes      = require('./api/routes/todoListRoutes');


// ENV
require('dotenv').config();

// Mogoose connect
function connectDB(err) {
  if(err) {
    console.log('Erro ao connectar no mongo' + err);
  } else {
    console.log('Conexão com o mongo realizada');
  }
}

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV == 'development') {
  mongoose.connect('mongodb://127.0.0.1:27017/toodListApi', connectDB);
} else {
  mongoose.connect('a', connectDB);
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, function() {
  console.log('API started on port: ' + port);
});