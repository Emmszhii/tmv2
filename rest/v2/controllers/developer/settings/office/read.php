<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsOffice = new SettingsOffice($conn);
// get $_GET data 

if (array_key_exists("officeId", $_GET)) {
    $settingsOffice->settings_office_aid = $_GET['officeId'];
    checkId($settingsOffice->settings_office_aid);
    $query = checkReadById($settingsOffice);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($settingsOffice);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
