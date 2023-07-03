const express = require('express')
const httpProxy = require('http-proxy')

const app = express()
const proxy = httpProxy.createProxyServer({})

const targetUrls = ['http://localhost:7823/this-a', 'http://localhost:7824/this-b']

app.use('/jieshou', (req, res) => {
  const requests = targetUrls.map(targetUrl => {
    return new Promise((resolve, reject) => {
      proxy.web(req, res, { target: targetUrl }, err => {
        reject(err)
      })
    })
  })

  Promise.all(requests).catch(err => {
    console.error('Error forwarding request:', err)
    res.status(500).send('Error forwarding request')
  })
})

// 启动服务器
app.listen(80, () => {
  console.log('Server listening on port 80')
})
