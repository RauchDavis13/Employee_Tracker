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

const appStart = () => inquirer.prompt(startQuestions);

module.exports = appStart;