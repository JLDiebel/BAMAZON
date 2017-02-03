var mysql = require('mysql');
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Utsasucks1",
    database: "BAMAZON"
});
var table = new Table({
    head: ['ID', 'PRODUCT', 'PRICE'],
    colWidths: [10, 100, 10]
});

table.push(
    ['1', 'Flubber', '300'], ['2', 'Senzu Beans', '99'], ['3', '6-finger Gloves', '6'], ['4', 'Boomerang', '10'], ['5', 'Ooze', '1000'], ['6', 'Monocle', '50'], ['7', 'Hover Board', '450'], ['8', 'Fire Flower', '68'], ['9', 'Nunchucks', '22'], ['10', 'Throwing Stars', '3']
);

console.log(table.toString());

connection.connect(function(err) {
    if (err) throw err;

    openMKT();
});

var openMKT = function() {
        inquirer.prompt({
            name: "item",
            type: "input",
            message: "Please select a Product ID."

        }).then(function(answer) {
            connection.query("SELECT * FROM products WHERE ?", { item_id: answer.item }, function(err, res) {
                if (err) throw err;
                console.log(res[0].product_name);
                var prod = res[0].product_name;
            });

            openMKT2();
        });
        var openMKT2 = function() {
                inquirer.prompt({
                        name: "stock",
                        type: "input",
                        message: "Excellent choice! How many would you like?"

                    }).then(function(answer) {
                            console.log(answer.stock)
                            connection.query("SELECT stock_qty FROM products where item_id=?", { stock_qty: answer.stock }, function(err, res) {

                                    if (answer.stock < res) {
                                        console.log("ok");
                                        var amount = answer.stock
                                        connection.query("UPDATE products SET stock_qty = stock_qty - amount WHERE item_id= prod", function(err, res) {

                                            console.log(res);
                                        });
                                    } else {
                                        console.log("Insufficient Inventory");
                                        inquirer.prompt({
                                            name: "stock",
                                            type: "input",
                                            message: "please make another choice?"

                                        });
                                    }
                                }
                            });
                        };
                    }