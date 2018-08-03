From node

WORKDIR /client/src/SimilarItems

COPY package.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]