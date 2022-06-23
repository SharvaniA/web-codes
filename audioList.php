<?php
// (A) OPEN FOLDER + READ ENTRIES
// $target = __DIR__;
// if ($fh = opendir($target)) {
//   while (($entry = readdir($fh)) !== false) {
//     // (B) IGNORE "." AND ".."
//     if ($entry!="." && $entry!="..") {
//       // (C) FILE OR FOLDER?
//       // $thisE = $target . DIRECTORY_SEPARATOR . $entry;
//       $thisE = $entry;
//       echo is_dir($thisE) ? "Directory" : "File";
//       echo " - $thisE<br>";
//     }
//   }
//   closedir($fh);
// }
?>
<?php
// (A) GET ALL PHP + TEXT FILES
// $scripts = glob(__DIR__ . DIRECTORY_SEPARATOR . "*.{mp3,MP3}", GLOB_BRACE);
$scripts = glob("*.{mp3,MP3}", GLOB_BRACE);

foreach ($scripts as $s) 
{
	echo "<ul id='playList'><li><a href='$s'>$s</a></li></ul>";

}

// // (B) GET FOLDERS ONLY
// $folders = glob(__DIR__ . DIRECTORY_SEPARATOR . "*" , GLOB_ONLYDIR);
// print_r($folders);
?>
<?php
// (A) GET ALL FILES + FOLDERS
// $contents = scandir(__DIR__);

// PASS IN A SECOND PARAMETER TO SORT
// $contents = scandir($target, SCANDIR_SORT_DESCENDING);
// $contents = scandir($target, SCANDIR_SORT_NONE);

// (B) LOOP THROUGH ALL FILES + FOLDERS
// foreach ($contents as $c) 
// {
  // if ($c!="."&&$c!="..") 
  // {
    // echo is_dir($c) ? "DIR" : "" ;
    // echo "$c<br>";
    
  // }
// }
// if (fileName.substr(-5, 5) !== '.xlsx') {
            // fileName += '.xlsx';
        // }
// if ($c.substr(string, start)) {
	# code...
// }
?>