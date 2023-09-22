<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$specialCharacter = new SpecialCharacter($conn);
// get should not be present
if (array_key_exists("specialCharacterId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$specialCharacter->special_character_name = checkIndex($data, "special_character_name");

$specialCharacter->special_character_is_active = 1;
$specialCharacter->special_character_created_at = date("Y-m-d H:i:s");
$specialCharacter->special_character_updated_at = date("Y-m-d H:i:s");
// // check name
isNameExist($specialCharacter, $specialCharacter->special_character_name);
// create
$query = checkCreate($specialCharacter);
returnSuccess($specialCharacter, "SpecialCharacter", $query);
