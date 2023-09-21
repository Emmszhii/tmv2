<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsRates = new SettingsRates($conn);
// get should not be present
if (array_key_exists("ratesId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$settingsRates->settings_rates_description = checkIndex($data, "settings_rates_description");
$settingsRates->settings_rates_is_active = 1;
$settingsRates->settings_rates_created_at = date("Y-m-d H:i:s");
$settingsRates->settings_rates_updated_at = date("Y-m-d H:i:s");
// // check name
// isNameExist($settingsRates, $settingsRates->department_name);
// create
$query = checkCreate($settingsRates);
returnSuccess($settingsRates, "Settings Rates", $query);
