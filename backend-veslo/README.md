# Установка

## Сборка приложения
```bash
$ npm run build
```
Получаем папку dist с собранным приложением

## Добавить prisma client в dist
Скопировать папку prisma и package.json из dev репозитория в dist

## Создаем образ приложения в docker
```bash
$ docker build . --tag veslo.backend:latest
```



## Installation
```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

