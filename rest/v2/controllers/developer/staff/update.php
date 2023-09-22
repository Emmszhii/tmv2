<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$staff = new Staff($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("staffId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $staff->staff_aid = $_GET['staffId'];
    $staff->staff_id = strtoupper(checkIndex($data, "staff_id"));
    $staff->staff_description = checkIndex($data, "staff_description");
    $staff->staff_name = checkIndex($data, "staff_name");
    $staff->staff_department = checkIndex($data, "staff_department");
    $staff->staff_office = checkIndex($data, "staff_office");
    $staff->staff_updated_at = date("Y-m-d H:i:s");
    checkId($staff->staff_aid);
    // update
    $query = checkUpdate($staff);
    returnSuccess($staff, "Staff", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
