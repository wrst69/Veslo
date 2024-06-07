# Установка

## Сборка приложения
Устанавливаем зависимости
```bash
npm i
```

## Сборка приложения
```bash
npm run build
```
Получаем папку dist с собранным приложением

## Добавить prisma client в dist
Скопировать папку prisma и package.json из dev репозитория в dist

## Создаем образ приложения в docker
```bash
docker build . --tag veslo.backend:latest
```

