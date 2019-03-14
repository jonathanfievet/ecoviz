FROM alpine:3.7
COPY ./ecoviz-service /ecoviz-service
COPY ./ecoviz-front /ecoviz-front
COPY ./run-services.sh /
RUN mkdir -p /data/db
RUN apk add bash openssh git openjdk8 mongodb nodejs maven
RUN mkdir -p /ecoviz-front/node_modules/node-sass/vendor/linux-x64-51
RUN wget -O /ecoviz-front/node_modules/node-sass/vendor/linux-x64-51/binding.node https://github.com/sass/node-sass/releases/download/v4.11.0/linux-x64-51_binding.node
EXPOSE 3000
EXPOSE 8083
EXPOSE 27017
ENTRYPOINT ["sh", "run-services.sh"]