const db = require('../db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const { title } = require('process');

// view all departments
const viewDepartments = () => {
  const sql = `SELECT * FROM departments`;

  db.query(sql, (err, rows) => {
    if (err) console.log({ error: err.message });
    console.table(rows);
    // console.table(['name'], values);
   
});
}

// view all roles
const viewRoles = () => {
  const sql = `SELECT roles.id, title, CONCAT('$', FORMAT(salary, 0)) AS 'salary', departments.name AS department
               FROM roles
               LEFT JOIN departments ON roles.department_id = departments.id`;

  db.query(sql, (err, rows) => {
      if (err) console.log({ error: err.message });
      console.log('\n \n ')
      console.table(rows);
  });
}

// view all employees
const viewEmployees = () => {
  const sql = `SELECT e.id, e.first_name AS 'first name', e.last_name AS 'last name', roles.title, departments.name AS department, CONCAT('$', FORMAT(roles.salary, 0)) AS 'salary', m.first_name AS manager
               FROM employees e
               LEFT JOIN employees m ON e.manager_id = m.id
               LEFT JOIN roles ON e.role_id = roles.id
               LEFT JOIN departments ON roles.department_id = departments.id`;

  db.query(sql, (err, rows) => {
      if (err) console.log({ error: err.message });
      console.log('\n \n ')
      console.table(rows);
  });
};

// add a department
const addDepartment = () => {
  const sql = `SELECT * FROM departments`;

  db.query(sql, (err, rows) => {
    if (err) console.log({ error: err.message });
      console.log('\n \n ')
      console.table(rows);
  });

  const departmentQuestion = [
    {
      type: 'input',
      name: 'departmentName',
      message: 'Please enter the new department name',
      validate: departmentName => {
        if (departmentName) {
          return true;
        } else {
          console.log('Please enter the name of the new department!');
          return false;
        }
      }
    }
  ];
  return inquirer.prompt(departmentQuestion);
};


// add a role
const addRole = () => {
  
  const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
  const params = [
    body.role_title,
    body.salary,
    body.department_id,

  ];

  db.query(sql, params, (err, rows) => {
    
    if (err) console.log({ error: err.message });
        console.log('\n \n ')
        console.table(rows);
    });

  const roleQuestions = [
    {
      type: 'input',
      name: 'role_title',
      message: 'Please enter the new role name',
      validate: role_title => {
        if (role_title) {
          return true;
        } else {
          console.log('Please enter the name of the new role!');
          return false;
        }
      }
    },

    {
      type: 'list',
      name: 'department_Id',
      message: 'What department is the new role in?',
      choices:  [
        viewDepartments()
      ],
      default: 0,
      loop: false      
    },

    {
      type: 'input',
      name: 'salary',
      message: 'Please enter the salary of the new role',
      validate: salary => {
        if (salary) {
          return true;
        } else {
          console.log('Please enter the salary of the new role!');
          return false;
        }
      }
    }    
  ]
  return inquirer.prompt(roleQuestions);
};





// add an employee
const addEmployee = () => {
  
  const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
  const params = [
    body.first_name,
    body.last_name,
    body.role_id,
    body.manager_id
  ];

  db.query(sql, params, (err, rows) => {
    
    if (err) console.log({ error: err.message });
        console.log('\n \n ')
        console.table(rows);
    });

    const employeeQuestions = [
      {
        type: 'input',
        name: 'first_name',
        message: 'Please enter the first name of the new employee',
        validate: first_name => {
          if (first_name) {
            return true;
          } else {
            console.log('Please enter the first name of the new employee!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'Please enter the last name of the new employee',
        validate: last_name => {
          if (last_name) {
            return true;
          } else {
            console.log('Please enter the last name of the new employee!');
            return false;
          }
        }
      },
  
      {
        type: 'list',
        name: 'role_id',
        message: 'What role will the new employee have?',
        choices:  [
          viewRoles()
        ],
        default: 0,
        loop: false      
      },

      {
        type: 'list',
        name: 'manager_id',
        message: 'Who will the new employee report to?',
        choices:  [
          viewEmployees()
        ],
        default: 0,
        loop: false      
      }
     
    ]
    return inquirer.prompt(employeeQuestions);
};


module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee
}