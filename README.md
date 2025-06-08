# Auth App

A modern full-stack authentication app using NestJS (backend) and React + TypeScript (frontend).

## What is this?
This project is a production-ready authentication system. It lets users sign up, sign in, and access protected content. The backend is built with NestJS and MongoDB, and the frontend is a beautiful React app using Material-UI.

## Tech Stack

* **Backend:** NestJS, MongoDB, Mongoose, JWT, class-validator, Swagger (OpenAPI)
* **Frontend:** React 18, TypeScript, Material-UI, Axios, React-Router.

## Features

### Backend
1. Sign-up (`POST /auth/signup`) and sign-in (`POST /auth/signin`) endpoints.
2. Password rules validated server-side (≥8 chars, letter, number, special char).
3. Passwords hashed with bcrypt.
4. Protected endpoint (`GET /auth/profile`) guarded by JWT.
5. Swagger docs exposed at `/api`.
6. Centralised logging via Nest Logger (can be extended with Winston).

### Frontend
1. Sign-up & Sign-in forms with the required validations.
2. Application page with welcome message and logout.
3. Fully typed with TypeScript and uses MUI for UI.

## Getting Started

### Prerequisites
* Node.js >= 18
* MongoDB running locally (or update `MONGO_URI` in `.env`).

### Environment Variables
Create `auth-api/.env` with:
```env
MONGO_URI=mongodb://localhost:27017/auth-app
JWT_SECRET=<your_jwt_secret>
JWT_REFRESH_SECRET=<your_refresh_secret>
```
To generate a strong JWT secret, run:
```bash
openssl rand -base64 32
```

### Installation
```bash
# root
npm install --prefix auth-api
npm install --prefix frontend
```

### Running the App
- **Backend:**
  ```bash
  cd auth-api
  npm run start:dev
  ```
- **Frontend:**
  ```bash
  cd frontend
  PORT=3001 npm start
  ```

### API Documentation
Visit [http://localhost:3000/api](http://localhost:3000/api) for Swagger UI.

## Project Structure
- `auth-api/` — NestJS backend
- `frontend/` — React frontend

## Notes
- Passwords are hashed and validated for security.
- All sensitive config is in `.env` (never commit secrets!).
- Logging is enabled for easier debugging and monitoring.

---

Enjoy building with this starter! If you have questions or want to extend it, just fork and hack away.

## Deployment
The app is production-ready: environment configuration, DTO validation, CORS, logging, and API docs are in place. 
