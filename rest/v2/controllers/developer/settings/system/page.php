<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/system/SettingsSystem.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsSystem = new SettingsSystem($conn);
// validate api key 
if (array_key_exists("start", $_GET)) {

    $settingsSystem->settings_system_start = $_GET['start'];
    $settingsSystem->settings_system_total = 3;

    //check to see if task id in query string is not empty and is number, if not return json error
    checkLimitId($settingsSystem->settings_system_start, $settingsSystem->settings_system_total);

    $query = checkReadLimit($settingsSystem);
    $total_result = checkReadAll($settingsSystem);
    http_response_code(200);
    checkReadQuery(
        $query,
        $total_result,
        $settingsSystem->settings_system_total,
        $settingsSystem->settings_system_start
    );
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
