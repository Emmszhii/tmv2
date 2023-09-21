<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsActivity = new SettingsActivity($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("activityId", $_GET)) {
    // get data
    $settingsActivity->settings_activity_aid = $_GET['activityId'];
    checkId($settingsActivity->settings_activity_aid);

    $query = checkDelete($settingsActivity);
    returnSuccess($settingsActivity, "Settings Activity", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
