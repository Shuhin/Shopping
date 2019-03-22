const Mongoose = require('mongoose');

const Express = require('express');

const BodyParser = require('body-parser');

const items = require('./routes/api/items');


const app = Express();

app.use(BodyParser.json());

Mongoose.connect("mongodb://localhost/list", (err, db) => {
  if (err) {
    return console.log('Unable to Connect');
  }
  console.log('Connected');
});

app.use('/api/items', items )

const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Server started on port ${port}`))
