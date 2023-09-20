<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsRoles = new SettingsRoles($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("rolesId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $settingsRoles->settings_roles_aid = $_GET['rolesId'];
    $settingsRoles->settings_roles_name = checkIndex($data, "settings_roles_name");
    $settingsRoles->settings_roles_description = checkIndex($data, "settings_roles_description");
    $settingsRoles->settings_roles_updated_at = date("Y-m-d H:i:s");
    checkId($settingsRoles->settings_roles_aid);
    // update
    $query = checkUpdate($settingsRoles);
    returnSuccess($settingsRoles, "Settings Roles", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
