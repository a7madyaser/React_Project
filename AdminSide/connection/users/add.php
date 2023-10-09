<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once("../conn.php");


if(isset($_POST)){

    $data = file_get_contents("php://input");

    $user = json_decode($data , true);

    $fname = ($user['fname']);
    $lname = ($user['lname']);
    $email = ($user['email']);
    $password = ($user['password']);




}else{
    echo 'falid ...';
}

if($fname == null){

    return die ;
}

$sql = "INSERT INTO users (fname , lname , email , password )
 VALUES ('$fname' , '$lname' , '$email' , '$password') ";


$conn->exec($sql);

?>
