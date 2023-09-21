<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/rates/SettingsRates.php';

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsRates = new SettingsRates($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("ratesId", $_GET)) {
    // check data
    checkPayload($data);
    $settingsRates->settings_rates_aid = $_GET['ratesId'];
    $settingsRates->settings_rates_is_active = trim($data["isActive"]);
    $settingsRates->settings_rates_updated_at = date("Y-m-d H:i:s");
    checkId($settingsRates->settings_rates_aid);
    $query = checkActive($settingsRates);
    http_response_code(200);
    returnSuccess($settingsRates, "Settings Rates", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
