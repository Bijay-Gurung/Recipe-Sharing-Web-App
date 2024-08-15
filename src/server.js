const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const recipesRouter = require('./Routes/recipes');
const signupRouter = require('./Routes/signups');
const loginRouter = require('./Routes/login');
const cors = require('cors');

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:3000",
}));
// Routes
app.use('/recipes', recipesRouter);
app.use('/signups', signupRouter);
app.use('/login', loginRouter);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/recipe-sharing')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

