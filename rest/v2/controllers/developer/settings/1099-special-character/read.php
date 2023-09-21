<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$specialCharacter = new SpecialCharacter($conn);
// get $_GET data 

if (array_key_exists("specialCharacterId", $_GET) ) {
    $specialCharacter->special_character_aid = $_GET['specialCharacterId'];
    checkId($specialCharacter->special_character_aid);
    $query = checkReadById($specialCharacter);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($specialCharacter);
    http_response_code(200);
    getQueriedData($query);
     
}

// return 404 error if endpoint not available
checkEndpoint();
