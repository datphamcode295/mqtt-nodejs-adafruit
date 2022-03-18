//const client = require("./index")
const mqtt = require('mqtt')

const connectUrl = `https://io.adafruit.com:1883`
const clientID = `publicer22` //random but unique
const client = mqtt.connect(connectUrl, {
  clientID,
  clean: true,
  connectTimeout: 4000,
  username: 'vandat2000', //username in adafruit io key (My Key)
  password: 'aio_TJOF63EcVjp4oaWPmgtJisUAYMaq',//active key in adafruit io key (My Key)
  reconnectPeriod: 1000,
})
const topic = 'vandat2000/feeds/temp'

    client.publish(topic, '50', { qos: 0, retain: false }, (error) => {
      if (error) {
        console.error(error)
      }
      else{
        client.end()

      }
    })



