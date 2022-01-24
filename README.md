# Employee Tracker

## Bootcamp: Challenge 12 - Create app to generate a database to view, add, modify employees, roles and departments

The purpose of this assignment, is to create a working CLI app for a user to create an employee database, with tables for employees, roles and departments

- Motivation: Test what has been learned through practical application and testing of Javascript, CLI, OOP, TDD, Node and Node modules including "inquirer", with an emphasis on using mysql to build a database.

- Project: Create an app to create a Employee Tracker database from CLI.  The user will be able to view and add employees, departments and roles.

- Problem Solved: Once the app is started from the CLI, the user is presented with a variety of options to view and/or add employees, department and roles.  Tables will be generated to visually show the employees, departments and/or roles.

- Lessons Learned: Creating datbases notches up the level of complexity learned.  Correctly flowing the data from the databases, in conjunction with bringing in questions using inquirer has been challenging.  Currently, the app is not working, however the structure has been created.

## Folders and Files

- README.md:  Explains usage and functionality of this app

- /db: Contains info related to the database, tables and "seeds", as well as routing the connection for mysql
 
- /utils: Folder where initial questions are used to route to the app.js file.  The app.js file then directs the start question answer to the queries.js file where the functions reside for the various aspects of the app.

- gitignore: Contains files names that are not passed to Github for usage with the app

- package-lock.json: Package of Node modules, including "inquirer"

- package.json:  Node module file

- app.js: This is where the app begins.  It calls questionsStart.js, where he user decides which action to take.  The response is returned to app.js, where the response is handled using switch/case, to call the specific function related to the response from the queries.js file.


## Acceptance Criteria


- WHEN I start the application / THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role - Currently, the only part of the app that is working.  The user is supplied with a list of questions as defined above

- WHEN I choose to view all departments / THEN I am presented with a formatted table showing department names and department ids - Currently, not working

- WHEN I choose to view all roles / THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role - Currently, not working

- WHEN I choose to view all employees / THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to - Currently, not working

- WHEN I choose to add a department / THEN I am prompted to enter the name of the department and that department is added to the database - Currrently, not working

- WHEN I choose to add a role / THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database - Currently, not working

- WHEN I choose to add an employee / THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database - Currently, not working

- WHEN I choose to update an employee role / THEN I am prompted to select an employee to update and their new role and this information is updated in the database - Currently, not working


## GitHub repository...
https://github.com/RauchDavis13/Employee_Tracker.git

## Video
https://watch.screencastify.com/v/Sj7X6scNeRntWCIQplME


## Thank you's
Matthew Kim(Instructor)
Valeria Flores(TA)
Dustin Erwin (TA)
Kris Renaldi (TA)
Sandra Smith (Tutor)

Fellow students...
Robert Evanic
Adam Howard


