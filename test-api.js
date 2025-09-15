// Test script for Employee Management API
// Run this after starting the server with: node employee-app.js

const testAPI = async () => {
  const baseURL = 'http://localhost:3000';
  
  console.log('Testing Employee Management API...\n');
  
  try {
    // Test GET all employees
    console.log('1. GET all employees:');
    let response = await fetch(`${baseURL}/employees`);
    let data = await response.json();
    console.log(data);
    
    // Test POST create employee
    console.log('\n2. POST create new employee:');
    response = await fetch(`${baseURL}/employees`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Alice Brown',
        position: 'Tester',
        salary: 50000
      })
    });
    data = await response.json();
    console.log(data);
    
    // Test GET employee by ID
    console.log('\n3. GET employee by ID (1):');
    response = await fetch(`${baseURL}/employees/1`);
    data = await response.json();
    console.log(data);
    
    // Test PUT update employee
    console.log('\n4. PUT update employee (ID: 1):');
    response = await fetch(`${baseURL}/employees/1`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        salary: 65000
      })
    });
    data = await response.json();
    console.log(data);
    
  } catch (error) {
    console.error('Error testing API:', error.message);
    console.log('Make sure the server is running: node employee-app.js');
  }
};

// Run tests if Node.js version supports fetch (18+)
if (typeof fetch !== 'undefined') {
  testAPI();
} else {
  console.log('This test requires Node.js 18+ or install node-fetch package');
  console.log('Alternatively, use curl or Postman to test the API endpoints');
}