const mongoose = require('mongoose');
const config = require('config');
const dbUri = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    
    process.exit(1);
  }
};

module.exports = connectDB;
