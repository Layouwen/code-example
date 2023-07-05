FROM --platform=linux/amd64 ubuntu:latest
RUN sed -i 's/archive.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list && \
  sed -i 's/security.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list
RUN apt-get update 
RUN apt-get install -y ffmpeg

CMD ["bash", "-c", "while true; do sleep 3600; done"]

# docker build -t ffmepg-docker .