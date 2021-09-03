<?php
$dir = "./comp_photos";

header('Content-type: image/jpeg');
header('Content-Disposition: attachment; filename="foto.jpg"'); 
header('Cache-Control: no-store, no-cache, must-revalidate');

$files = scandir($dir);
$images = array();

foreach($files as $file)
    {
    if (preg_match("#.*\.jpg$#i",$file))
        {
        array_push($images,$file);
        }
    }

if (isset($_GET['n']) && $_GET['n'] <= count($images))
    $index = $_GET['n'];
else if (function_exists('random_int'))
    $index = random_int(1,count($images)) -1;
else
    $index = mt_rand(1,count($images)) -1;

$img = $images[$index];

readfile(sprintf("%s/%s",$dir,$img));
