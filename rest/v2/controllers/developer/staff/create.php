<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$staff = new Staff($conn);
// get should not be present
if (array_key_exists("staffId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$staff->staff_id = strtoupper(checkIndex($data, "staff_id"));
$staff->staff_description = checkIndex($data, "staff_description");
$staff->staff_last_name = checkIndex($data, "staff_last_name");
$staff->staff_first_name = checkIndex($data, "staff_first_name");
$staff->staff_middle_name = $data["staff_middle_name"];
$staff->staff_department = $data["staff_department"];
$staff->staff_date_hired = checkIndex($data, "staff_date_hired");
$staff->staff_office = $data["staff_office"];
$staff->staff_is_active = 1;
$staff->staff_created_at = date("Y-m-d H:i:s");
$staff->staff_updated_at = date("Y-m-d H:i:s");
// // check name
isNameExist($staff, $staff->staff_id);
// create
$query = checkCreate($staff);
returnSuccess($staff, "Staff", $query);
