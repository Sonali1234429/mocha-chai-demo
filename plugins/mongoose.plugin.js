const Mongoose = require('mongoose');

//mongodb+srv://samarjit:Samarjit$4@cluster0.5drjh.mongodb.net/test
const LOCAL_DEV_URI = 'mongodb://localhost:27017/sashank-db';
const DEV_URI = 'mongodb+srv://samarjit:Samarjit$4@cluster0.5drjh.mongodb.net/sashank-db?retryWrites=true&w=majority';
const TEST_URI = 'mongodb+srv://samarjit:Samarjit$4@cluster0.5drjh.mongodb.net/sashank-db-test?retryWrites=true&w=majority';

const MongoosePlugin = {
  name: 'MongoosePlugin',
  pkg: require('../package.json'),
  register: function (server, options) {
    Mongoose.connect(DEV_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    //error while connected to mongodb
    Mongoose.connection
      .once('open', () => {
        console.log('Database connected');
      })
      .catch((err) => {
        console.log('Databse error');
      });
  },
};

module.exports = MongoosePlugin;
