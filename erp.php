<?php
if($_GET['rollnumber']!=""){
  $rollnumber = $_GET['rollnumber'];
}else{
  $rollnumber='-1';
}
//$rollnumber = $_GET['rollnumber'];
$url = 'https://erp.hbtu.ac.in/api/2.2/EP1?rollno='.$rollnumber;
$curl_h = curl_init($url);

curl_setopt($curl_h, CURLOPT_HTTPHEADER,
    array(
        'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImVjZWxsIiwianRpIjoiYWY3YTQxYjMtODVhMy00OGJmLWJiZmUtMmUxOWMwZDBlODk2IiwiZW1haWwiOiJlY2VsbEBoYnR1LmFjLmluIiwiZ2l2ZW5fbmFtZSI6ImVjZWxsIiwicGljdHVyZSI6IiIsInJvbGVzIjoiRGV2ZWxvcGVyIiwibmJmIjoxNTU0NjY3NzE4LCJleHAiOjE1NTUyNzI1MTgsImlzcyI6Imh0dHA6Ly9IQlRVLlNlY3VyaXR5IiwiYXVkIjoiaHR0cDovL0hCVFUuU2VjdXJpdHkifQ.M6kDbCMOrkspxHUVOGRBg5k5_XzsQBZeokN0RLyFPNg',
    )
);

# do not output, but store to variable
//curl_setopt($curl_h, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl_h);
$trimmedResponse = trim($response, '[]');
$responseArray = json_decode($trimmedResponse,true);//here the json string is decoded and returned as associative array

// $array = get_object_vars($b);
// $properties = array_keys($array);

$firstName =  $responseArray["firstName"];
$lastName =  $responseArray["lastName"];
$email =  $responseArray["email"];
$phone =  $responseArray["phone"];
?>
