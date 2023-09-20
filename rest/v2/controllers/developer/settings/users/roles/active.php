<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/settings/users/roles/SettingsRoles.php';

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsRoles = new SettingsRoles($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("rolesId", $_GET)) {
    // check data
    checkPayload($data);
    $settingsRoles->settings_roles_aid = $_GET['rolesId'];
    $settingsRoles->settings_roles_is_active = trim($data["isActive"]);
    $settingsRoles->settings_roles_updated_at = date("Y-m-d H:i:s");
    checkId($settingsRoles->settings_roles_aid);
    $query = checkActive($settingsRoles);
    http_response_code(200);
    returnSuccess($settingsRoles, "Settings Roles", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
