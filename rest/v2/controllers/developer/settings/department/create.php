<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$settingsDepartment = new SettingsDepartment($conn);
// get should not be present
if (array_key_exists("departmentId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$settingsDepartment->settings_department_name = checkIndex($data, "settings_department_name");
$settingsDepartment->settings_department_is_active = 1;
$settingsDepartment->settings_department_created_at = date("Y-m-d H:i:s");
$settingsDepartment->settings_department_updated_at = date("Y-m-d H:i:s");
// // check name
isNameExist($settingsDepartment, $settingsDepartment->settings_department_name);
// create
$query = checkCreate($settingsDepartment);
returnSuccess($settingsDepartment, "Settings Department", $query);
