# Auth App

Full-stack authentication application built with NestJS (backend) and React + TypeScript (frontend).

## Tech Stack

* **Backend:** NestJS, MongoDB, Mongoose, JWT, class-validator, Swagger (OpenAPI)
* **Frontend:** React 18, TypeScript, Material-UI, Axios, React-Router.

## Requirements Implemented

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
JWT_SECRET=<random_32_char_secret>
JWT_REFRESH_SECRET=<another_random_secret>
```

### Installation
```bash
# root
npm install --prefix auth-api
npm install --prefix frontend
```

### Running in Development
```bash
# Terminal 1 – Backend
cd auth-api
npm run start:dev

# Terminal 2 – Frontend
cd frontend
PORT=3001 npm start
```

### API Documentation
Open `http://localhost:3000/api` after the backend is running to explore the Swagger UI.

## Deployment
The app is production-ready: environment configuration, DTO validation, CORS, logging, and API docs are in place. 
