# KazNIISA Frontend

Веб-приложение (Next.js 13) для официального портала КазНИИСА.

## Требования

- **Node.js**: v18.x или v20.x
- **npm**: v9.x или выше

---

## Установка и запуск

### 1. Переход в директорию фронтенда
```bash
cd frontend
```

### 2. Установка зависимостей
```bash
npm install
```

### 3. Запуск в режиме разработки (Development)
```bash
npm run dev
```
После запуска приложение доступно по адресу: [http://localhost:3000](http://localhost:3000)

---

### 4. Сборка и запуск в продакшн-режиме (Production)

Сборка проекта:
```bash
npm run build
```

Запуск собранного приложения:
```bash
npm run start
```
Сервер запустится в продакшн-режиме на порту `3000` ([http://localhost:3000](http://localhost:3000)).

---

## Доступные npm-скрипты

| Команда | Описание |
| :--- | :--- |
| `npm run dev` | Запуск локального сервера разработки с поддержкой Hot Reload |
| `npm run build` | Компиляция и сборка оптимизированного продакшн-бандла |
| `npm run start` | Запуск собранного продакшн-сервера Next.js |
| `npm run lint` | Проверка кода линтером ESLint |

---

## Переменные окружения (.env.local)

Файл `.env.local` содержит настройки подключения к API бэкенда:
```env
NEXT_PUBLIC_BASE_URL=http://localhost:5000/api
NEXT_PUBLIC_FILE_URL=http://localhost:5000
```
