const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 5000;
const bookRoute = require('./src/routes/bookRoute');

app.use(cors());
app.use(bodyParser.json());

// CONNECT MONGODB
const connectToMongo = async () => {
   await mongoose.connect(process.env.MONGODB_URL);
   console.log('Connected to MongoDB---->');
};

connectToMongo();

// ROUTES
app.use('/api/book', bookRoute);

app.listen(port, () => {
   console.log(`-------Connecting to port ${port}-------->`);
});
