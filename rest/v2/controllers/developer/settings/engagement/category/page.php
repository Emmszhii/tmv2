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
// validate api key 
if (array_key_exists("start", $_GET)) {
    
    $enagagementCategory->engagement_category_start = $_GET['start'];
    $enagagementCategory->engagement_category_total = 5;

    //check to see if task id in query string is not empty and is number, if not return json error
    checkLimitId($enagagementCategory->engagement_category_start, $enagagementCategory->engagement_category_total);

    $query = checkReadLimit($enagagementCategory);
    $total_result = checkReadAll($enagagementCategory);
    http_response_code(200);
    checkReadQuery(
            $query,
            $total_result,
            $enagagementCategory->engagement_category_total,
            $enagagementCategory->engagement_category_start
        );
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
