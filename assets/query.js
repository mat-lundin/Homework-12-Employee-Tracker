const query = {
    // constructor(db) {
    //   this.db = db
    // }
    
    selectDepts(db){
        db.query('SELECT * FROM department;', function (err, results) {
            console.table(results)
           
            });
    },
    selectRoles(db){
      db.query('SELECT r.title, r.id, d.name AS department_name, r.salary FROM role r JOIN department d ON r.department_id = d.id;', function (err, results) {
          console.table(results);
          
          });
    },
    selectEmps(db){
      db.query('SELECT e.id AS employee_id, e.first_name, e.last_name, r.title, d.name as department, r.salary, m.first_name as manager_first_name, m.last_name as manager_last_name FROM employee e LEFT JOIN role r ON e.role_id = r.id LEFT JOIN department d ON r.department_id = d.id LEFT JOIN employee m ON e.manager_id = m.id;', function (err, results) {
        console.log("\n")
        console.table(results);
          
          });
    },
    addDepartment(db,dept){
      db.query(`INSERT INTO department (name) VALUES ${dept}`, function (err, results) {
          console.log(`New department of ${dept} added!`);
          
          });
    },
    selectDeptNames(db){
      db.query('SELECT name FROM department;', function (err, results) {
          return results;
          
          });
    },
    addRole(db,title, salary, dept){
      db.query(`INSERT INTO role (title, salary, department_id) SELECT ${title},${salary}, d.id FROM department d WHERE d.name = ${dept}`, function (err, results) {
        console.log(`New role of ${title} added!`);
          
          });
    },
  
    addEmp(db,first, last, role, mgr){
      db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) SELECT ${first},${last}, r.id, ${mgr} FROM role r WHERE r.name = ${role}`, function (err, results) {
        console.log(`New employee ${first} ${last} added!`);
          
          });
        },

    selectRoleNames(db){
      db.query('SELECT title FROM role;', function (err, results) {
          return results;
          
          });
    },

    selectEmpNames(db){
      db.query('SELECT id, first_name, last_name FROM employee;', function (err, results) {
          return results;
          
          });
    },
    updateEmpRole(db,emp,role){
      db.query(`UPDATE employee SET role_id = r.id FROM employee e LEFT JOIN role r ON r.name = ${role} WHERE e.id = ${emp}`, function (err, results) {
          return results;
          
          });
    }
}
    

module.exports = query