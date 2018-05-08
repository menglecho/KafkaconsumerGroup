var kafka = require('kafka-node');

var topic = ["AlarmStateIndication"];

var options = {
    host: 'zookeeper:2181',
    kafkaHost: 'localhost:9092',
    groupId: 'adpalarmsnmpnbi',
    sessionTimeout: 30000,
    fromOffset: 'latest',
    retries: 4
};

var consumerGroup = new kafka.ConsumerGroup(options, topic);

consumerGroup.on('message', function (message) {
    console.log("kafka receive message!!");
    console.log(message);
    aalStore.handleAlarmState(message);
});

consumerGroup.on('error', function (err) {
    console.error("Kafka server not ready " + err);
});

