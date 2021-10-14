FROM node:16-alpine3.11 as build-step
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/frontend /usr/share/nginx/html
