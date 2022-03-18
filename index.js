const mqtt = require('mqtt')

const connectUrl = `https://io.adafruit.com:1883`
const clientID = `subcriber` //random but unique
const client = mqtt.connect(connectUrl, {
  clientID,
  clean: true,
  connectTimeout: 4000,
  username: 'your username', //username in adafruit io key (My Key)
  password: 'your activekey',//active key in adafruit io key (My Key)
  reconnectPeriod: 1000,
})

const topic = 'example/feeds/temp'//fill your topic link


//subscribe to the topic
client.on('connect', () => {
  console.log('Connected')
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
    client.on('message', (topic, payload) => {
        console.log('Received Message:', topic, payload.toString())
      })
  })


  
})





