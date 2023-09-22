<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/staff/staff.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$staff = new Staff($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true); 
// get $_GET data
// validate api key 
if (array_key_exists("staffId", $_GET)) {
    // check data
    checkPayload($data);
    $staff->staff_aid = $_GET['staffId'];
    $staff->staff_is_active = trim($data["isActive"]);
    $staff->staff_updated_at = date("Y-m-d H:i:s");
    checkId($staff->staff_aid);
    $query = checkActive($staff);
    http_response_code(200);
    returnSuccess($staff, "Staff", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
