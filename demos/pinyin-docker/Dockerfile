FROM node:16-alpine
WORKDIR /app
ADD ./ /app
RUN npm config set registry https://registry.npm.taobao.org/ && \
    npm i -g pnpm pm2
RUN pnpm i
CMD pm2-runtime 'index.js'
EXPOSE 6666

# docker build ./ -t pinyin-docker
# docker run -it --rm -p 6666:6666 pinyin-docker
