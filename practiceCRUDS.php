
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
$sql = "SELECT * FROM bankCustomerDetails WHERE accountNumber LIKE '%" . $_GET["accountNumber"] . "%'";
$result = $conn->query($sql);
if ($result->num_rows > 0) 
{
	echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
  while($row = $result->fetch_assoc()) 
  {
  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"]. " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td></tr>";
  }
} 
else
{
  echo "0 results";
}
$conn->close();
?>