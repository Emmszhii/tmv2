<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/office/SettingsOffice.php';

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsOffice = new SettingsOffice($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("officeId", $_GET)) {
    // check data
    checkPayload($data);
    $settingsOffice->settings_office_aid = $_GET['officeId'];
    $settingsOffice->settings_office_is_active = trim($data["isActive"]);
    $settingsOffice->settings_office_updated_at = date("Y-m-d H:i:s");
    checkId($settingsOffice->settings_office_aid);
    $query = checkActive($settingsOffice);
    http_response_code(200);
    returnSuccess($settingsOffice, "Settings Office", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
