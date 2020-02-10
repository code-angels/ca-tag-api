

const mongoose = require('mongoose');

console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL).then(

  () => {
    console.log('connected');
  },

  err => {
    console.log('error');
  }

);