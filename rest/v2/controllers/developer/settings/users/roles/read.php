<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsRoles = new SettingsRoles($conn);
// get $_GET data 

if (array_key_exists("rolesId", $_GET)) {
    $settingsRoles->settings_roles_aid = $_GET['rolesId'];
    checkId($settingsRoles->settings_roles_aid);
    $query = checkReadById($settingsRoles);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($settingsRoles);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
