<?php
$servername = "165.22.14.77";
$username = "sharvani";
$password = "pwdsharvani";
$dbname = "dbSharvani";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connection Successful.";

if(isset($_GET['displayButton']))
{
	$sql = "SELECT * FROM bankCustomerDetails";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) 
	{
		echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
	  while($row = $result->fetch_assoc()) 
	  {
	  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"]. " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td><td><button onclick='$('#loadHere').load('CRUDS.php?deleteAccountNumber=". $row['accountNumber'] . "&deleteButton=deleteButton')'>DELETE</button></td></tr>";
	  }
	} 
	else
	{
	  echo "0 results";
	}	

}

if(isset($_GET['deleteButton']))
{
	$sql1 = "DELETE FROM bankCustomerDetails WHERE accountNumber = " . $_GET['deleteAccountNumber'];
	$result1 = $conn->query($sql1);
}


if(isset($_GET['saveButton']))
{
	$sql = "REPLACE INTO bankCustomerDetails VALUES ( '" . $_GET['saveAccountNumber'] . "', '" . $_GET['saveName'] . "', " . $_GET['saveBalance'] . ", 1)";
	$result = $conn->query($sql);
}


if(isset($_GET['updateButton']))
{
	$sql = "REPLACE bankCustomerDetails SET name = '" . $_GET['updateName'] . "', balance = " . $_GET['updateBalance'] . " WHERE accountNumber = " . $_GET['updateAccountNumber'];
	$result = $conn->query($sql);
}


$conn->close();
?>




















































<?php
// $servername = "165.22.14.77";
// $username = "sharvani";
// $password = "pwdsharvani";
// $dbname = "dbSharvani";

// $conn = new mysqli($servername, $username, $password, $dbname);

// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }
// echo "Connection Successful.";

// if(isset($_GET['searchButton']))
// {
// 	$sql = "SELECT * FROM bankCustomerDetails WHERE accountNumber = '" . $_GET["searchAccountNumber"] . "'";
// 	$result = $conn->query($sql);
// 	if ($result->num_rows > 0) 
// 	{
// 		echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
// 	  while($row = $result->fetch_assoc()) 
// 	  {
// 	  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"]. " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td></tr>";
// 	  }
// 	} 
// 	else
// 	{
// 	  echo "0 results";
// 	}
// }

// if(isset($_GET['displayButton']))
// {
// 	$sql = "SELECT * FROM bankCustomerDetails";
// 	$result = $conn->query($sql);
// 	if ($result->num_rows > 0) 
// 	{
// 		echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
// 	  while($row = $result->fetch_assoc()) 
// 	  {
// 	  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"]. " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td></tr>";
// 	  }
// 	} 
// 	else
// 	{
// 	  echo "0 results";
// 	}	
// }

// if(isset($_GET['insertButton']))
// {
// 	echo "1";
// 	$sql = "INSERT INTO bankCustomerDetails VALUES ( '" . $_GET['insertAccountNumber'] . "', '" . $_GET['insertName'] . "', " . $_GET['insertBalance'] . ", 1)";
// 	echo $sql;
// 	$result = $conn->query($sql);

// 	$sql1 = "SELECT * FROM bankCustomerDetails WHERE accountNumber = " . $_GET['insertAccountNumber'];
// 	$result1 = $conn->query($sql1);
// 	if ($result1->num_rows > 0) 
// 	{
// 		echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
// 	  while($row = $result1->fetch_assoc()) 
// 	  {
// 	  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"]. " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td></tr>";
// 	  }
// 	  echo "<tr><td>Insertion Successful.</td></tr>";
// 	} 
// 	else
// 	{
// 	  echo "0 results";
// 	}
// }

// if(isset($_GET['deleteButton']))
// {
// 	$sql = "DELETE FROM bankCustomerDetails WHERE accountNumber = " . $_GET['deleteAccountNumber'];
// 	$result = $conn->query($sql);
// 	echo "Deleted Successfully.";
// }

// if(isset($_GET['updateButton']))
// {
// 	$sql = "UPDATE bankCustomerDetails SET name = '" . $_GET['updateName'] . "', balance = " . $_GET['updateBalance'] . " WHERE accountNumber = " . $_GET['updateAccountNumber'];
// 	$result = $conn->query($sql);

