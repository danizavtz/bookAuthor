FROM node:latest

WORKDIR /app
ADD package.json /app
RUN npm i --silent
ADD index.js /app
ADD server/ /app/server
ADD config/ /app/config
ADD bin/ /app/bin
ADD lib/ /app/lib
ADD entrypoint.sh /app
ADD .env /app
RUN chmod +x /app/entrypoint.sh
EXPOSE 3002
CMD ["entrypoint.sh"]