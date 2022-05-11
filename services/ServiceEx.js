const bodyParser = require('body-parser');
const mysql = require('mysql');

//Estableciendo datos de conexión
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'n0m3l0',
    database: 'petDb'
});


//Estableciendo conexión
conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected with App...');
  });

//GetItems example
function getItems(){
    let sqlQuery = "SELECT * FROM pets";

    let query = conn.query(sqlQuery, (err, results) => {
        if(err) throw err;
        let jsonResponse = JSON.stringify({"status":200, "error":null, "response":results});
        console.log(jsonResponse);
      });
}
   

function apiResponse(results){
    return JSON.stringify({"status": 200, "error": null, "response": results});
}
       
module.exports = getItems;
module.exports = conn;
module.exports = apiResponse;