FROM node:13.12.0-alpine

RUN apk add --update \
  git \
&& rm -rf /var/cache/apk/*

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json* ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

EXPOSE 3000
CMD ["npm", "start"]
