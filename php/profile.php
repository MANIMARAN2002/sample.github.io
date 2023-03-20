<?php
require './vendor/autoload.php';
$client = new MongoDB\Client();
$db = $client->companydb;
$emp=$db->empCollection;
$data = $_POST;
$data["_id"]=$_POST["id"];
$result=$emp->insertOne($data);
$parse=json_encode($_POST);
json_encode(['token'=>$parse]);
// echo json_encode("change success");
?>