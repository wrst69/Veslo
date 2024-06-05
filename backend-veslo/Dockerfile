FROM node:20.14-slim
RUN apt-get update && apt-get install -y openssl libssl-dev

WORKDIR /opt/veslo-backend

COPY ./package.json .
RUN npm install --omit=dev

COPY ./dist/prisma/schema.prisma ./schema.prisma
RUN npx prisma generate --schema schema.prisma
 
COPY ./dist .

RUN npm run prisma:generate

CMD ["node", "./main.js"]
