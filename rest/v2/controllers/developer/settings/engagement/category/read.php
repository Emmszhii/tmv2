<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$enagagementCategory = new EngagementCategory($conn);
// get $_GET data 

if (array_key_exists("engagementCategoryId", $_GET) ) {
    $enagagementCategory->engagement_category_aid = $_GET['engagementCategoryId'];
    checkId($enagagementCategory->engagement_category_aid);
    $query = checkReadById($enagagementCategory);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($enagagementCategory);
    http_response_code(200);
    getQueriedData($query);
     
}

// return 404 error if endpoint not available
checkEndpoint();
