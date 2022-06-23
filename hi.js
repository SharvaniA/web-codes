function sayHi()
{
	// alert("Hi" + document.getElementById('input').value);
	var textBoxes = document.getElementsByTagName("input");
	for (var i = 0;i<3;i++) 
	{
		alert(textBoxes[i].value);
		console.log(textBoxes[i].value)
	}
}
