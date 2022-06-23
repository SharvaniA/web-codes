var http = require('http');

http.createServer(function(req, resp){
	resp.writeHead(200, {'Content-Type': 'text/html'});
	resp.write("<title>CRUD</title><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script><script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js'></script><link rel='stylesheet'href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css'>Account Number:	<input type='text' name='accountNumber' id='accountNumber'><br>	Name:	<input type='text' name='name' id='name'><br>	Balance:	<input type='text' name='balance' id='balance'><br>	<button name='save' id='save'><span class='glyphicon glyphicon-download-alt'>SAVE</span></button>	<p id='loadHere'></p><p id='loadHere1'></p>");
	resp.write("<button onclick=\"console.log(document.documentElement.innerHTML)\">SHOW SOURCE</button>");
	resp.end();
}).listen(80);
