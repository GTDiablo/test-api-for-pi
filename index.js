var express = require('express')
var cors = require('cors')
var app = express()

const PORT = 3000;

app.use(cors())

app.get('/', (req, res)=> {
    res.json({foo: 'bar', hello: 'there!'});
});

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 3000')
})