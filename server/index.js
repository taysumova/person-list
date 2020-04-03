require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

const port = process.env.PORT || 3000;

//  Middleware
app.use(express.json());
app.use(cors());
// secure the api with JWT
app.use(jwt());
// global error handler
app.use(errorHandler);

// Routes
const usersRouter = require('./users/user.controller');
app.use('/users', usersRouter);

const personsRouter = require('./persons/person.controller');
app.use('/persons', personsRouter);

const listsRouter = require('./lists/list.controller');
app.use('/lists', listsRouter);

const eventsRouter = require('./events/event.controller');
app.use('/events', eventsRouter);

const triggersRouter = require('./triggers/trigger.controller');
app.use('/triggers', triggersRouter);

// MongoDB connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

// Handle production
if(process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "public/index.html"));
}

app.listen(port, () => console.log(`Server started on port ${port}`));
