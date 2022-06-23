
function MongoClient(resp)
{
	var MongoClient = require('mongodb').MongoClient;
	// var url = "mongodb://localhost:27017/";
	return MongoClient;
}

function url(resp)
{
	// var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	return url;
}

function display(resp)
{
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("mydb");
	  dbo.collection("bankCustomerDetails").find({}).toArray(function(err, result) {
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
	    
	    console.log(result);
	    // db.close();
	  });
	});
}

function insert(resp, accountNumber, name, balance)
{
	console.log(accountNumber);
	console.log(name);
	console.log(balance);

	// var MongoClient = MongoClient(resp);
	// var url = url(resp);
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("mydb");
	  var myobj = {accountNumber: 65, name: "Sharvani", balance: 76556 };
	  dbo.collection("bankCustomerDetails").insertOne(myobj, function(err, res) {
	    if (err) throw err;
	    console.log("1 document inserted");
	    // db.close();
	  });
	});
}
function update(resp)
{
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://127.0.0.1:27017/";

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("mydb");
	  var myquery = { name: "Sharvani", balance: 76556 };
	  var newvalues = { $set: {name: "Keerthi", address: 65456 } };
	  dbo.collection("bankCustomerDetails").updateOne(myquery, newvalues, function(err, res) {
	    if (err) throw err;
	    console.log("1 document updated");
	    // db.close();
	  });
	});
}

function deleteAccount(resp, accountNumber)
{
	console.log(accountNumber);
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("mydb");
	  var myquery = { accountNumber: 65};
	  dbo.collection("bankCustomerDetails").deleteOne(myquery, function(err, obj) {
	    if (err) throw err;
	    console.log("1 document deleted");
	    // db.close();
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

app.get('/insert', function(req, res){
	var accountNumber = req.query.accountNumber;
	var name = req.query.name;
	var balance = req.query.balance;
    insert(res, accountNumber, name, balance);
});
app.get('/update', function(req, res){
	var accountNumber = req.query.accountNumber;
	var name = req.query.name;
	var balance = req.query.balance;
    update(res, accountNumber, name, balance);
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

