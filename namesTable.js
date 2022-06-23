// function addName()
// {
// 	const myLists = localStorage.getItem('userName');
// 	var myList = JSON.parse(myLists);
// 	// var myList = [];
// 	myList.push(document.getElementById("personName").value);
// 	localStorage.setItem('userName', JSON.stringify(myList));
// 	createTable(myList);
// }

// function createAndLoadTable(myList)
// {
// 	// const myLists = localStorage.getItem('userName');
// 	// var myList = JSON.parse(myLists);
// 	// document.getElementById('result').innerHTML = myList;

// 	var myTableDiv = document.getElementById('result');
// 	var tbl = document.createElement("table");
// 	// var heading = document.createElement("TH");
// 	// heading.innerHTML = "Names myList";
// 	var tblBody = document.createElement("tbody");
// 	for (let i = 0; i < myList.length; i++) 
// 	{
// 		var row = document.createElement("tr");
// 		var cell = document.createElement("td");

// 		var cellText = document.createTextNode(myList[i]);

// 		let buttonKeys = document.createElement("button");
// 		buttonKeys.innerHTML = "Delete";
// 		buttonKeys.onclick = function()
// 		{
// 			myList.splice(i, 1); 
// 			// delete myList[i];
// 			localStorage.setItem('userName', JSON.stringify(myList));
// 			createTable(myList);
// 			// document.getElementById('result').innerHTML = myList;
// 		};
// 		cell.appendChild(cellText);
// 		cell.appendChild(buttonKeys);
// 		row.appendChild(cell);
// 		tblBody.appendChild(row);
// 	}
// 	tbl.appendChild(tblBody);
// 	myTableDiv.replaceChild(tbl, myTableDiv.childNodes[0]);
// }





























// function addName()
// {
// 	const myLists = localStorage.getItem('userName');
// 	var myList = JSON.parse(myLists);
// 	// var myList = [];
// 	myList.push(document.getElementById("personName").value);
// 	localStorage.setItem('userName', JSON.stringify(myList));
// 	createTable(myList);
// }

// function createAndLoadTable(myList)
// {
// 	// const myLists = localStorage.getItem('userName');
// 	// var myList = JSON.parse(myLists);
// 	// document.getElementById('result').innerHTML = myList;

// 	var myTableDiv = document.getElementById('result');
// 	var tbl = document.createElement("table");
// 	// var heading = document.createElement("TH");
// 	// heading.innerHTML = "Names myList";
// 	var tblBody = document.createElement("tbody");
// 	for (let i = 0; i < myList.length; i++) 
// 	{
// 		var row = document.createElement("tr");
// 		var cell = document.createElement("td");

// 		var cellText = document.createTextNode(myList[i]);

// 		let buttonKeys = document.createElement("button");
// 		buttonKeys.innerHTML = "Delete";
// 		buttonKeys.onclick = function()
// 		{
// 			myList.splice(i, 1); 
// 			// delete myList[i];
// 			localStorage.setItem('userName', JSON.stringify(myList));
// 			createTable(myList);
// 			// document.getElementById('result').innerHTML = myList;
// 		};
// 		cell.appendChild(cellText);
// 		cell.appendChild(buttonKeys);
// 		row.appendChild(cell);
// 		tblBody.appendChild(row);
// 	}
// 	tbl.appendChild(tblBody);
// 	myTableDiv.replaceChild(tbl, myTableDiv.childNodes[0]);
// }






























function addName()
{
	const myLists = localStorage.getItem('userName');
	var myList = JSON.parse(myLists);
	// var myList = [];
	myList.push(document.getElementById("personName").value);
	localStorage.setItem('userName', JSON.stringify(myList));
	createTable();
}

function createTable()
{
	const myLists = localStorage.getItem('userName');
	var myList = JSON.parse(myLists);
	// document.getElementById('result').innerHTML = myList;

	var myTableDiv = document.getElementById('result');
	var tbl = document.createElement("table");
	// var heading = document.createElement("TH");
	// heading.innerHTML = "Names myList";
	var tblBody = document.createElement("tbody");
	for (let i = 0; i < myList.length; i++) 
	{
		var row = document.createElement("tr");
		var cell = document.createElement("td");

		var cellText = document.createTextNode(myList[i]);

		let buttonKeys = document.createElement("button");
		buttonKeys.innerHTML = "Delete";
		buttonKeys.onclick = function()
		{
			myList.splice(i, 1); 
			// delete myList[i];
			localStorage.setItem('userName', JSON.stringify(myList));
			createTable();
			// document.getElementById('result').innerHTML = myList;
		};
		cell.appendChild(cellText);
		cell.appendChild(buttonKeys);
		row.appendChild(cell);
		tblBody.appendChild(row);
	}
	tbl.appendChild(tblBody);
	myTableDiv.replaceChild(tbl, myTableDiv.childNodes[0]);
}






















