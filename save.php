<?php
include "connectionSQLPHP.php";
echo "Connection Successful.";
$sql = "REPLACE INTO bankCustomerDetails VALUES ('" . $_GET['accountNumber'] . "', '" . $_GET['name'] . "', " . $_GET['balance'] . ", 1)";
// echo $sql;
$result = $conn->query($sql);
?>