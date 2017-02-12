"use strict";

const mysql = require("mysql");

class MySqlClass {

    constructor(host, port, user, password, database){
        this.connection = mysql.createConnection({
            host     : host,
            port     : port,
            user     : user,
            password : password,
            database : database
        });
    };

    find (table, cell, values) {
        var results;
        this.connection.query({
            sql: "SELECT * FROM "+ table +" WHERE" + cell + " = ?",
            values: values
        },(err, result) => {
            results = result;
        });
        return results;
    };

    findAll (table) {
        var results;
        this.connection.query({
            sql: "SELECT * FROM "+ table
        },(err, result) => {
            results = result;
        });
        return results;
    };

    save (table, saveData) {
        var results;
        this.connection.query("INSERT INTO "+ table +" SET ? ", saveData,(err, result) => {
            if (err) {
                results = err;
            };
        });
        return results;
    };
}

module.exports = MySqlClass;