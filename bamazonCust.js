var mysql = require('mysql');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Utsasucks1",
    database: "BAMAZON"
});


connection.connect(function(err) {
    if (err) throw err;

    openMKT();
});

var openMKT = function() {
    inquirer.prompt({
        name: "item",
        type: "input",
        message: "What product?"

    }).then(function(answer) {
        connection.query("SELECT * FROM products WHERE ?", {item_id: answer.item}, function(err, res) {
        		if (err) throw err;
        		console.log(res[0].product_name);
    });
        

        });
        

}
