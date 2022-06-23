<?php
@session_start();
$_SESSION["count"] += 5;
if ($_SESSION["count"] >= 50)
{
	session_destroy();
	// $_SESSION["count"] = 0;
}
// echo $_SESSION["count"];
// session_unset();
print_r($_SESSION["count"]);
?>