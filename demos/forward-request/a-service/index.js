const express = require('express')

const app = express()

app.get('/this-a', (req, res) => {
  console.log(req.headers, req.body)
  res.json({
    code: 0,
    msg: 'this a get',
  })
})

app.post('/this-a', (req, res) => {
  let str = ''
  req.on('data', chunk => {
    str += chunk
  })

  req.on('end', () => {
    console.log(req.headers, req.body)
    console.log(str, 'layouwen')

    res.json({
      code: 0,
      msg: 'this a post',
    })
  })
})

app.listen(7823, () => {
  console.log('Server listening on port 7823')
})