// function addName()
// {
// 	const myLists = localStorage.getItem('userName');
// 	var myList = JSON.parse(myLists);
// 	// var myList = [];
// 	myList.push(document.getElementById("personName").value);
// 	// document.getElementById('result').innerHTML = myList;
// 	localStorage.setItem('userName', JSON.stringify(myList));
// 	createTable();
// }

// function createTable()
// {
// 	const myLists = localStorage.getItem('userName');
// 	var myList = JSON.parse(myLists);
// 	// document.getElementById('result').innerHTML = myList;

// 	var myTableDiv = document.getElementById('result');
// 	var tbl = document.createElement("table");
// 	// var heading = document.createElement("TH");
// 	// heading.innerHTML = "Names myList";
// 	var tblBody = document.createElement("tbody");
// 	for (let i = 0; i < myList.length; i++) 
// 	{
// 		var row = document.createElement("tr");
// 		var cell = document.createElement("td");

// 		// cell.innHTML = "Sharvani";
// 		// cell.innHTML = myList[i];
// 		var cellText = document.createTextNode(myList[i]);

// 		cell.appendChild(cellText);
// 		row.appendChild(cell);
// 		tblBody.appendChild(row);
// 	}
// 	tbl.appendChild(tblBody);
// 	myTableDiv.replaceChild(tbl, myTableDiv.childNodes[0]);
// }


























// // const myList = [];
// // document.getElementById('result').innerHTML = myList;
// function addName()
// {
// 	const myLists = localStorage.getItem('userName');
// 	var myList = JSON.parse(myLists);
// 	// for (let i = 0; i < myList.length; i++) 
// 	// {
// 	// 	localStorage.setItem('userName', myList[i]);
// 	// 	names = localStorage.getItem('userName', myList[i]);
// 	// 	document.getElementById('result').innerHTML = names;
// 	// }
// 	myList.push(document.getElementById("personName").value);
// 	document.getElementById('result').innerHTML = myList;
// 	localStorage.setItem('userName', JSON.stringify(myList));
// 	 // localStorage.setItem("bar", JSON.stringify([1,2,3]));
// 	// document.getElementById('result').innerHTML = localStorage.getItem('userName');
// }

























// function addName() 
// {
// 	var personName = document.getElementById('personName').value;
// 	var nameslength = 'Names[' + (localStorage.length+1) + ']';
// 	localStorage.setItem(nameslength, personName);
//  	document.getElementById('personName').value="";
// 	var html="";
//  	html="<tr><td>" + personName + "</td><tr>";
//  	document.getElementById('result').innerHTML+=html
// }

// function loadList()
// {
// 	// localStorage.clear();
// 	var html="";
// 	for (let i = 0; i <= localStorage.length; i++) 
// 	{
// 		html="<tr><td>" + localStorage.getItem('Names['+i+']') + "</td></tr>";
// 		document.getElementById('result').innerHTML += html;
// 	}
// }























// function addName() 
// {
// 	var personName = document.getElementById('personName').value;
// 	var nameslength = 'Names[' + (localStorage.length+1) + ']';
// 	localStorage.setItem(nameslength, personName);
//  	document.getElementById('personName').value="";
// 	var html="";
//  	html="<tr><td>" + personName + "</td><tr>";
//  	document.getElementById('result').innerHTML+=html
// }

// function loadList()
// {
// 	// localStorage.clear();
// 	var html="";
// 	for (let i = 0; i <= localStorage.length; i++) 
// 	{
// 		html="<tr><td>" + localStorage.getItem('Names['+i+']') + "</td></tr>";
// 		document.getElementById('result').innerHTML += html;
// 	}
// }
































// function addName() 
// {
// 	var personName1 = document.getElementById('personName').value;
// 	var html="";
//  	html="<tr><td>"+personName1+"</td><tr>";
//  	document.getElementById('result').innerHTML += html;
// 	sessionStorage.names += html;
//  	document.getElementById('personName').value="";
// }


























// function addName() 
// {
// 	var personName1 = document.getElementById('personName').value;
// 	var html="";
//  	html="<tr><td>"+personName1+"</td><tr>";
//  	document.getElementById('result').innerHTML += html;
// 	localStorage.names += html;
//  	document.getElementById('personName').value="";
// }



























 //

// function addName() 
// {
// 	var personName = document.getElementById('personName').value;
// 	var html="";
//  	html="<tr><td>"+personName+"</td><tr>";
//  	document.getElementById('result').innerHTML+=html;
//  	document.getElementById('personName').value="";
// }