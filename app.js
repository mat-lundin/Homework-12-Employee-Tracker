const inquirer = require('inquirer');
const mysql = require('mysql2');
const Queries = require('./assets/queries')


const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'asdf',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );
  
  
  db.query('SELECT ', function (err, results) {
    console.log(results);
  });