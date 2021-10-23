const express = require('express');
const cool = require('cool-ascii-faces')
const app = express();

// テンプレートエンジンの指定
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  var data = {
    title: "Index",
    content: "これはテンプレートを使ったサンプルページです。",
  };
  // レンダリングを行う
  res.render("test", data);
  // res.send('うまく動いてます！');
  res.end();
});

app.get('/other', (req, res) => {
  var data = {
    title: "Other",
    content: "これは新しく用意したページです。",
  };
  // レンダリングを行う
  res.render("testother", data);
  // res.send('うまく動いてます！');
  res.end();
});

app.get('/cool', (req, res) => {
    res.send(cool());
  });

// 5000番ポートで待機
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`${PORT}番のポートで待機中です...`);
});