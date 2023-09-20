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
    $settingsOther->settings_other_role = checkIndex($data, "settings_other_role");
    $settingsOther->settings_other_updated_at = date("Y-m-d H:i:s");
    checkId($settingsOther->settings_other_aid);
    // update
    $query = checkUpdate($settingsOther);
    returnSuccess($settingsOther, "Settings Other", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
