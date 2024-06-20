const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + "/html" });
})

app.use(express.static('html'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
