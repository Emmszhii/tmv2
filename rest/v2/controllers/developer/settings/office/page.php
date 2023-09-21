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
// validate api key 
if (array_key_exists("start", $_GET)) {

    $settingsOffice->settings_office_start = $_GET['start'];
    $settingsOffice->settings_office_total = 3;

    //check to see if task id in query string is not empty and is number, if not return json error
    checkLimitId($settingsOffice->settings_office_start, $settingsOffice->settings_office_total);

    $query = checkReadLimit($settingsOffice);
    $total_result = checkReadAll($settingsOffice);
    http_response_code(200);
    checkReadQuery(
        $query,
        $total_result,
        $settingsOffice->settings_office_total,
        $settingsOffice->settings_office_start
    );
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
