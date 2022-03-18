//const client = require("./index")
const mqtt = require('mqtt')

const connectUrl = `https://io.adafruit.com:1883`
const clientID = `publicer22` //random but unique
const client = mqtt.connect(connectUrl, {
  clientID,
  clean: true,
  connectTimeout: 4000,
  username: 'your username', //username in adafruit io key (My Key)
  password: 'your activekey',//active key in adafruit io key (My Key)
  reconnectPeriod: 1000,
})
const topic = 'example/feeds/temp'//fill your topic link

    client.publish(topic, '70', { qos: 0, retain: false }, (error) => {
      if (error) {
        console.error(error)
      }
      else{
        client.end()

      }
    })



