<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsOffice = new SettingsOffice($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("officeId", $_GET)) {
    // get data
    $settingsOffice->settings_office_aid = $_GET['officeId'];
    checkId($settingsOffice->settings_office_aid);

    $query = checkDelete($settingsOffice);
    returnSuccess($settingsOffice, "Settings Office", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
