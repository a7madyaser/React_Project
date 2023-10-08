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

    $products = json_decode($data , true);

    $name = ($products['name']);
    $price = ($products['price']);
    $photo = ($products['photo']);
    $details = ($products['details']);

    var_dump($product);


}else{
    echo 'falid ...';
}

if($name == null){

    return die ;
}



$sql = "UPDATE products SET name ='$name', price ='$price', photo ='$photo' , details='$details' WHERE id = '$id' ";

$conn->exec($sql);




?>