function connection(resp)
{
	var mysql = require('mysql');
	var con = mysql.createConnection({
	  host: "165.22.14.77",
	  user: "sharvani",
	  password: "pwdsharvani",
	  database: "dbSharvani"
	});
	return con;
}
function display(resp)
{
	var con = connection(resp);
	con.connect(function(err) {
	  if (err) throw err;
	  con.query("SELECT * FROM bankCustomerDetails", function (err, result, fields) {
	    if (err) throw err;
		resp.write("<table><tr><th>AccountNumber</th><th>Name</th><th>Balace</th></tr>");
		for (var i = 0; i < result.length; i++) {
			var deleteCommand = "$('#loadHere1').load('http://localhost/delete?accountNumber=" + result[i].accountNumber + "');";
			// var updateCommand = "$('#loadHere1').load('http://localhost/insertAndUpdate?accountNumber='"+result[i].accountNumber+"'&name='"+result[i].name+"'&balance='"+result[i].balance+";";
			var updateCommand = resp.write("<td><button onclick= javascript:(function(){$('#accountNumber').val('" + result[i].accountNumber + "');$('#name').val('" + result[i].name + "');$('#balance').val('" + result[i].balance + "')})();>Update</button></td></tr>");
			resp.write("<tr><td>" + result[i].accountNumber + "</td><td>" + result[i].name + "</td><td>" + result[i].balance + "</td><td><button onclick="+deleteCommand+"><span class='glyphicon glyphicon-search'>DELETE</span></button></td></tr>");
		}		
	    resp.write("</table>");
		resp.send();
	  });
	});
}

function insertAndUpdate(resp, accountNumber, name, balance)
{
	var con = connection(resp);
	con.connect(function(err){
		if (err) throw err;
	  con.query("REPLACE INTO bankCustomerDetails VALUES (" + accountNumber + ", '" + name +"', "+ balance+", 1)", function (err, result, fields) {
		resp.send();
	  });
	});
}

function deleteAccount(resp, accountNumber)
{
	var con = connection(resp);
	con.connect(function(err){
		if (err) throw err;
		con.query("DELETE FROM bankCustomerDetails WHERE accountNumber = "+ accountNumber, function (err, result, fields) {
		resp.send();
		});
	});
}

var express = require('express');
var port = 80;
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/display', function(req, res){
    display(res);
});

app.get('/insertAndUpdate', function(req, res){
	var accountNumber = req.query.accountNumber;
	var name = req.query.name;
	var balance = req.query.balance;
    insertAndUpdate(res, accountNumber, name, balance);
});

app.get('/delete', function(req, res){
	var accountNumber = req.query.accountNumber;
    deleteAccount(res, accountNumber);
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
    }
});












































// CRUDS with updatebutton and delete button on new column

// function connection(resp)
// {
// 	var mysql = require('mysql');
// 	var con = mysql.createConnection({
// 	  host: "165.22.14.77",
// 	  user: "sharvani",
// 	  password: "pwdsharvani",
// 	  database: "dbSharvani"
// 	});
// 	return con;
// }
// function display(resp)
// {
// 	var con = connection(resp);
// 	con.connect(function(err) {
// 	  if (err) throw err;
// 	  con.query("SELECT * FROM bankCustomerDetails", function (err, result, fields) {
// 	    if (err) throw err;
// 		resp.write("<table><tr><th>AccountNumber</th><th>Name</th><th>Balace</th></tr>");
// 		for (var i = 0; i < result.length; i++) {
// 			var deleteCommand = "$('#loadHere1').load('http://localhost/delete?accountNumber=" + result[i].accountNumber + "');";
// 			// var updateCommand = "$('#loadHere1').load('http://localhost/insertAndUpdate?accountNumber='"+result[i].accountNumber+"'&name='"+result[i].name+"'&balance='"+result[i].balance+";";
// 			var updateCommand = resp.write("<td><button onclick= javascript:(function(){$('#accountNumber').val('" + result[i].accountNumber + "');$('#name').val('" + result[i].name + "');$('#balance').val('" + result[i].balance + "')})();>Update</button></td></tr>");
// 			resp.write("<tr><td>" + result[i].accountNumber + "</td><td>" + result[i].name + "</td><td>" + result[i].balance + "</td><td><button onclick="+deleteCommand+"><span class='glyphicon glyphicon-search'>DELETE</span></button></td></tr>");
// 		}		
// 	    resp.write("</table>");
// 		resp.send();
// 	  });
// 	});
// }

// function insertAndUpdate(resp, accountNumber, name, balance)
// {
// 	var con = connection(resp);
// 	con.connect(function(err){
// 		if (err) throw err;
// 	  con.query("REPLACE INTO bankCustomerDetails VALUES (" + accountNumber + ", '" + name +"', "+ balance+", 1)", function (err, result, fields) {
// 		resp.send();
// 	  });
// 	});
// }

// function deleteAccount(resp, accountNumber)
// {
// 	var con = connection(resp);
// 	con.connect(function(err){
// 		if (err) throw err;
// 		con.query("DELETE FROM bankCustomerDetails WHERE accountNumber = "+ accountNumber, function (err, result, fields) {
// 		resp.send();
// 		});
// 	});
// }

// var express = require('express');
// var port = 80;
// var app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// app.get('/display', function(req, res){
//     display(res);
// });

// app.get('/insertAndUpdate', function(req, res){
// 	var accountNumber = req.query.accountNumber;
// 	var name = req.query.name;
// 	var balance = req.query.balance;
//     insertAndUpdate(res, accountNumber, name, balance);
// });

