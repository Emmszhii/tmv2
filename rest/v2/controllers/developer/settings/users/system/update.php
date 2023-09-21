<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsSystem = new SettingsSystem($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("systemId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $settingsSystem->settings_system_aid = $_GET['systemId'];
    $settingsSystem->settings_system_name = strtoupper(checkIndex($data, "settings_system_name"));
    $settingsSystem->settings_system_email = checkIndex($data, "settings_system_email");
    $settingsSystem->settings_system_role = checkIndex($data, "settings_system_role");
    $settingsSystem->settings_system_updated_at = date("Y-m-d H:i:s");
    checkId($settingsSystem->settings_system_aid);
    // update
    $query = checkUpdate($settingsSystem);
    returnSuccess($settingsSystem, "Settings System", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
