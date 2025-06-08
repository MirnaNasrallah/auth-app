
# NestJS Auth API

A simple authentication API built with NestJS and MongoDB.

## Features
- User signup and signin
- JWT-based authentication (access & refresh tokens)
- Refresh token endpoint
- Protected endpoint (`/auth/profile`)
- MongoDB integration
- DTO validation

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)

### Installation
```bash
npm install
```

### Environment Variables
Create a `.env` file in the root directory:
```
MONGO_URI=mongodb://localhost/nest-auth
PORT=3000
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
```

### Running the App
```bash
npm run start:dev
```

## API Endpoints

### Signup
- **POST** `/auth/signup`
- **Body:**
```json
{
  "name": "test user",
  "email": "test@example.com",
  "password": "Test@123"
}
```

### Signin
- **POST** `/auth/signin`
- **Body:**
```json
{
  "email": "test@example.com",
  "password": "Test@123"
}
```
- **Returns:** `{ "access_token": "...", "refresh_token": "..." }`

### Refresh Token
- **POST** `/auth/refresh`
- **Body:**
```json
{
  "refresh_token": "<refresh_token>"
}
```
- **Returns:** `{ "access_token": "..." }`

### Protected Profile
- **GET** `/auth/profile`
- **Header:** `Authorization: Bearer <access_token>`
