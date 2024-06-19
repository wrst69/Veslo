# Настройка окружения

## Полезные docker команды

### Остановить все контейнеры
``` bash
docker stop $(docker ps -a -q)
```

### Удалить все контейнеры
``` bash
docker rm $(docker ps -a -q) 
```

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
& docker compose --file docker-compose.dev.yml up -d 
```

## Установка Ansible

Ansible — это программное решение для удаленного управления конфигурациями. Оно позволяет настраивать удаленные машины.

### Для Mac OS:
1. Устанавливаем Homebrew
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
2. Устанавливаем Ansible
```
brew install ansible ansible-lint
```

### Для Linux:
```
apt get install ansible ansible-lint
```

### Для Windows:
Только через установку виртуальной машины Linux WSL
```
apt get install ansible ansible-lint
```
