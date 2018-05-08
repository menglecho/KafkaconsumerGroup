var kafka = require('kafka-node');
var aalStore = require('../alarm-store/aalStore.js');
var topic = ["AlarmStateIndication"];
var options = {
    host: 'zookeeper:2181',
    kafkaHost: 'localhost:9092',
    groupId: 'adpalarmsnmpnbi',
    sessionTimeout: 30000,
    fromOffset: 'latest',
    retries: 9
};

var consumerGroup = new kafka.ConsumerGroup(options, topic);

consumerGroup.client.on('connect', function(){
    consumerGroup.client.topicExists([topic], function(TopicsNotExistError){
        console.log('Topic not exist ' + TopicsNotExistError);
    });
    console.log('connected');
});
consumerGroup.on('message', function (message) {
    console.log("kafka receive message!!");
    aalStore.handleAlarmState(message);
});

consumerGroup.on('error', function (err) {
    console.error("Kafka server not ready " + err);
});
