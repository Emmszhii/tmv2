<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/staff/Staff.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$staff = new Staff($conn);
// validate api key 
if (array_key_exists("start", $_GET)) {

    $staff->staff_start = $_GET['start'];
    $staff->staff_total = 3;

    //check to see if task id in query string is not empty and is number, if not return json error
    checkLimitId($staff->staff_start, $staff->staff_total);

    $query = checkReadLimit($staff);
    $total_result = checkReadAll($staff);
    http_response_code(200);
    checkReadQuery(
        $query,
        $total_result,
        $staff->staff_total,
        $staff->staff_start
    );
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
