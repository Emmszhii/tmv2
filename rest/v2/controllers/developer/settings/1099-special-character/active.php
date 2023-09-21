<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/1099-special-character/1099SpecialCharacter.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$specialCharacter = new SpecialCharacter($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("specialCharacterId", $_GET)) {
    // check data
    checkPayload($data);
    $specialCharacter->special_character_aid = $_GET['specialCharacterId'];
    $specialCharacter->special_character_is_active = trim($data["isActive"]);
    // $specialCharacter->department_datetime = date("Y-m-d H:i:s");
    checkId($specialCharacter->special_character_aid);
    $query = checkActive($specialCharacter);
    http_response_code(200);
    returnSuccess($specialCharacter, "SpecialCharacter", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
