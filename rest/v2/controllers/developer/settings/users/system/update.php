<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsSystem = new SettingsSystem($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("systemId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $settingsSystem->settings_system_aid = $_GET['systemId'];
    $settingsSystem->settings_system_name = checkIndex($data, "settings_system_name");
    $settingsSystem->settings_system_email = checkIndex($data, "settings_system_email");
    $settingsSystem->settings_system_roles_id = checkIndex($data, "settings_system_roles_id");
    $settingsSystem->settings_system_updated_at = date("Y-m-d H:i:s");
    checkId($settingsSystem->settings_system_aid);

    $settings_system_name_old = checkIndex($data, "settings_system_name_old");
    $settings_system_email_old = checkIndex($data, "settings_system_email_old");
    if ($settings_system_name_old !== $settingsSystem->settings_system_name) {
        // check name
        isNameExist($settingsSystem, $settingsSystem->settings_system_name);
    }
    if ($settings_system_email_old !== $settingsSystem->settings_system_email) {
        // check email
        isEmailExist($settingsSystem, $settingsSystem->settings_system_email);
    }
    // update
    $query = checkUpdate($settingsSystem);
    returnSuccess($settingsSystem, "SettingsSystem", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
