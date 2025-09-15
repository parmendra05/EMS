const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Dummy employee data
let employees = [
  { id: 1, name: 'John Doe', position: 'Developer', salary: 60000 },
  { id: 2, name: 'Jane Smith', position: 'Designer', salary: 55000 },
  { id: 3, name: 'Mike Johnson', position: 'Manager', salary: 75000 }
];

// GET all employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// GET employee by ID
app.get('/employees/:id', (req, res) => {
  const employee = employees.find(emp => emp.id === parseInt(req.params.id));
  if (!employee) return res.status(404).json({ error: 'Employee not found' });
  res.json(employee);
});

// POST create new employee
app.post('/employees', (req, res) => {
  const { name, position, salary } = req.body;
  if (!name || !position || !salary) {
    return res.status(400).json({ error: 'Name, position, and salary are required' });
  }
  
  const newEmployee = {
    id: employees.length > 0 ? Math.max(...employees.map(emp => emp.id)) + 1 : 1,
    name,
    position,
    salary: parseInt(salary)
  };
  
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

// PUT update employee
app.put('/employees/:id', (req, res) => {
  const employee = employees.find(emp => emp.id === parseInt(req.params.id));
  if (!employee) return res.status(404).json({ error: 'Employee not found' });
  
  const { name, position, salary } = req.body;
  if (name) employee.name = name;
  if (position) employee.position = position;
  if (salary) employee.salary = parseInt(salary);
  
  res.json(employee);
});

// DELETE employee
app.delete('/employees/:id', (req, res) => {
  const index = employees.findIndex(emp => emp.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Employee not found' });
  
  const deletedEmployee = employees.splice(index, 1)[0];
  res.json({ message: 'Employee deleted', employee: deletedEmployee });
});

app.listen(PORT, () => {
  console.log(`Employee Management System running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('GET    /employees       - Get all employees');
  console.log('GET    /employees/:id   - Get employee by ID');
  console.log('POST   /employees       - Create new employee');
  console.log('PUT    /employees/:id   - Update employee');
  console.log('DELETE /employees/:id   - Delete employee');
});