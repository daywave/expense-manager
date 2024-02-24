const express = require('express');
const middleman = require('./middleman');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use('/', middleman);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});