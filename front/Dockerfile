FROM sora210/alpine-nginx:node10.18.0
RUN mkdir /home/work
COPY ./ /home/work/
WORKDIR /home/work/hackathon-geekcamp-vol12
RUN mv -fv /home/work/Docker/nginx.conf /etc/nginx/nginx.conf &&\
    rm -fr /home/work/Docker &&\
    npm update -g && \
    npm install && \
    npm run build
ENTRYPOINT nginx -g 'daemon off;'
EXPOSE 80