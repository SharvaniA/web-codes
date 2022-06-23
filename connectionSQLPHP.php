<?php
$servername = "165.22.14.77";
$username = "sharvani";
$password = "pwdsharvani";
$dbname = "dbSharvani";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>