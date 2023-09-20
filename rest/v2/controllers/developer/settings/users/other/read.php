<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsOther = new SettingsOther($conn);
// get $_GET data 

if (array_key_exists("otherId", $_GET)) {
    $settingsOther->settings_other_aid = $_GET['otherId'];
    checkId($settingsOther->settings_other_aid);
    $query = checkReadById($settingsOther);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($settingsOther);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
