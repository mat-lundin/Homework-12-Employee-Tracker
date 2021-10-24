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
    addDepartment(data){
      db.query(`INSERT INTO department (name) SELECT ${data}`, function (err, results) {
          console.log(`New department of ${data} added!`);
          
          });
    }
    selectDeptNames(data){
      db.query('SELECT name FROM department;', function (err, results) {
          return results;
          
          });
    }
    }    




module.exports = Query