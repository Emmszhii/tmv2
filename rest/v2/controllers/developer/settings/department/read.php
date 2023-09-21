<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsDepartment = new SettingsDepartment($conn);
// get $_GET data 

if (array_key_exists("departmentId", $_GET)) {
    $settingsDepartment->settings_department_aid = $_GET['departmentId'];
    checkId($settingsDepartment->settings_department_aid);
    $query = checkReadById($settingsDepartment);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($settingsDepartment);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
