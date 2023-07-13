const RTSP2web = require('./rtsp-to-h264-flv.min.js')

new RTSP2web({
  port: 4384,
  audio: !!process.env.AUDIO,
  transportType: 'tcp',
  webplayer: process.env.WEBPLAYER || 'jsmpeg',
})
