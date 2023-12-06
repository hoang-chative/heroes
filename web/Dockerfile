FROM node:18.18.0-alpine AS build
WORKDIR /usr/src/app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.23.2-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /usr/src/app/dist/heroes/browser .

EXPOSE 80