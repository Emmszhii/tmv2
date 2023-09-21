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
    // check data
    checkPayload($data);
    // get data
    $settingsActivity->settings_activity_aid = $_GET['activityId'];
    $settingsActivity->settings_activity_description = checkIndex($data, "settings_activity_description");
    $settingsActivity->settings_activity_invoice_description = checkIndex($data, "settings_activity_invoice_description");
    $settingsActivity->settings_activity_updated_at = date("Y-m-d H:i:s");
    checkId($settingsActivity->settings_activity_aid);
    // update
    $query = checkUpdate($settingsActivity);
    returnSuccess($settingsActivity, "Settings Activity", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
