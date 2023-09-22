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
    // check data
    checkPayload($data);
    // get data
    $specialCharacter->special_character_aid = $_GET['specialCharacterId'];
    $specialCharacter->special_character_name = checkIndex($data, "special_character_name");
    $specialCharacter->special_character_updated_at = date("Y-m-d H:i:s");
    checkId($specialCharacter->special_character_aid);

    $special_character_name_old = checkIndex($data, "special_character_name_old");
    if($special_character_name_old !==  $specialCharacter->special_character_name) {
        // check ID
        isNameExist($specialCharacter, $specialCharacter->special_character_name);
  }
    // update
    $query = checkUpdate($specialCharacter);
    returnSuccess($specialCharacter, "SpecialCharacter", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
