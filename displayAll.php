<?php
include "connectionSQLPHP.php";
echo "Connection Successful.";
$sql = "SELECT * FROM bankCustomerDetails";
$result = $conn->query($sql);
if ($result->num_rows > 0) 
{
	echo "<tr><th>AccountNumber</th><th>Name</th><th>Balance</th><th>DeleteStatus</th></tr>";
  while($row = $result->fetch_assoc()) 
  {
	$deleteCommand = "$('#loadHere1').load('delete.php?accountNumber=". $row["accountNumber"] . "');$('#loadHere').load('displayAll.php')";
	$updateCommand = "$('#accountNumber').val(".$row['accountNumber'].");$('#name').val('".$row['name']."');$('#balance').val(".$row['balance'].");$('#loadHere1').load('save.php?accountNumber=". $row["accountNumber"]."&name=". $row["name"] . "&balance=" . $row["balance"]."');$('#loadHere').load('displayAll.php')";
  	echo "<tr><td>" . $row["accountNumber"]. " </td><td> " . $row["name"]. " </td><td> " . $row["balance"]. " </td><td> " . $row["deleteStatus"] . "</td><td><button onclick=".$deleteCommand."><span class='glyphicon glyphicon-search'>DELETE</span></button></td><td><button onclick=". $updateCommand ."><span class='glyphicon glyphicon-pencil'>UPDATE</span></button></td></tr>";
  }
} 
else
{
  echo "0 results";

}	
?>
  if (confirm("Press a button!\nEither OK or Cancel.") == true) 
  {
    text = "You pressed OK!";
  }

  if (confirm('Are You Sure You Want To Delete This Account?') == true) {
<!-- $('#loadHere1').load('delete.php?accountNumber=". $row["accountNumber"] . "') -->
<!-- $("#accountNumber").val($("#accountNumber").val());
$("#name").val($("#name").val());
$("#balance").val($("#txtResult").val()); -->