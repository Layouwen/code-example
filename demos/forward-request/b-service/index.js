const express = require('express')

const app = express()

app.get('/this-b', (req, res) => {
  console.log(req.headers, req.body)
  res.json({
    code: 0,
    msg: 'this b',
  })
})

app.listen(7824, () => {
  console.log('Server listening on port 80')
})
