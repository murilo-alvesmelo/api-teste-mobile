const express = require('express');
const cors = require('cors')
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3001;

app.use(cors())

app.get('/propriedades', function (req, res) {
  fs.readFile('./src/api/propriedades.json', function (err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json);
  });
});
app.get('/propriedades/:id', function (req, res) {
  fs.readFile('./src/api/propriedades.json', function (err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json.propriedades[req.params.id]);
  });
});

app.get('/produtores', function (req, res) {
  fs.readFile('./src/api/produtores.json', function (err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json);
  });
});
app.get('/produtores/:id', function (req, res) {
  fs.readFile('./src/api/produtores.json', function (err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json.produtores[req.params.id]);
  });
});

app.get('/usuarios', function (req, res) {
  fs.readFile('./src/api/usuarios.json', function (err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json);
  });
});
app.get('/usuarios/:id', function (req, res) {
  fs.readFile('./src/api/usuarios.json', function (err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json.usuarios[req.params.id]);
  });
});


app.get('/vinculos', function (req, res) {
  fs.readFile('./src/api/vinculos.json', function (err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json);
  });
});
app.get('/vinculos/:id', function (req, res) {
  fs.readFile('./src/api/vinculos.json', function (err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    res.send(json.vinculos[req.params.id]);
  });
});
app.get('/vinculosPropriedade/:id', function(req, res) {
  fs.readFile('./src/api/vinculos.json', function(err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    const propriedade = json.vinculos.filter(item => item.idPropriedade === parseInt(req.params.id));
    
    if(propriedade.length > 0) {
      res.send(propriedade)
    }else{
      res.status(404).send('Nenhuma propriedade encontrada')
    }
  });
});
app.get('/findNumeroCar/:numeroCar', function (req, res) {
  fs.readFile('./src/api/propriedades.json', function (err, data) {
    if (err) {
      throw err;
    }
    const json = JSON.parse(data);
    const propriedade = json.propriedades.filter(item => item.numeroCar === req.params.numeroCar)

    if(propriedade) {
      res.send(propriedade)
    }else{
      res.status(404).send('Nenhuma propriedade foi encontrada')
    }
  });
});

app.listen(port, function () {
  console.log(`Servidor iniciado na porta ${port}`);
});