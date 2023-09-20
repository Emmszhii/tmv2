<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsSystem = new SettingsSystem($conn);
// get should not be present
if (array_key_exists("departmentId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$settingsSystem->settings_system_name = checkIndex($data, "settings_system_name");
$settingsSystem->settings_system_email = checkIndex($data, "settings_system_email");
$settingsSystem->settings_system_role = checkIndex($data, "settings_system_role");
$settingsSystem->settings_system_is_active = 1;
$settingsSystem->settings_system_created_at = date("Y-m-d H:i:s");
$settingsSystem->settings_system_updated_at = date("Y-m-d H:i:s");
// // check name
// isNameExist($settingsSystem, $settingsSystem->department_name);
// create
$query = checkCreate($settingsSystem);
returnSuccess($settingsSystem, "Settings System", $query);
