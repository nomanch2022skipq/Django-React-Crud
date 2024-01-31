FROM node:16-alpine

WORKDIR /app

COPY frontend/package*.json ./
RUN npm install

COPY frontend/. .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
