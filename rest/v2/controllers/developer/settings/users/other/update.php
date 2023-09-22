<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsOther = new SettingsOther($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("otherId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $settingsOther->settings_other_aid = $_GET['otherId'];
    $settingsOther->settings_other_name = checkIndex($data, "settings_other_name");
    $settingsOther->settings_other_email = checkIndex($data, "settings_other_email");
    $settingsOther->settings_other_roles_id = checkIndex($data, "settings_other_roles_id");
    $settingsOther->settings_other_updated_at = date("Y-m-d H:i:s");
    checkId($settingsOther->settings_other_aid);

    $settings_other_name_old = checkIndex($data, "settings_other_name_old");
    $settings_other_email_old = checkIndex($data, "settings_other_email_old");

    if ($settings_other_name_old !== $settingsOther->settings_other_name) {
        // check name
        isNameExist($settingsOther, $settingsOther->settings_other_name);
    }
    if ($settings_other_email_old !==  $settingsOther->settings_other_email) {
        // check email
        isEmailExist($settingsOther, $settingsOther->settings_other_email);
    }
    // update
    $query = checkUpdate($settingsOther);
    returnSuccess($settingsOther, "SettingsOther", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
