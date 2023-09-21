<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsRates = new SettingsRates($conn);
// get $_GET data 

if (array_key_exists("ratesId", $_GET)) {
    $settingsRates->settings_rates_aid = $_GET['ratesId'];
    checkId($settingsRates->settings_rates_aid);
    $query = checkReadById($settingsRates);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($settingsRates);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
