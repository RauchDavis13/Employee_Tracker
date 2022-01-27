const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee } = require('./utils/queries');
const inquirer = require('inquirer');

const startQuestions = [
    {
      type: 'list',
      name: 'questionStart',
      message: 'Welcome to Employee Tracker.  What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee'
      ],
      default: 0,
      loop: false
    },
    
  ];

const appStart = () => {
    inquirer.prompt(startQuestions)
    .then(response => {
        switch (response.questionStart) {
            case 'View all departments':
                viewDepartments();              
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee()
                break;
            case 'Update an employee':
                promptRemoveQuestions()
                    .then(response => handleUpdateEmployee(response.removeChoice));
                break;
        }
    }
    )};

    appStart();

