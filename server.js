const express = require('express');
const cors = require('cors')
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3001;

app.use(cors())

app.get('/', function(req, res) {
  fs.readFile('./src/api/processo-seletivo-front.json', function(err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json);
  });
});
app.get('/monitoramentos', function(req, res) {
  fs.readFile('./src/api/processo-seletivo-front.json', function(err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json.monitoramentos);
  });
});
app.get('/monitoramentos/:id', function(req, res) {
  fs.readFile('./src/api/processo-seletivo-front.json', function(err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json.monitoramentos[req.params.id]);
  });
});
app.get('/propriedades', function(req, res) {
  fs.readFile('./src/api/processo-seletivo-front.json', function(err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json.propriedades);
  });
});
app.get('/produtores', function(req, res) {
  fs.readFile('./src/api/processo-seletivo-front.json', function(err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json.produtores);
  });
});
app.get('/vinculo', function(req, res) {
  fs.readFile('./src/api/processo-seletivo-front.json', function(err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json.vinculo);
  });
});
app.get('/vinculo/:id', function(req, res) {
  fs.readFile('./src/api/processo-seletivo-front.json', function(err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json.vinculo[req.params.id]);
  });
});
app.get('/produtores/:id', function(req, res) {
  fs.readFile('./src/api/processo-seletivo-front.json', function(err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json.produtores[req.params.id]);
  });
});
app.get('/propriedades/:id', function(req, res) {
  fs.readFile('./src/api/processo-seletivo-front.json', function(err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json.propriedades[req.params.id]);
  });
});

app.listen(port, function() {
  console.log(`Servidor iniciado na porta ${port}`);
});