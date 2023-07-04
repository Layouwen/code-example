const express = require('express')
const httpProxy = require('http-proxy')

const app = express()
const proxy = httpProxy.createProxyServer({})

const targetUrls = ['http://localhost:7823/this-a', 'http://localhost:7824/this-b']

app.use('/jieshou', (req, res) => {
  const requests = targetUrls.map(targetUrl => {
    return new Promise((resolve, reject) => {
      proxy.web(req, res, { target: targetUrl }, (err, req, res) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  })

  Promise.all(requests)
    .then(() => {
      console.log('All requests forwarded successfully')
    })
    .catch(err => {
      console.error('Error forwarding request:', err)
      res.status(500).send('Error forwarding request')
    })
    .finally(() => {
      res.end()
    })
})

// 启动服务器
app.listen(80, () => {
  console.log('Server listening on port 80')
})
