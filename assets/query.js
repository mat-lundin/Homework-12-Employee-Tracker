class Query {
    constructor(data) {
    }
    
    selectDepts(){
        db.query('SELECT * FROM department;', function (err, results) {
            console.table(results);
            
            });
    }
    selectRoles(){
      db.query('SELECT r.title, r.id, d.name AS department_name, r.salary FROM role r JOIN department d ON r.department_id = d.id;', function (err, results) {
          console.table(results);
          
          });
    }
    selectEmps(){
      db.query('SELECT e.id AS employee_id, e.first_name, e.last_name, r.title, d.name as department, r.salary, m.first_name as manager_first_name, m.last_name as manager_last_name FROM employee e LEFT JOIN role r ON e.role_id = r.id LEFT JOIN department d ON r.department_id = d.id LEFT JOIN employee m ON e.manager_id = m.id;', function (err, results) {
          console.table(results);
          
          });
    }
    addDepartment(dept){
      db.query(`INSERT INTO department (name) SELECT ${dept}`, function (err, results) {
          console.log(`New department of ${dept} added!`);
          
          });
    }
    selectDeptNames(){
      db.query('SELECT name FROM department;', function (err, results) {
          return results;
          
          });
    }
    addRole(title, salary, dept){
      db.query(`INSERT INTO role (title, salary, department_id) SELECT ${title},${salary}, d.id FROM department d WHERE d.name = ${dept}`, function (err, results) {
        console.log(`New role of ${title} added!`);
          
          });
    }
  
    addEmp(first, last, role, mgr){
      db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) SELECT ${first},${last}, r.id, ${mgr} FROM role r WHERE r.name = ${role}`, function (err, results) {
        console.log(`New employee ${first} ${last} added!`);
          
          });
        }

    selectRoleNames(){
      db.query('SELECT title FROM role;', function (err, results) {
          return results;
          
          });
    }

    selectEmpNames(){
      db.query('SELECT id, first_name, last_name FROM employee;', function (err, results) {
          return results;
          
          });
    }
    updateEmpRole(emp,role){
      db.query('UPDATE employee SET role_id = r.id FROM role r', function (err, results) {
          return results;
          
          });
    }
}
    




module.exports = Query