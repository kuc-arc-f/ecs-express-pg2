
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors')

const routes = require('./routes/index');
const tasksRouter = require('./routes/tasks');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//express-sessionモジュールを設定する
app.use(session({
  //暗号化に利用するキーを設定
  secret: 'secret key',
  //毎回セッションを作成しない
  resave: false,
  //未初期化状態のセッションを保存しない
  saveUninitialized: false,
  cookie: {
    //生存期間は3日
    maxAge: 3 * 24 * 60 * 1000,
    //httpsを使用しない
    secure: false
  }
}));
// route
app.use('/', routes);
app.use('/tasks', tasksRouter);
//
app.get('/', (req, res) => {
  try {
    res.send({ name: "top-33" });
  } catch (error) {
    res.sendStatus(500);
  }
});

//app.listen(process.env.PORT || 3000);
//const PORT = 4000;
const PORT = 3000;

app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
console.log('start');
