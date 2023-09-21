<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/activity/SettingsActivity.php';

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsActivty = new SettingsActivity($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("activityId", $_GET)) {
    // check data
    checkPayload($data);
    $settingsActivty->settings_activity_aid = $_GET['activityId'];
    $settingsActivty->settings_activity_is_active = trim($data["isActive"]);
    $settingsActivty->settings_activity_updated_at = date("Y-m-d H:i:s");
    checkId($settingsActivty->settings_activity_aid);
    $query = checkActive($settingsActivty);
    http_response_code(200);
    returnSuccess($settingsActivty, "Settings Activity", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
