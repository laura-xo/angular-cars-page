const express = require('express');
const router = express.Router;
const mongoose = require('mongoose');
const cors=require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config()
const Cars = require('./models/Car')


const app = express();

app.use(cors())

// app.get('/filters', (req, res, next) => {
  //  const fields = ['car_maker', 'car_model', 'year']})

app.get('/cars', async (req, res, next) => {
  try {
      const cars = await Cars.find();
     res.json(cars)
  } catch(err) {res.json({message:err})}

}); 

app.get('/cars/:id', async (req, res, next) => {
  try {
    const car = await Cars.findById(req.params.id);
    res.json(car);
  }
  catch(err) {res.json({message:err})}    
});

mongoose.connect(process.env.DB_CONNECTION, () => 
console.log('Connected to the database!'))


app.listen(8080, () => console.log('Server ready'))
