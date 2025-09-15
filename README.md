# Employee Management System

A simple CRUD API for managing employees using Node.js and Express.js with in-memory data storage.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
# or
node employee-app.js
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/employees` | Get all employees |
| GET | `/employees/:id` | Get employee by ID |
| POST | `/employees` | Create new employee |
| PUT | `/employees/:id` | Update employee |
| DELETE | `/employees/:id` | Delete employee |

## Usage Examples

### Get all employees
```bash
curl http://localhost:3000/employees
```

### Create new employee
```bash
curl -X POST http://localhost:3000/employees \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","position":"Developer","salary":60000}'
```

### Update employee
```bash
curl -X PUT http://localhost:3000/employees/1 \
  -H "Content-Type: application/json" \
  -d '{"salary":65000}'
```

### Delete employee
```bash
curl -X DELETE http://localhost:3000/employees/1
```

## Test the API

Run the test script (requires Node.js 18+):
```bash
node test-api.js
```

Server runs on: http://localhost:3000
