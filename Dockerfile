FROM node

RUN apt-get update \
    && apt-get install -y \
        rsync \
    && apt-get clean \
    && apt-get autoclean \
    && apt-get -y autoremove
