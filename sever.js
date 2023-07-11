// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.post('/appointments', (req, res) => {
  const { name, email, date, time } = req.body;

  // 在這裡使用表單資料做你想做的事情，例如存入資料庫等等。
  console.log(`Received appointment: ${name}, ${email}, ${date}, ${time}`);

  // 回應 JSON 格式的資料給前端。
  res.setHeader('Content-Type', 'application/json');
})
