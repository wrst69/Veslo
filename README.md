# Настройка окружения

## Готовим образ с приложением для docker

### Билдим образ бэкенда
1. Переходим в папку с бэкендом cd ./backend-veslo
2. Запускаем команду билда 
``` bash
& docker build . --tag veslo.backend:latest
```

### Билдим образ фронта
1. Переходим в папку с фронтендом cd ./frontend-veslo
2. Запускаем команду билда 
``` bash
& docker build . --tag veslo.frontend:latest
```

### Запускаем docker compose
1. Переходим в корневую папку проекта cd..
2. Запускаем команду
``` bash
& docker compose --file docker-compose.yml up -d 
```
