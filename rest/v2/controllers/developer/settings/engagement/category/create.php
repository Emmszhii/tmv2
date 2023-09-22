<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$enagagementCategory = new EngagementCategory($conn);
// get should not be present
if (array_key_exists("engagementCategoryId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$enagagementCategory->engagement_category_id = checkIndex($data, "engagement_category_id");
$enagagementCategory->engagement_category_description = checkIndex($data, "engagement_category_description");
$enagagementCategory->engagement_category_invoice_description = checkIndex($data, "engagement_category_invoice_description");

$enagagementCategory->engagement_category_is_active = 1;
$enagagementCategory->engagement_category_created_at = date("Y-m-d H:i:s");
$enagagementCategory->engagement_category_updated_at = date("Y-m-d H:i:s");
// // check name
isNameExist($enagagementCategory, $enagagementCategory->engagement_category_id);
// create
$query = checkCreate($enagagementCategory);
returnSuccess($enagagementCategory, "EngagementCategory", $query);
