const express = require('express');
const moment = require('moment');
const app = express();

app.get('/', (req, res) => {
  const currentTime = moment().format('HH:mm:ss');
  res.send(`Поточний час: ${currentTime}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер працює на порту ${PORT}`);
});
