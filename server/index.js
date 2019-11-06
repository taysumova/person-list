require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3000;

//  Middleware
app.use(express.json());
app.use(cors());


// Routes
const usersRouter = require('./routes/userRoute');
app.use('/users', usersRouter);

const personsRouter = require('./routes/personRoute');
app.use('/persons', personsRouter);

const listsRouter = require('./routes/listRoute');
app.use('/lists', listsRouter);


// MongoDB connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
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
