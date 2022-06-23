<?php
include "connectionSQLPHP.php";
echo "Connection Successful.";
$sql1 = "DELETE FROM bankCustomerDetails WHERE accountNumber = " . $_GET['accountNumber'];
$result1 = $conn->query($sql1);
?>
