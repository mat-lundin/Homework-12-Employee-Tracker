class Query {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    
    selectstuff(){
        db.query('SELECT ', function (err, results) {
            console.log(results);
            });
    }
    }    




module.exports = Employee