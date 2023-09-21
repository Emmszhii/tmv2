<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/client-class/ClientClass.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clientClass = new ClientClass($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("clientClassId", $_GET)) {
    // check data
    checkPayload($data);
    $clientClass->client_class_aid = $_GET['clientClassId'];
    $clientClass->client_class_is_active = trim($data["isActive"]);
    // $clientClass->department_datetime = date("Y-m-d H:i:s");
    checkId($clientClass->client_class_aid);
    $query = checkActive($clientClass);
    http_response_code(200);
    returnSuccess($clientClass, "ClientClass", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
