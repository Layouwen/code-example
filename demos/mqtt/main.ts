const mqtt = require('mqtt')
const client = mqtt.connect('ws://localhost:1883')

const topics = {
  SWITCH_REGION: 'SWITCH_REGION',
  TIMELINE_UPDATE: 'TIMELINE_UPDATE',
}

client.on('connect', function () {
  console.log('Connected to MQTT server ✅')

  client.subscribe(topics.SWITCH_REGION, function (err) {
    if (!err) {
      // client.publish(topics.SWITCH_REGION, JSON.stringify({ tag: { id: '6', tagId: '6' } }))
      client.publish(topics.TIMELINE_UPDATE, JSON.stringify({ tagId: 1, visitNumber: 2, timeline: { aa: '2023-02-23T03:59:06.847Z' } }))
    }
  })
})

client.on('message', function (topic, message) {
  console.log(topic)
  console.log(message.toString())
})
