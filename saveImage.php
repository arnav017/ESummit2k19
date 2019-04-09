<?php
$id = $_POST["id"];
$image = $_POST["image"];

$decode = base64_decode("$image");
$file_put_contents("uploads/".$id.".JPG", $decode);
?>