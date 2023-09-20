<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsSystem = new SettingsSystem($conn);
// get $_GET data 

if (array_key_exists("systemId", $_GET)) {
    $settingsSystem->settings_system_aid  = $_GET['systemId'];
    checkId($settingsSystem->settings_system_aid);
    $query = checkReadById($settingsSystem);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($settingsSystem);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
