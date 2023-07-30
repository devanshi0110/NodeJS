const mysql = require('nodejs-mysql').default;

const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb"
}

const db = mysql.getInstance(config)



db.connect()
    .then(function(){
        console.log("Connected!");

        var sql = "INSERT INTO student (name,class,age) VALUES ('Maisa','MSC_ICT',24)";
        return db.exec(sql);
      
    }).then(function(res){
        console.log(res);
        return db.exec("SELECT * FROM student");
    }).then(function(result){
        for (var i in result) {
            console.log(result[i].rollno + " : " +result[i].name+ "  " +result[i].class+ "   " +result[i].age);
        }
        process.exit(0);
    }).catch(function(err){
        console.log("Error");
        process.exit(0);
    })