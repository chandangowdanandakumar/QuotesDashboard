FROM node:16-alpine3.11
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0 --disableHostCheck