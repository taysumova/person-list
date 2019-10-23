const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//  Middleware
app.use(bodyParser.json());
app.use(cors());

const persons = require('./routes/api/persons');

app.use('/api/persons', persons);

// Handle production
if(process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "public/index.html"));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
