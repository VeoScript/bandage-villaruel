FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN yarn build

COPY .next ./.next

CMD [ "yarn", "dev" ]