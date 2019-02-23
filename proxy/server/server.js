const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/../public')));

app.get( '*', (req, res) => {
  res.header({
    'Cache-Control': 'no-cache'
  })
  res.sendFile(path.join(__dirname, '/../public/index.html'))
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