// 	$sql1 = "SELECT * FROM bankCustomerDetails WHERE accountNumber = " . $_GET['updateAccountNumber'];
// 	$result1 = $conn->query($sql1);
// 	if ($result1->num_rows > 0) 
// 	{
// 		echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
// 	  while($row = $result1->fetch_assoc()) 
// 	  {
// 	  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"] . " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td></tr>";
// 	  }
// 	  	echo "<tr><td>Updation Successful.</td></tr>";
// 	} 
// 	else
// 	{
// 	  echo "0 results";
// 	}
// }


// $conn->close();
?>











































<?php
// $servername = "165.22.14.77";
// $username = "sharvani";
// $password = "pwdsharvani";
// $dbname = "dbSharvani";

// $conn = new mysqli($servername, $username, $password, $dbname);

// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }
// echo "Connection Successful.";

// if(isset($_GET['searchButton']))
// {
// 	$sql = "SELECT * FROM bankCustomerDetails WHERE accountNumber = '" . $_GET["searchAccountNumber"] . "'";
// 	$result = $conn->query($sql);
// 	if ($result->num_rows > 0) 
// 	{
// 		echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
// 	  while($row = $result->fetch_assoc()) 
// 	  {
// 	  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"]. " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td></tr>";
// 	  }
// 	} 
// 	else
// 	{
// 	  echo "0 results";
// 	}
// }

// if(isset($_GET['displayButton']))
// {
// 	$sql = "SELECT * FROM bankCustomerDetails";
// 	$result = $conn->query($sql);
// 	if ($result->num_rows > 0) 
// 	{
// 		echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
// 	  while($row = $result->fetch_assoc()) 
// 	  {
// 	  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"]. " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td></tr>";
// 	  }
// 	} 
// 	else
// 	{
// 	  echo "0 results";
// 	}	
// }

// if(isset($_GET['insertButton']))
// {
// 	$sql = "INSERT INTO bankCustomerDetails VALUES ( '" . $_GET['insertAccountNumber'] . "', '" . $_GET['insertName'] . "', " . $_GET['insertBalance'] . ", 1)";
// 	$result = $conn->query($sql);

// 	$sql1 = "SELECT * FROM bankCustomerDetails WHERE accountNumber = " . $_GET['insertAccountNumber'];
// 	$result1 = $conn->query($sql1);
// 	if ($result1->num_rows > 0) 
// 	{
// 		echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
// 	  while($row = $result1->fetch_assoc()) 
// 	  {
// 	  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"]. " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td></tr>";
// 	  }
// 	  echo "<tr><td>Insertion Successful.</td></tr>";
// 	} 
// 	else
// 	{
// 	  echo "0 results";
// 	}
// }

// if(isset($_GET['deleteButton']))
// {
// 	$sql = "DELETE FROM bankCustomerDetails WHERE accountNumber = " . $_GET['deleteAccountNumber'];
// 	$result = $conn->query($sql);
// 	echo "Deleted Successfully.";
// }

// if(isset($_GET['updateButton']))
// {
// 	$sql = "UPDATE bankCustomerDetails SET name = '" . $_GET['updateName'] . "', balance = " . $_GET['updateBalance'] . " WHERE accountNumber = " . $_GET['updateAccountNumber'];
// 	$result = $conn->query($sql);

// 	$sql1 = "SELECT * FROM bankCustomerDetails WHERE accountNumber = " . $_GET['updateAccountNumber'];
// 	$result1 = $conn->query($sql1);
// 	if ($result1->num_rows > 0) 
// 	{
// 		echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
// 	  while($row = $result1->fetch_assoc()) 
// 	  {
// 	  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"] . " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td></tr>";
// 	  }
// 	  	echo "<tr><td>Updation Successful.</td></tr>";
// 	} 
// 	else
// 	{
// 	  echo "0 results";
// 	}
// }


// $conn->close();
?>

































<?php
// $servername = "165.22.14.77";
// $username = "sharvani";
// $password = "pwdsharvani";
// $dbname = "dbSharvani";

// $conn = new mysqli($servername, $username, $password, $dbname);

// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }
// echo "Connection Successful.";

// if(isset($_GET['searchButton']))
// {
// 	$sql = "SELECT * FROM bankCustomerDetails WHERE accountNumber = '" . $_GET["searchAccountNumber"] . "'";
// 	$result = $conn->query($sql);
// 	if ($result->num_rows > 0) 
// 	{
// 		echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
// 	  while($row = $result->fetch_assoc()) 
// 	  {
// 	  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"]. " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td></tr>";
// 	  }
// 	} 
// 	else
// 	{
// 	  echo "0 results";
// 	}
// }

