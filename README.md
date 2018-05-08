# KafkaconsumerGroup
Assumtation: you are using Ubuntu 16.04 LTS
How to start Kafka
1. you need to download Kafka, https://kafka.apache.org/downloads, I am using the 1.1.0
2. Go to kafka folder, like: cd Downloads/kafka_2.11-1.1.0/
3. bin/zookeeper-server-start.sh config/zookeeper.properties
4. open another terminal, go to kafka folder
5. bin/kafka-server-start.sh config/server.properties
6. open another terminal, go to kafka folder
7. bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic AlarmStateIndication
8. check topics: bin/kafka-topics.sh --list --zookeeper localhost:2181
9. delete topic: bin/kafka-topics.sh --delete --zookeeper localhost:2181 --topic TOPICNAME
10. open another terminal, bin/kafka-console-producer.sh --broker-list localhost:9092 --topic AlarmStateIndication
11. send any message you want.
12. open another terminal, go to consumerGroup.js folder
13. node consumerGroup.js
14. you should receive the message.
