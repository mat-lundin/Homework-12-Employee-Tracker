const inquirer = require('inquirer');
const mysql = require('mysql2');
const Queries = require('./assets/query')


const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'asdf',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );
  
  
//   db.query('SELECT ', function (err, results) {
//     console.log(results);
//   });

const initQuestions = [
    {
        input: 'choice',
        message: 'Choose an action!',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
        name: 'initChoice'
    },
    {
        input: 'text',
        message: 'Enter the new department name: ',
        name: 'deptName',
        when: (answers) => answers.initChoice === 'add a department'
    },
    {
        input: 'text',
        message: 'Enter the new role name: ',
        name: 'roleName',
        when: (answers) => answers.initChoice === 'add a role'
    },
    {
        input: 'text',
        message: 'Enter the new role salary: ',
        name: 'roleSal',
        when: (answers) => answers.initChoice === 'add a role'
    },
    {
        input: 'choice',
        message: 'Select the new role department: ',
        name: 'roleDept',
        choices: Queries.selectDeptNames(),
        when: (answers) => answers.initChoice === 'add a role'
    },
]

function prompt(){
    inquirer
        .prompt(initQuestions)
        .then((data) => {
            if (data.initChoice === 'view all departments'){
                Queries.selectDepts();
            } else if (data.initChoice === 'view all roles'){
                Queries.selectRoles();
            } else if (data.initChoice === 'view all employees'){
                Queries.selectEmps();
            } else if (data.initChoice === 'add a department'){
                Queries.addDepartment(data.deptName);
            } else if (data.initChoice === 'add a role'){

            }
        })
}