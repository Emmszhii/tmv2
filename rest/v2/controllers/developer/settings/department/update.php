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
    // check data
    checkPayload($data);
    // get data
    $settingsDepartment->settings_department_aid = $_GET['departmentId'];
    $settingsDepartment->settings_department_name = strtoupper(checkIndex($data, "settings_department_name"));
    $settingsDepartment->settings_department_updated_at = date("Y-m-d H:i:s");
    checkId($settingsDepartment->settings_department_aid);
    // check name
    isNameExist($settingsDepartment, $settingsDepartment->settings_department_name);
    // update
    $query = checkUpdate($settingsDepartment);
    returnSuccess($settingsDepartment, "Settings Department", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