// if(isset($_GET['displayButton']))
// {
// 	$sql = "SELECT * FROM bankCustomerDetails";
// 	$result = $conn->query($sql);
// 	if ($result->num_rows > 0) 
// 	{
// 		echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
// 	  while($row = $result->fetch_assoc()) 
// 	  {
// 	  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"]. " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td></tr>";
// 	  }
// 	} 
// 	else
// 	{
// 	  echo "0 results";
// 	}	
// }

// if(isset($_GET['insertButton']))
// {
// 	$sql = "INSERT INTO bankCustomerDetails VALUES ( '" . $_GET['insertAccountNumber'] . "', '" . $_GET['insertName'] . "', " . $_GET['insertBalance'] . ", 1)";
// 	$result = $conn->query($sql);

// 	$sql1 = "SELECT * FROM bankCustomerDetails WHERE accountNumber = " . $_GET['insertAccountNumber'];
// 	$result1 = $conn->query($sql1);
// 	if ($result1->num_rows > 0) 
// 	{
// 		echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
// 	  while($row = $result1->fetch_assoc()) 
// 	  {
// 	  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"]. " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td></tr>";
// 	  }
// 	  echo "<tr><td>Insertion Successful.</td></tr>";
// 	} 
// 	else
// 	{
// 	  echo "0 results";
// 	}
// }

// if(isset($_GET['deleteButton']))
// {
// 	$sql = "DELETE FROM bankCustomerDetails WHERE accountNumber = " . $_GET['deleteAccountNumber'];
// 	$result = $conn->query($sql);
// 	echo "Deleted Successfully.";
// }

// if(isset($_GET['updateButton']))
// {
// 	$sql = "UPDATE bankCustomerDetails SET name = '" . $_GET['updateName'] . "', balance = " . $_GET['updateBalance'] . " WHERE accountNumber = " . $_GET['updateAccountNumber'];
// 	$result = $conn->query($sql);

// 	$sql1 = "SELECT * FROM bankCustomerDetails WHERE accountNumber = " . $_GET['updateAccountNumber'];
// 	$result1 = $conn->query($sql1);
// 	if ($result1->num_rows > 0) 
// 	{
// 		echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
// 	  while($row = $result1->fetch_assoc()) 
// 	  {
// 	  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"] . " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td></tr>";
// 	  }
// 	  	echo "<tr><td>Updation Successful.</td></tr>";
// 	} 
// 	else
// 	{
// 	  echo "0 results";
// 	}
// }


// $conn->close();
?>




































<?php
// $servername = "165.22.14.77";
// $username = "sharvani";
// $password = "pwdsharvani";
// $dbname = "dbSharvani";

// $conn = new mysqli($servername, $username, $password, $dbname);

// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }
// echo "Connection Successful.";

// if(isset($_GET['searchButton']))
// {
// 	// echo "Hi";
// 	$sql = "SELECT * FROM bankCustomerDetails WHERE accountNumber = '" . $_GET["searchAccountNumber"] . "'";
// 	// echo $sql;
// 	$result = $conn->query($sql);
// 	if ($result->num_rows > 0) 
// 	{
// 		echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
// 	  while($row = $result->fetch_assoc()) 
// 	  {
// 	  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"]. " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td></tr>";
// 	  }
// 	} 
// 	else
// 	{
// 	  echo "0 results";
// 	}
// }

// if(isset($_GET['displayButton']))
// {
// 	$sql = "SELECT * FROM bankCustomerDetails";
// 	$result = $conn->query($sql);
// 	if ($result->num_rows > 0) 
// 	{
// 		echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
// 	  while($row = $result->fetch_assoc()) 
// 	  {
// 	  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"]. " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td></tr>";
// 	  }
// 	} 
// 	else
// 	{
// 	  echo "0 results";
// 	}	
// }

// if(isset($_GET['insertButton']))
// {
// 	$sql = "INSERT INTO bankCustomerDetails VALUES ( '" . $_GET['insertAccountNumber'] . "', '" . $_GET['insertName'] . "', " . $_GET['insertBalance'] . ", 1)";
// 	$result = $conn->query($sql);
// }

// if(isset($_GET['deleteButton']))
// {
// 	$sql = "DELETE FROM bankCustomerDetails WHERE accountNumber = " . $_GET['deleteAccountNumber'];
// 	$result = $conn->query($sql);
// }

// if(isset($_GET['updateButton']))
// {
// 	$sql = "UPDATE bankCustomerDetails SET name = '" . $_GET['updateName'] . "', balance = " . $_GET['updateBalance'] . " WHERE accountNumber = " . $_GET['updateAccountNumber'];
// 	$result = $conn->query($sql);
// }


// $conn->close();
?>

