# HNG Internship - Backend Task (Stage One)

This is a simple Express.js server built with TypeScript.  
It fetches data from a public API, handles network errors, logs requests, supports CORS, and includes rate limiting.

---

## Features
- TypeScript setup with `ts-node-dev` for fast development  
- Error and timeout handling for external API requests  
- CORS configuration for safe cross-origin access  
- HTTP request logging using Morgan  
- Basic rate limiting to prevent abuse  
- Time formatted according to the user’s local timezone

---

## Folder Structure
src/
├── app.ts # Express app setup (middlewares, routes)
├── server.ts # Server entry point
├── controllers/
│ └── dataController.ts
├── routes/
│ └── dataRoutes.ts
├── utils/
│ └── apiClient.ts # Axios instance and helper functions


---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/JosephOluOlofinte/hng-profile-api.git
cd hng-profile-api
```

### 2. Install Dependencies
```bash
npm install
```

## Running the Project Locally

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## Dependencies

### 1. Express
### 2. Cors
### 3. Axios
### 4. Morgan
### 5. Express Rate Limit 
### 6. Dot Env
### 7. TS Node
### 8. Nodemon
### 9. Typescript

### How To Install Dependencies
```bash
npm install express cors axios morgan express-rate-limit dotenv 

npm install --save-dev @types/express @types/cors @types/morgan ts-node nodemon typescript
```

### ENV
- PORT=3000
- EXTERNAL_API_URL=https://api.example.com/data

These are exported in /src/constants/env.ts as constants

## Example Response
```bash
{
  "status": "success",
  "user": {
    "email": "<your email>",
    "name": "<your full name>",
    "stack": "<your backend stack>"
  },
  "timestamp": "<current UTC time in ISO 8601 format>",
  "fact": "<random cat fact from Cat Facts API>"
}
```