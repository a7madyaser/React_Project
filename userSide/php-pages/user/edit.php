<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include("conn.php");



if (isset($_GET['id'])) {
   
    $id = $_GET['id'];

  echo $id;


}


if(isset($_POST)){

    $data = file_get_contents("php://input");

    $user = json_decode($data , true);

    $fname = ($user['fname']);
    $lname = ($user['lname']);
    $email = ($user['email']);
    $password = ($user['password']);
    $address = ($user['address']);

    var_dump($product);


}else{
    echo 'falid ...';
}

if($name == null){

    return die ;
}



$sql = "UPDATE users SET fname ='$fname', lname ='$lname', email ='$email' , password='$password',address='$address'  WHERE id = '$id' ";

$conn->exec($sql);




?>