// app.get('/delete', function(req, res){
// 	var accountNumber = req.query.accountNumber;
//     deleteAccount(res, accountNumber);
// });

// app.listen(port, function(err){
//     if(err){
//         console.log(err);
//     }else{
//     }
// });








































// CRUDS without coulmn delete and update button.

// function connection(resp)
// {
// 	var mysql = require('mysql');
// 	var con = mysql.createConnection({
// 	  host: "165.22.14.77",
// 	  user: "sharvani",
// 	  password: "pwdsharvani",
// 	  database: "dbSharvani"
// 	});
// 	return con;
// }
// function display(resp)
// {
// 	var con = connection(resp);
// 	con.connect(function(err) {
// 	  if (err) throw err;
// 	  con.query("SELECT * FROM bankCustomerDetails", function (err, result, fields) {
// 	    if (err) throw err;
// 		resp.write("<table><tr><th>AccountNumber</th><th>Name</th><th>Balace</th></tr>");
// 		for (var i = 0; i < result.length; i++) {
// 			resp.write("<tr><td>" + result[i].accountNumber + "</td><td>" + result[i].name + "</td><td>" + result[i].balance + "</td></tr>");
// 		}		
// 	    resp.write("</table>");
// 		resp.send();
// 	  });
// 	});
// }

// function insertAndUpdate(resp, accountNumber, name, balance)
// {
// 	var con = connection(resp);
// 	con.connect(function(err){
// 		if (err) throw err;
// 	  con.query("REPLACE INTO bankCustomerDetails VALUES (" + accountNumber + ", '" + name +"', "+ balance+", 1)", function (err, result, fields) {
// 		resp.send();
// 	  });
// 	});
// }

// function deleteAccount(resp, accountNumber)
// {
// 	var con = connection(resp);
// 	con.connect(function(err){
// 		if (err) throw err;
// 		con.query("DELETE FROM bankCustomerDetails WHERE accountNumber = "+ accountNumber, function (err, result, fields) {
// 		resp.send();
// 		});
// 	});
// }

// var express = require('express');
// var port = 80;
// var app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// app.get('/display', function(req, res){
//     display(res);
// });

// app.get('/insertAndUpdate', function(req, res){
// 	var accountNumber = req.query.accountNumber;
// 	var name = req.query.name;
// 	var balance = req.query.balance;
//     insertAndUpdate(res, accountNumber, name, balance);
// });

// app.get('/delete', function(req, res){
// 	var accountNumber = req.query.accountNumber;
//     deleteAccount(res, accountNumber);
// });

// app.listen(port, function(err){
//     if(err){
//         console.log(err);
//     }else{
//     }
// });



















































// function display(resp)
// // if ()
// {
// 	var mysql = require('mysql');
// 	var con = mysql.createConnection({
// 	  host: "165.22.14.77",
// 	  user: "sharvani",
// 	  password: "pwdsharvani",
// 	  database: "dbSharvani"
// 	});
// 	con.connect(function(err) {
// 	  if (err) throw err;
// 	  con.query("SELECT * FROM bankCustomerDetails", function (err, result, fields) {
// 	    if (err) throw err;
// 	    console.log(result);
// 		// resp.writeHead(200, {'Content-Type': 'text/html'});
// 		resp.write("<table><tr><th>AccountNumber</th><th>Name</th><th>Balace</th></tr>");
// 		for (var i = 0; i < result.length; i++) {
// 			resp.write("<tr><td>" + result[i].accountNumber + "</td><td>" + result[i].name + "</td><td>" + result[i].balance + "</td></tr>");
// 		}		
// 	    resp.write("</table>");
// 		resp.send();
// 	  });
// 	});
// }
// // var http = require('http');
// // var fs = require('fs');
// // var url = require('url');
// // var server = http.createServer(function (req, resp){
// 	// display(resp);
// 	// resp.write('2');
// 	// var adr = 'http://localhost/function=display';
// 	// resp.writeHead(200, {'Content-Type': 'text/html'});
// 	// // var q = url.parse(req.url, true);
// 	// // var qdata = q.query;
// 	// // console.log(qdata.function);
// 	// // if (qdata.function == "display") 
// 	// // {
// 	// var express = require('express');
// 	// var path = require('path');
// 	// // var open = require('open');
// 	// var app = express();

// 	// app.get('/', function(req, resp){
// 	// 	resp.send("Hi");
// 	// 	resp.end('1');
// 	// });

// 	// app.post('/', function(req, resp) {
// 	// });
// 	// app.listen(port, function(err){
//  //    if(err){
//  //        console.log(err);
//  //    }else{
//  //        open('http://localhost:' + port);
//  //    }
// 	// });
// 		// var express = require('express');
// 		// var app = express();
// 		// app.use(function(req, resp, next) {
// 		//   resp.header("Access-Control-Allow-Origin", "*");
// 		//   resp.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 		//   next();
// 		// });

// 		// app.get('/', function (req, res) {
// 		// 	display(resp);
// 		//   });

// 		// app.post('/', function(req, res){
// 		// });
// 	// });
// // server.listen(80);
//     // res.end('Sharvani');





// var express = require('express');
// var port = 80;
// var app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// app.get('/display', function(req, res){
//     display(res);
// });

// app.listen(port, function(err){
//     if(err){
//         console.log(err);
//     }else{
//     }
// });





























// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "165.22.14.77",
//   user: "sharvani",
//   password: "pwdsharvani",
//   database: "dbSharvani"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM bankCustomerDetails", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });