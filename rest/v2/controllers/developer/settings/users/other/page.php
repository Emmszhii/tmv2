<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/settings/users/other/SettingsOther.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsOther = new SettingsOther($conn);
// validate api key 
if (array_key_exists("start", $_GET)) {

    $settingsOther->settings_other_start = $_GET['start'];
    $settingsOther->settings_other_total = 5;

    //check to see if task id in query string is not empty and is number, if not return json error
    checkLimitId($settingsOther->settings_other_start, $settingsOther->settings_other_total);

    $query = checkReadLimit($settingsOther);
    $total_result = checkReadAll($settingsOther);
    http_response_code(200);
    checkReadQuery(
        $query,
        $total_result,
        $settingsOther->settings_other_total,
        $settingsOther->settings_other_start
    );
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
