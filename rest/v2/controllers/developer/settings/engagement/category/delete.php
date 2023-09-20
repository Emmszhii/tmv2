<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$enagagementCategory = new EngagementCategory($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("engagementCategoryId", $_GET)) {
    // get data
    $enagagementCategory->engagement_category_aid = $_GET['engagementCategoryId'];
    checkId($enagagementCategory->engagement_category_aid);

    $query = checkDelete($enagagementCategory);
    returnSuccess($enagagementCategory, "EngagementCategory", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
