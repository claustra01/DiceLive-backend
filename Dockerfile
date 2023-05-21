FROM ubuntu:22.04

RUN apt update
RUN apt -y upgrade
RUN apt -y install sudo
RUN apt -y install curl
RUN apt -y install build-essential
RUN apt -y install nodejs
RUN apt -y install npm
RUN apt -y upgrade

ENV ROOT=/nest/src/app
WORKDIR ${ROOT}

COPY package*.json ./

RUN npm i
RUN npx prisma generate

COPY . .
EXPOSE 8500

RUN ["npm", "start"]