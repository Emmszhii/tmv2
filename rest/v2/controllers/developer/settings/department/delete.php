<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsDepartment = new SettingsDepartment($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("departmentId", $_GET)) {
    // get data
    $settingsDepartment->settings_department_aid = $_GET['departmentId'];
    checkId($settingsDepartment->settings_department_aid);

    $query = checkDelete($settingsDepartment);
    returnSuccess($settingsDepartment, "Settings Department", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
