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
// validate api key 
if (array_key_exists("start", $_GET)) {

    $settingsRates->settings_rates_start = $_GET['start'];
    $settingsRates->settings_rates_total = 3;

    //check to see if task id in query string is not empty and is number, if not return json error
    checkLimitId($settingsRates->settings_rates_start, $settingsRates->settings_rates_total);

    $query = checkReadLimit($settingsRates);
    $total_result = checkReadAll($settingsRates);
    http_response_code(200);
    checkReadQuery(
        $query,
        $total_result,
        $settingsRates->settings_rates_total,
        $settingsRates->settings_rates_start
    );
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
