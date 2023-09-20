<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/settings/users/system/SettingsSystem.php';

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$systemSettings = new SettingsSystem($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("systemId", $_GET)) {
    // check data
    checkPayload($data);
    $systemSettings->settings_system_aid = $_GET['systemId'];
    $systemSettings->settings_system_is_active = trim($data["isActive"]);
    $systemSettings->settings_system_updated_at = date("Y-m-d H:i:s");
    checkId($systemSettings->settings_system_aid);
    $query = checkActive($systemSettings);
    http_response_code(200);
    returnSuccess($systemSettings, "Settings System", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
