<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../models/developer/staff/Staff.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$staff = new Staff($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// check data
checkPayload($data);

if (empty($_GET)) {
    // get task id from query string
    $staff->staff_search = checkIndex($data, "search");
    $query = checkOfficeSearch($staff);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
