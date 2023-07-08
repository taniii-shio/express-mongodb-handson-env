FROM node:10.24.1

WORKDIR /app

COPY package*.json ./
RUN npm install \
    && npm install -g nodemon

COPY . .

RUN chmod 777 ./initialize-node.sh

EXPOSE 3000

CMD ["./initialize-node.sh"]
