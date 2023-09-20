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
    // get data
    $settingsSystem->settings_system_aid = $_GET['systemId'];
    checkId($settingsSystem->settings_system_aid);

    $query = checkDelete($settingsSystem);
    returnSuccess($settingsSystem, "Settings System", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
