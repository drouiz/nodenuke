FROM node:13.6.0-stretch
MAINTAINER Drouiz "info@drouiz.com"

RUN mkdir /src
RUN env

WORKDIR /src
ADD ./package.json /src/package.json

RUN npm install

COPY ./ /src/

EXPOSE 3000

CMD npm start

