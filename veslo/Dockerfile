FROM node:20.14-slim
RUN apt-get uodate && apt-get install -y openssl libssl-dev

WORKDIR /opt/veslo-backend
COPY ./dist/package.json .
RUN npm install --omit=dev

COPY ./dist/prisma/schema.prisma ./schema.prisma
RUN 
 

COPY ./dist .

CMD ["node", "./main.js"]
