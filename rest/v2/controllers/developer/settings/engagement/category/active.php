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
// get $_GET data
// validate api key 
if (array_key_exists("engagementCategoryId", $_GET)) {
    // check data
    checkPayload($data);
    $enagagementCategory->engagement_category_aid = $_GET['engagementCategoryId'];
    $enagagementCategory->engagement_category_is_active = trim($data["isActive"]);
    // $enagagementCategory->department_datetime = date("Y-m-d H:i:s");
    checkId($enagagementCategory->engagement_category_aid);
    $query = checkActive($enagagementCategory);
    http_response_code(200);
    returnSuccess($enagagementCategory, "EngagementCategory", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
