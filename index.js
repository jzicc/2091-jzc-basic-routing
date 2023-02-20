//Carreon, John Zacqueo I.
//1.
//2.
//3.

const express = require('express');
const app = express();

//
app.use(express.static('public'));

//

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

//
const port = process.nextTick.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
