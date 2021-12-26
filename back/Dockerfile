FROM node:14
RUN mkdir /home/work
COPY ./ /home/work
WORKDIR /home/work

RUN /bin/bash &&\
    apt-get -y update &&\
    apt-get -y upgrade &&\
    npm update -g &&\
    npm install

ENTRYPOINT npm run server
EXPOSE 9090