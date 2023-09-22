<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsOffice = new SettingsOffice($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("officeId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $settingsOffice->settings_office_aid = $_GET['officeId'];
    $settingsOffice->settings_office_name = strtoupper(checkIndex($data, "settings_office_name"));
    $settingsOffice->settings_office_description = checkIndex($data, "settings_office_description");
    $settingsOffice->settings_office_updated_at = date("Y-m-d H:i:s");
    checkId($settingsOffice->settings_office_aid);
    // check name
    isNameExist($settingsOffice, $settingsOffice->settings_office_name);
    // update
    $query = checkUpdate($settingsOffice);
    returnSuccess($settingsOffice, "Settings Office", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
