<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include("conn.php");


if(isset($_POST)){

    $data = file_get_contents("php://input");

    $user = json_decode($data , true);

    $fname = ($user['fname']);
    $lname = ($user['lname']);
    $email = ($user['email']);
    $password = ($user['password']);
    $address = ($user['address']);

    var_dump($user);


}else{
    echo 'falid ...';
}

if($name == null){

    return die ;
}

$sql = "INSERT INTO users (fname , lname , email , password ,address)
 VALUES ('$fname' , '$lname' , '$email', '$address') ";


$conn->exec($sql);



?>