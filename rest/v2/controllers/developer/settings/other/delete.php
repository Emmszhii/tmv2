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
    // get data
    $settingsOther->settings_other_aid  = $_GET['otherId'];
    checkId($settingsOther->settings_other_aid);

    $query = checkDelete($settingsOther);
    returnSuccess($settingsOther, "Settings Other", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
