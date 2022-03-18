const mqtt = require('mqtt')

const connectUrl = `https://io.adafruit.com:1883`
const clientID = `vandat2000`;
const client = mqtt.connect(connectUrl, {
  clientID,
  clean: true,
  connectTimeout: 4000,
  username: 'vandat2000',
  password: 'aio_oYAl71Po789AHKT2woaSwdQDKo4t',
  reconnectPeriod: 1000,
})

const topic = 'vandat2000/feeds/temp'
client.on('connect', () => {
  console.log('Connected')
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
    client.on('message', (topic, payload) => {
        console.log('Received Message:', topic, payload.toString())
      })
  })
  client.on("error",function(error){ console.log("Can't connect"+error)})

  
})


