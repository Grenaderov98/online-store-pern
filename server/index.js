require('dotenv').config();
const express = require('express');
const dbConnector = require('./db');
const models = require('./models/models');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/client', (req, res) => {
  res.status(200).json({message: 'Work'})
});

app.post('/api/client', (req, res) => {
  res.status(200).json({message: 'Hello'})
})

const start = async() => {
  try {
    await dbConnector.authenticate();
    await dbConnector.sync();
    app.listen(process.env.PORT, () => console.log(`Server start listen in  port ${process.env.PORT}...`))
  } catch (error) {
    console.log(error.message)
  }
}

start();