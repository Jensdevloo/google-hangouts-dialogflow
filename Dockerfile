FROM node:11.14.0

RUN mkdir -p /app
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install 

COPY . .

CMD ["yarn", "start"]
