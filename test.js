const express = require('express');
const cool = require('cool-ascii-faces')
const app = express();

app.get('/', (req, res) => {
  res.send('うまく動いてます！');
});

app.get('/cool', (req, res) => {
    res.send(cool());
  });

// 5000番ポートで待機
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`${PORT}番のポートで待機中です...`);
});