<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsRates = new SettingsRates($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("ratesId", $_GET)) {
    // get data
    $settingsRates->settings_rates_aid = $_GET['ratesId'];
    checkId($settingsRates->settings_rates_aid);

    $query = checkDelete($settingsRates);
    returnSuccess($settingsRates, "Settings Activity", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
