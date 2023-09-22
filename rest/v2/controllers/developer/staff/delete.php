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
    // get data
    $staff->staff_aid = $_GET['staffId'];
    checkId($staff->staff_aid);

    $query = checkDelete($staff);
    returnSuccess($staff, "Staff", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
