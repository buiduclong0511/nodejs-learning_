const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const cors = require('cors');
const dotenv = require('dotenv');
const slug = require("mongoose-slug-generator");
const mongoose = require("mongoose");

mongoose.plugin(slug)


const route = require("./routes");
const db = require("./config/db");

dotenv.config();

// connect to db
db.connect();

// const morgan = require('morgan');
// app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')))

const allowedOrigins = ['http://localhost:3001'];
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }

}));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.engine('hbs', handlebars({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});