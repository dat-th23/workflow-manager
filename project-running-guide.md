# 🧩 Task Manager API (NestJS + Prisma + PostgreSQL)

A fully-featured backend REST API built with **NestJS**, **Prisma ORM**, **PostgreSQL**, and **JWT Authentication**. Designed for task management and role-based user access.

---

## 🚀 Features

- ✅ User Registration & Login (JWT Auth)
- ✅ Role-Based Access Control (USER / ADMIN)
- ✅ CRUD for Projects & Tasks
- ✅ Prisma ORM with UUID support
- ✅ Swagger API Documentation
- ✅ PostgreSQL database
- ✅ Docker support
- ✅ Modular NestJS Architecture

---

## 🧑‍💻 Tech Stack

- **Framework:** [NestJS](https://nestjs.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Database:** PostgreSQL
- **Auth:** JWT + Bcrypt
- **Docs:** Swagger (`@nestjs/swagger`)
- **Dev Tools:** dotenv, Docker, class-validator

---

## 📦 Getting Started

### 1️⃣ Clone the Project

```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
yarn install
```

### 2️⃣ Configure Environment Variables

Create a .env file at the project root:

```bash
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/task_db"
JWT_SECRET="your_jwt_secret"
```

### 3️⃣ Generate Prisma Client & Migrate DB

```bash 
npx prisma generate
npx prisma migrate dev --name init
```
You can use ```npx prisma db push``` as an alternative to skip migrations.

### 4️⃣ Start the Development Server

```bash
npm run start:dev
```
Server runs at: http://localhost:3000

### 📘 API Documentation (Swagger)

Access Swagger UI at:
```bash
http://localhost:3000/api/v0/swagger-ui.html
```
Includes detailed request/response schemas and authentication setup.