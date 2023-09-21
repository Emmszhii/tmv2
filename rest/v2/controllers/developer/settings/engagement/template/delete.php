<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$engagementTemplate = new EngagementTemplate($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("engagementTemplateId", $_GET)) {
    // get data
    $engagementTemplate->engagement_template_aid = $_GET['engagementTemplateId'];
    checkId($engagementTemplate->engagement_template_aid);

    $query = checkDelete($engagementTemplate);
    returnSuccess($engagementTemplate, "EngagementCategory", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
