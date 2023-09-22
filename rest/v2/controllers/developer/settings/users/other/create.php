<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsOther = new SettingsOther($conn);
// get should not be present
if (array_key_exists("otherId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$settingsOther->settings_other_name = checkIndex($data, "settings_other_name");
$settingsOther->settings_other_email = checkIndex($data, "settings_other_email");
$settingsOther->settings_other_roles_id = checkIndex($data, "settings_other_roles_id");
$settingsOther->settings_other_is_active = 1;
$settingsOther->settings_other_created_at = date("Y-m-d H:i:s");
$settingsOther->settings_other_updated_at = date("Y-m-d H:i:s");
// // check name
isNameExist($settingsOther, $settingsOther->settings_other_name);
isEmailExist($settingsOther, $settingsOther->settings_other_email);
// create
$query = checkCreate($settingsOther);
returnSuccess($settingsOther, "Settings Other", $query);
