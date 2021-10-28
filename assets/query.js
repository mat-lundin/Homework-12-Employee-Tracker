const query = {
    // constructor(db) {
    //   this.db = db
    // }
    
    selectDepts(db){
        db.query(`SELECT * FROM department;`, function (err, results) {
          console.log(`\n`); 
          console.table(results);
           
            });
    },
    selectRoles(db){
      db.query('SELECT r.title, r.id, d.name AS department_name, r.salary FROM role r JOIN department d ON r.department_id = d.id;', function (err, results) {
        console.log(`\n`); 
        console.table(results);
          
          });
    },
    selectEmps(db){
      db.query('SELECT e.id AS employee_id, e.first_name, e.last_name, r.title, d.name as department, r.salary, m.first_name as manager_first_name, m.last_name as manager_last_name FROM employee e LEFT JOIN role r ON e.role_id = r.id LEFT JOIN department d ON r.department_id = d.id LEFT JOIN employee m ON e.manager_id = m.id;', function (err, results) {
        console.log("\n");
        console.table(results);
          
          });
    },
    addDepartment(db,dept){
      console.log(`type of dept is`, typeof dept)
      db.query(`INSERT INTO department (name) VALUEs (\'${dept}\');`, function (err, results) {
          console.log(`New department of ${dept} added!`);
          
          });
    },
    selectDeptNames(db){
      db.query('SELECT name FROM department;', function (err, results) {
          // console.log(results)
          const arr = []
          results.forEach(element => {
            arr.push(element.name)
          });
          // console.log(arr)
          return arr;
          
          });
    },
    addRole(db,title, salary, dept){
      db.query(`INSERT INTO role (title, salary, department_id) SELECT \'${title}\',\'${salary}\',\'${dept}\'`, function (err, results) {
        console.log(`New role of ${title} added!`);
          
          });
    },
  
    addEmp(db,first, last, role, mgr){
      db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (\'${first}\',\'${last}\', \'${role}\', \'${mgr}\')`, function (err, results) {
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
      console.log(`emp = ${emp}, role = ${role}`)
      db.query(`UPDATE employee SET role_id = ${role} WHERE id = ${emp}`, function (err, results) {
          console.log('Employee role updated!')
          
          });
    }
}
    

module.exports = query