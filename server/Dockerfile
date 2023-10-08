FROM node:19-alpine

ENV PORT 3500

ENV MONGO_URI mongodb://mongo:27017/daara-backend

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

# RUN sed -i "s/mongodb:\/\/localhost/mongodb:\/\/mongo/g" common/services/mongoose.service.js

RUN npm install

EXPOSE $PORT

CMD ["npm", "run", "start"]
