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
    // get data
    $settingsRoles->settings_roles_aid = $_GET['rolesId'];
    checkId($settingsRoles->settings_roles_aid);

    $query = checkDelete($settingsRoles);
    returnSuccess($settingsRoles, "Settings Roles", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
