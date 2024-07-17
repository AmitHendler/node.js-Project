const express = require('express');
const connectDB = require('./config/db.js');
const morgan = require('morgan');
const cors = require('cors');
const chalk = require('chalk');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

connectDB();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/users', require('./routes/users'));
app.use('/api/cards', require('./routes/cards'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(chalk.green(`Server running on port ${PORT}`)));
