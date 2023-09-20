<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/other/SettingsOther.php';

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$systemOther = new SettingsOther($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("otherId", $_GET)) {
    // check data
    checkPayload($data);
    $systemOther->settings_other_aid = $_GET['otherId'];
    $systemOther->settings_other_is_active = trim($data["isActive"]);
    $systemOther->settings_other_updated_at = date("Y-m-d H:i:s");
    checkId($systemOther->settings_other_aid);
    $query = checkActive($systemOther);
    http_response_code(200);
    returnSuccess($systemOther, "Settings Other", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
