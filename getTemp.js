function getTemperature()
{
	var city = document.getElementById('city').value;
	let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=e6b7427f8bf97526adf2869093c7509c&units=metric";
	let xmlHttpReq = new XMLHttpRequest();
	var img = document.createElement("img");
    img.src = "loading.gif";
	xmlHttpReq.onload = function() 
	{
		$("#loadHere").html(img);
		var json = JSON.parse(xmlHttpReq.responseText);
		var main = json.main;
		var temp = main.temp;
		$("#loadHere").html(temp);
	}
	xmlHttpReq.open("GET", url, false);
	xmlHttpReq.send(null);
}
