<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$specialCharacter = new SpecialCharacter($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("specialCharacterId", $_GET)) {
    // get data
    $specialCharacter->special_character_aid = $_GET['specialCharacterId'];
    checkId($specialCharacter->special_character_aid);

    $query = checkDelete($specialCharacter);
    returnSuccess($specialCharacter, "SpecialCharacter", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
