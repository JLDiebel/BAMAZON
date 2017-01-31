var mysql = require('mysql');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Utsasucks1",
    database: "top_songsDB"
});


connection.connect(function(err) {
  if (err) throw err;
  
openMKT();
});

var openMKT = function() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to purchase, friend?",
    choices: ["Flubber", "Nunchucks",
      "Throwing Stars", "Senzu Beans", "Ooze", "6-finger Gloves", "Boomerang", "Hover Board", "Fire Flower", "Monocle"]
  }).then(function(answer) 