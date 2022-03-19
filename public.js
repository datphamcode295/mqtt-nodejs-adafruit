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


const topic = 'vandat2000/feeds/temp'

const callback = ()=>{
  var val = Math.floor(Math.random() * 100);
  client.publish(topic, val.toString(), { qos: 0, retain: false }, (error) => {
    if (error) {
      console.error(error)
    }
    else{
      console.log("Done: ", val)

    }
  })
}

setInterval(callback, 3000);








