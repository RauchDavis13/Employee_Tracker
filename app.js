const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee } = require('./utils/queries');
const appStart = require('./utils/questionsStart');

const handleResponse = response => {
  switch (response) {
      case 'View all departments':
        console.log('help');
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
          promptRemoveQuestions()
              .then(response => handleAddRole(response.removeChoice));
          break;
      case 'Add an employee':
          addEmployee()
          break;
      case 'Update an employee':
          promptRemoveQuestions()
              .then(response => handleUpdateEmployee(response.removeChoice));
          break;
          
      console.log('end of list');
      // case 'Quit':
      //     console.log('Thank you for choosing Employee Tracker!')
      //     process.exit(0);
  }
};

appStart()
  .then(response => handleResponse(response.startMenu));