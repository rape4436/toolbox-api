FROM node:latest
RUN mkdir -p /usr/src/api-toolbox
WORKDIR /usr/src/my_first_app
COPY package.json /usr/src/api-toolbox/
RUN npm install
COPY . /usr/src/api-toolbox
EXPOSE 8080