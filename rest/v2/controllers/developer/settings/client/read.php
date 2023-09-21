<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsActivity = new SettingsActivity($conn);
// get $_GET data 

if (array_key_exists("activityId", $_GET)) {
    $settingsActivity->settings_activity_aid = $_GET['activityId'];
    checkId($settingsActivity->settings_activity_aid);
    $query = checkReadById($settingsActivity);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($settingsActivity);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
