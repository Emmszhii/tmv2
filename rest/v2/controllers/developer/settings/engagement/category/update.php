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
    // check data
    checkPayload($data);
    // get data
    $enagagementCategory->engagement_category_aid = $_GET['engagementCategoryId'];
    $enagagementCategory->engagement_category_id = checkIndex($data, "engagement_category_id");
    $enagagementCategory->engagement_category_description = checkIndex($data, "engagement_category_description");
    $enagagementCategory->engagement_category_invoice_description = checkIndex($data, "engagement_category_invoice_description");
    $enagagementCategory->engagement_category_updated_at = date("Y-m-d H:i:s");
    checkId($enagagementCategory->engagement_category_aid);
    // update
    $query = checkUpdate($enagagementCategory);
    returnSuccess($enagagementCategory, "EngagementCategory", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
