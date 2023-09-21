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
    // check data
    checkPayload($data);
    // get data
    $settingsRates->settings_rates_aid = $_GET['ratesId'];
    $settingsRates->settings_rates_description = checkIndex($data, "settings_rates_description");
    $settingsRates->settings_rates_updated_at = date("Y-m-d H:i:s");
    checkId($settingsRates->settings_rates_aid);
    // update
    $query = checkUpdate($settingsRates);
    returnSuccess($settingsRates, "Settings Rates", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
