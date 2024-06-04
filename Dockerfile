FROM node:22.2.0-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev
COPY . .
RUN mv .env.production.local .env

EXPOSE 80

CMD ["npm", "start"]
