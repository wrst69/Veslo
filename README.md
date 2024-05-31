# Настройка окружения

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

Для Linux:
```
apt get install ansible ansible-lint
```