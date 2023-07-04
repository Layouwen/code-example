const express = require('express')

const app = express()

app.get('/this-b', (req, res) => {
  console.log(req.headers, req.body)
  res.json({
    code: 0,
    msg: 'this b',
  })
})

app.post('/this-b', (req, res) => {
  let str = ''
  req.on('data', chunk => {
    str += chunk
  })

  req.on('end', () => {
    console.log(req.headers, req.body)
    console.log(str, 'layouwen')

    res.json({
      code: 0,
      msg: 'this b post',
    })
  })
})

app.listen(7824, () => {
  console.log('Server listening on port 7824')
})
