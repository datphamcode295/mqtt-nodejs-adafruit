const mqtt = require('mqtt')

const connectUrl = `https://io.adafruit.com:1883`
const clientID = `subcriber` //random but unique
const client = mqtt.connect(connectUrl, {
  clientID,
  clean: true,
  connectTimeout: 4000,
  username: 'vandat2000', //username in adafruit io key (My Key)
  password: 'aio_TJOF63EcVjp4oaWPmgtJisUAYMaq',//active key in adafruit io key (My Key)
  reconnectPeriod: 1000,
})

const topic = 'vandat2000/feeds/temp'

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





