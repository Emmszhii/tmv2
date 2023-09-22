<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$staff = new Staff($conn);
// get $_GET data  

if (array_key_exists("staffId", $_GET)) {
    $staff->staff_aid = $_GET['staffId'];
    checkId($staff->staff_aid);
    $query = checkReadById($staff);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($staff);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
