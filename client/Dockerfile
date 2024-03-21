FROM node:20.11.1

WORKDIR /usr/src/app

COPY . .
RUN apt-get update && apt-get install -y
RUN npm install

CMD ["npm", "run", "dev"]