var mysql = require('mysql');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Utsasucks1",
    database: "BAMAZON"
});

connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
  console.log(res);
  console.log(table.print(res));
});

connection.connect(function(err) {
  if (err) throw err;
  
openMKT();
});

var openMKT = function() {
  inquirer.prompt({
    name: "id",
    type: "input",
    message: "What product?"

  }).then(function(answer) {
  	var query = "SELECT item_id FROM products WHERE ?";
  	connecti_on.query(query, {product: id.item_id}, function(err, res){
  		for (var i = 0; i < res.length; i++) {
  			console.log(res[i].item_id);
  		}
  		openMKT();
  	}); 
  
});
}