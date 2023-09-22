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
    $staff->staff_last_name = checkIndex($data, "staff_last_name");
    $staff->staff_first_name = checkIndex($data, "staff_first_name");
    $staff->staff_middle_name = checkIndex($data, "staff_middle_name");
    $staff->staff_department = checkIndex($data, "staff_department");
    $staff->staff_date_hired = checkIndex($data, "staff_date_hired");
    $staff->staff_office = checkIndex($data, "staff_office");
    $staff->staff_updated_at = date("Y-m-d H:i:s");
    checkId($staff->staff_aid);

    $staff_id_old = checkIndex($data, "staff_id_old");
    if($staff_id_old !== $staff-> staff_id){
     // // check name
    isNameExist($staff, $staff->staff_id);
    }
    
    // update
    $query = checkUpdate($staff);
    returnSuccess($staff, "Staff", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
