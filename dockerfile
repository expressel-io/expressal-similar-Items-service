From node:8.11.3 

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install && node database/index.js

EXPOSE 3000

CMD ["npm", "start"]