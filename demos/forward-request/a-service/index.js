const express = require('express')

const app = express()

app.get('/this-a', (req, res) => {
  console.log(req.headers, req.body)
  res.json({
    code: 0,
    msg: 'this a',
  })
})

app.listen(7823, () => {
  console.log('Server listening on port 80')
})
