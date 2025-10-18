# HNG Internship - Backend Task (Stage Zero)

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
- src/
- ├── constants/
- │ └── env.ts
- ├── controllers/
- │ └── profile.controller.ts
- ├── utils/
- │ └── fetchCatFact.ts 
- ├── index.ts 

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

---

## Dependencies

1. Express
2. Cors
3. Axios
4. Morgan
5. Express Rate Limit 
6. Dot Env
7. TS Node
8. Nodemon
9. Typescript
10. CopyFiles

### How To Install Dependencies
```bash
npm install express cors axios morgan express-rate-limit dotenv 

npm install --save-dev @types/express @types/cors @types/morgan ts-node nodemon typescript copyfiles
```

---

### ENV
- PORT=4050
- EXTERNAL_API_URL=https://api.example.com/data

These are exported in /src/constants/env.ts as constants

---

## API Documentation
### Base URL
```bash
https://
```

### Endpoint
```bash
GET /me
```

### Description
Returns information about the developer and a random cat fact fetched from the Cat Facts API.
The endpoint responds with a JSON object containing user details, timestamp, and a random cat fact.

### Response Format

- Content-Type: application/json
- Status Code: 200 OK

```json
{
  "status": "success",
  "user": {
    "email": "josepholofinte@gmail.com",
  "name": "Joseph Olofinte",
  "stack": "Node.js/Express",
  },
  "timestamp": "2025-10-17T13:45:22.345Z",
  "fact": "Cats sleep for around 13 to 14 hours a day."
}
```

### Error Handling
If the Cat Facts API encounters an error, a fallback response is returned:
```json
{
  "status": "success",
  "user": {
    "email": "josepholofinte@gmail.com",
  "name": "Joseph Olofinte",
  "stack": "Node.js/Express",
  },
  "timestamp": "2025-10-17T13:45:22.345Z",
  "fact": "We love cats, but we are unable to fetch a fact at the moment. Please retry shortly."
}
```

### Notes

- The timestamp updates dynamically with every request.
- Each request fetches a new random cat fact (not cached).
- The API includes:
- Basic CORS configuration
- Request logging (via Morgan)
- Network timeout handling
- Optional rate limiting for public safety

### Example Usage

#### Request:
```bash
curl -X GET https://your-deployment-url.com/me
```

#### Response:
```json
{
  "status": "success",
  "user": {
    "email": "josepholofinte@gmail.com",
  "name": "Joseph Olofinte",
  "stack": "Node.js/Express",
  },
  "timestamp": "2025-10-17T13:45:22.345Z",
  "fact": "Cats sleep for around 13 to 14 hours a day."
}
```