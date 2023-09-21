<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/settings/engagement/category/Category.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$enagagementCategory = new EngagementCategory($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true); 

// check data
checkPayload($data);
   
    if (empty($_GET)) {
        // get task id from query string
        $enagagementCategory->engagement_category_search = checkIndex($data, "search");
        $query = checkSearch($enagagementCategory);
        http_response_code(200);
        getQueriedData($query); 
    }

// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
