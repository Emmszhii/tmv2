<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsRoles = new SettingsRoles($conn);
// get should not be present
if (array_key_exists("otherId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$settingsRoles->settings_roles_name = checkIndex($data, "settings_roles_name");
$settingsRoles->settings_roles_description = checkIndex($data, "settings_roles_description");
$settingsRoles->settings_roles_is_active = 1;
$settingsRoles->settings_roles_created_at = date("Y-m-d H:i:s");
$settingsRoles->settings_roles_updated_at = date("Y-m-d H:i:s");
// // check name
// isNameExist($settingsRoles, $settingsRoles->department_name);
// create
$query = checkCreate($settingsRoles);
returnSuccess($settingsRoles, "Settings Roles", $query);
