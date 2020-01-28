const express = require('express');
const Eureka = require('eureka-js-client').Eureka

const PORT = 3000,
app = express();

const client = new Eureka({
    instance: {
        app: 'eurekaNode',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl:'http://localhost:3000',
        vipAddress: 'eurekaNode',
        port:{
            $: PORT,
            '@enabled':'true',
        },
        dataCenterInfo:{
            '@class':'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
        registerWithEureka: true,
        fetchRegistry: true,
    },
    eureka:{
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps',
    },
});

client.logger.level('debug');
client.start(error =>{
    console.log(error || 'NodeJS Eureka Started!');
})



app.get('/', (req, res) => {
    res.send("We are live");
});

app.listen(PORT);