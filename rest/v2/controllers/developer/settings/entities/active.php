<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/entities/Entities.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$entities = new Entities($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("entitiesId", $_GET)) {
    // check data
    checkPayload($data);
    $entities->entities_aid = $_GET['entitiesId'];
    $entities->entities_is_active = trim($data["isActive"]);
    // $entities->department_datetime = date("Y-m-d H:i:s");
    checkId($entities->entities_aid);
    $query = checkActive($entities);
    http_response_code(200);
    returnSuccess($entities, "Entities", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
