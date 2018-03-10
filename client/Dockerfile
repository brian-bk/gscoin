FROM node:8

RUN mkdir /client
WORKDIR /client

ADD ./wait-for-it.sh .

ADD ./package.json .
ADD ./package-lock.json .
RUN npm install

ADD ./src /client/src
ADD ./public /client/public

ARG run_build=false
RUN if [ "$run_build" = "true" ]; then npm run build; else echo Not running build; fi

