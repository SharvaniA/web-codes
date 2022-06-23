function sum()
{
	var num1 = document.getElementById("number1").value;
	var num2 = document.getElementById("number2").value;
	var sum = parseInt(num1) + parseInt(num2);
	alert('The sum of ' + num1 + ' and ' + num2 + ' is ' + sum + '.');
	console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + sum + '.');
}