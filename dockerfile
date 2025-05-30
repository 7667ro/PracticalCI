FROM node:latest
RUN npm install -g nodemon
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 3001
CMD ["npm","run","dev"]