
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
$sql = "SELECT * FROM Item WHERE Description LIKE '%" . $_GET["ItemId"] . "%'";
$result = $conn->query($sql);
// echo "ItemId - Description - UnitPrice - SupplierId - StockQty - ReorderLevel - OrderQty <br>";
if ($result->num_rows > 0) {
	echo "<tr><th>ItemId</th><th>Description</th><th>unitPrice</th><th>SupplierId</th><th>StockQty</th></tr>";
  while($row = $result->fetch_assoc()) {
    echo "<tr><td>" . $row["ItemId"]. " </td><td> " . $row["Description"]. " </td><td> " . $row["UnitPrice"]. " </td><td> " . $row["SupplierId"] . " </td><td> " . $row["StockQty"] . "</td></tr>";
  }
} else {
  echo "0 results";
}

$conn->close();
?>

