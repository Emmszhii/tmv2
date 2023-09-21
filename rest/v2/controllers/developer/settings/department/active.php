<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/department/SettingsDepartment.php';

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsDepartment = new SettingsDepartment($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("departmentId", $_GET)) {
    // check data
    checkPayload($data);
    $settingsDepartment->settings_department_aid = $_GET['departmentId'];
    $settingsDepartment->settings_department_is_active = trim($data["isActive"]);
    $settingsDepartment->settings_department_updated_at = date("Y-m-d H:i:s");
    checkId($settingsDepartment->settings_department_aid);
    $query = checkActive($settingsDepartment);
    http_response_code(200);
    returnSuccess($settingsDepartment, "Settings Department", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
