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
$settingsActivity = new SettingsActivity($conn);
// validate api key 
if (array_key_exists("start", $_GET)) {

    $settingsActivity->settings_activity_start = $_GET['start'];
    $settingsActivity->settings_activity_total = 3;

    //check to see if task id in query string is not empty and is number, if not return json error
    checkLimitId($settingsActivity->settings_activity_start, $settingsActivity->settings_activity_total);

    $query = checkReadLimit($settingsActivity);
    $total_result = checkReadAll($settingsActivity);
    http_response_code(200);
    checkReadQuery(
        $query,
        $total_result,
        $settingsActivity->settings_activity_total,
        $settingsActivity->settings_activity_start
    );
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
