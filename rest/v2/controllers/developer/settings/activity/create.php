<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsActivity = new SettingsActivity($conn);
// get should not be present
if (array_key_exists("activityId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$settingsActivity->settings_activity_description = checkIndex($data, "settings_activity_description");
$settingsActivity->settings_activity_invoice_description = checkIndex($data, "settings_activity_invoice_description");
$settingsActivity->settings_activity_is_active = 1;
$settingsActivity->settings_activity_created_at = date("Y-m-d H:i:s");
$settingsActivity->settings_activity_updated_at = date("Y-m-d H:i:s");
// // check name
// isNameExist($settingsActivity, $settingsActivity->department_name);
// create
$query = checkCreate($settingsActivity);
returnSuccess($settingsActivity, "Settings Activity", $query);
