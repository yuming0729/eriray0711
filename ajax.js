const express = require('express');
const app = express();

const form = document.getElementById("appointment-form");

form.addEventListener('submit',function(e)  {
    e.preventDefault();

    const payload = new FormData(form);

    console.log([...payload])




// 下面是你的代码
app.post('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('Hello World!');
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(payload));
});

});





