const inquirer = require('inquirer');
const mysql = require('mysql2');
const Query = require('./assets/query');


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'asdf',
        database: 'company_db'
    });
db.connect(() => {
    console.log(`Connected to the company_db database.`);
    init();
}

);

//   const deptnames = Query.selectDeptNames(db);


//   db.query('SELECT ', function (err, results) {
//     console.log(results);
//   });

const initQuestions = [
    {
        type: 'list',
        message: 'Choose an action',
        name: 'initChoice',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']

    },
    {
        type: 'input',
        message: 'Enter the new department name: ',
        name: 'deptName',
        when: (answers) => answers.initChoice === 'add a department'
    },
    {
        type: 'input',
        message: 'Enter the new role name: ',
        name: 'roleName',
        when: (answers) => answers.initChoice === 'add a role'
    },
    {
        type: 'input',
        message: 'Enter the new role salary: ',
        name: 'roleSal',
        when: (answers) => answers.initChoice === 'add a role'
    },
    {
        type: 'list',
        message: 'Select the new role department: ',
        name: 'roleDept',
        choices: Query.selectDeptNames(db),
        when: (answers) => answers.initChoice === 'add a role'
    },
    {
        type: 'input',
        message: 'Enter the new employee first name: ',
        name: 'empFirst',
        when: (answers) => answers.initChoice === 'add an employee'
    },
    {
        type: 'input',
        message: 'Enter the new employee last name: ',
        name: 'empLast',
        when: (answers) => answers.initChoice === 'add an employee'
    },
    {
        type: 'list',
        message: 'Select the new employee role: ',
        name: 'empRole',
        choices: Query.selectRoleNames(db),
        when: (answers) => answers.initChoice === 'add a role'
    },
    {
        input: 'list',
        message: 'Select the new employee manager: ',
        name: 'empMgr',
        choices: Query.selectEmpNames(db),
        when: (answers) => answers.initChoice === 'add a role'
    },
    {
        input: 'list',
        message: 'Update which employee?',
        name: 'empToUpdate',
        choices: Query.selectEmpNames(db),
        when: (answers) => answers.initChoice === 'update an employee role'
    },
    {
        input: 'list',
        message: 'Update employee to which role?',
        name: 'empNewRole',
        choices: Query.selectRoleNames(db),
        when: (answers) => answers.initChoice === 'update an employee role'
    },
]

 function init() {
    inquirer
        .prompt(initQuestions)
        .then( (data) => {
            if (data.initChoice === 'view all departments') {
                //  let result = await Query.selectDepts(db);
                // console.log("Res - q",result)
                // return  await result
            //    console.table(await result)
                Query.selectDepts(db))
            //    return await result
           // if(selection){
             //  init()
           // }
    
            } else if (data.initChoice === 'view all roles') {
                Query.selectRoles(db);
            } else if (data.initChoice === 'view all employees') {
                Query.selectEmps(db);
            } else if (data.initChoice === 'add a department') {
                Query.addDepartment(db, data.deptName);
            } else if (data.initChoice === 'add a role') {
                Query.addRole(db, data.roleName, data.roleSal, data.roleDept)
            } else if (data.initChoice === 'add an employee') {
                Query.addEmp(db, data.empFirst, data.empLast, data.empRole, data.empMgr[0])
            } else if (data.initChoice === 'update an employee role') {

            }
        }).then(res => {
            console.table(res)
            init()
        })

}


