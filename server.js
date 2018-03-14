const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/public/index2.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000'));
