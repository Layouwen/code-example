# 启动 MQTT 服务

```bash
docker run -d -it -p 1883:1883 -p 9001:9001 -v /路径/mosquitto.conf:/mosquitto/config/mosquitto.conf -v /路径/data:/mosquitto/data -v /路径/log:/mosquitto/log eclipse-mosquitto
```

```bash
mqtt sub -t SWITCH_REGION -p 1883 -C ws 

mqtt pub -t SWITCH_REGION -p 1883 -C ws -m 1111
```