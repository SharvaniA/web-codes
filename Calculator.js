function sendNum(digit)
{
	document.getElementById("textArea").value = document.getElementById("textArea").value + digit;
}
function equalTo()
{
	document.getElementById("textArea").value = eval(document.getElementById("textArea").value);
}
function clearScr()
{
	document.getElementById("textArea").value = "";	
}
