<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsOffice = new SettingsOffice($conn);
// get should not be present
if (array_key_exists("officeId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$settingsOffice->settings_office_name = strtoupper(checkIndex($data, "settings_office_name"));
$settingsOffice->settings_office_description = checkIndex($data, "settings_office_description");
$settingsOffice->settings_office_is_active = 1;
$settingsOffice->settings_office_created_at = date("Y-m-d H:i:s");
$settingsOffice->settings_office_updated_at = date("Y-m-d H:i:s");
// // check name
isNameExist($settingsOffice, $settingsOffice->settings_office_name);
// create
$query = checkCreate($settingsOffice);
returnSuccess($settingsOffice, "Settings Activity", $query);
